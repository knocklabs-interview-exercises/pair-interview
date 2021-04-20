const getMessageType = (type, data) => {
    let message;
    switch (type) {
        case 'delay':
            message= `Delay for ${data.delay_for.value} seconds`;
            break;
        case 'channel':
            message= `Send to ${data.provider_name}`;
            break;
        case 'batch':
            message= `Batched on ${data.batch_key}`;
            break;
    }
    return message;
}
export default getMessageType;
