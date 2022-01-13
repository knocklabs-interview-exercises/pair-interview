# Systems design exercise

In this exercise we'll be making the delivery service we designed earlier "real".

## Service goals

The goal of the service is to take well formed delivery messages from an upstream service and deliver them to a downstream provider, and log the resulting calls to that provider as well as the message sent. There are many different providers, distributed across different "types":

**Email providers**

- Sendgrid
- Postmark
- AWS SES

**SMS providers**

- Twilio
- Telnyx

**Push providers**

- APNS (iOS)
- FCM (Android)

## Service objectives

- Process up to 1,000 messages per second at peak
- Maintain "timely" delivery of messages (they are not real-time, but they do have a usefulness window)
- Ordering of messages is important, but not essential (it's ok if one email may arrive before another)

## Things to note

- Our product is multi-tenanted, in that we have many different customers sending many different volumes of messages
- There is only a single "usage" plan for our product, but we may want to consider ways to throttle or limit free tier customers

## Out of scope

- Designing upstream services that produce the delivery messages

## Diagramming tools

- [Excalidraw](https://excalidraw.com/) - free to use
- [Figma](https://figma.com) - can send an invite
