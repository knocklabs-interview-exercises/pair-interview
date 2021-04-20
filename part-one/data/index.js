const fs = require('fs');
const _ = require('lodash');
const axios = require('axios');

const deliverEmail = (job) => {
    const data = {to: job.message.to, body: job.message.body}
    return axios.post('https://knock-delivery-api.onrender.com/service/email', data, {Authorization: "Bearer " + job.settings.api_key})
}

const deliverSms = (job) => {
    const data = {to: job.message.to, message: job.message.body}
    return axios.post('https://knock-delivery-api.onrender.com/service/sms', data, {Authorization: "Bearer " + job.settings.api_key})
}

const promises = JSON.parse(fs.readFileSync('jobs.json')).jobs
    .reduce((acc, v) => acc.some(j => v.id === j.id) ? acc : [...acc, v], [])
    .sort((a, b) => a.timestamp - b.timestamp)
    .reduce((acc, v) => acc.length < 100 ? [...acc, v] : acc, [])
    .map(v => v.type === 'email' ? deliverEmail(v) : deliverSms(v))

const lodashPromises = _(JSON.parse(fs.readFileSync('jobs.json')).jobs)
    .uniqBy(j => j.id)
    .orderBy('timestamp', 'asc')
    .take(100)
    .map(v => v.type === 'email' ? deliverEmail(v) : deliverSms(v))
    .values();

Promise.allSettled(promises).then((responses) => {
    console.log('Regular JS');
    console.log('fulfilled', responses.filter(r => r.status === 'fulfilled').length);
    console.log('rejected', responses.filter(r => r.status === 'rejected').length);
})

Promise.allSettled(lodashPromises).then((responses) => {
    console.log('With Lodash');
    console.log('fulfilled', responses.filter(r => r.status === 'fulfilled').length);
    console.log('rejected', responses.filter(r => r.status === 'rejected').length);
})


let noop = true;
