# API Documentation

## Email API

**Endpoint**

POST https://knock-delivery-api.onrender.com/service/email

**Authentication**

`Authorization: Bearer {{ api_key }}`

**Payload**

```json
{
  "to": "to@example.com",
  "body": "The message"
}
```

**OK Response**

Status code: `200`

```json
{
  "messageId": "f3331b25-2a16-4221-a851-ca5df5ea9202",
  "status": "ok"
}
```

**Error Response**

Status code: `422`

```json
{
  "error": "There was a reason we couldn't process your request",
  "status": "error"
}
```

## SMS API

**Endpoint**

POST https://knock-delivery-api.onrender.com/service/sms

**Authentication**

`Authorization: Bearer {{ api_key }}`

**Payload**

```json
{
  "to": "123-456-7890",
  "message": "The message"
}
```

**OK Response**

Status code: `200`

```json
{
  "messageId": "f3331b25-2a16-4221-a851-ca5df5ea9202",
  "status": "ok"
}
```

**Error Response**

Status code: `422`

```json
{
  "error": "There was a reason we couldn't process your request",
  "status": "error"
}
```
