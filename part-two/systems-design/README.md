# Systems design exercise

In this exercise we'll be designing a key component of Knock: our message delivery pipeline.

In Knock we take in customer API requests that "trigger" a defined workflow for one or more recipients, and turn them into notification messages that should be delivered to a provider using some predefined configuration.

Our ingestion API and workflow execution service are already defined, and are **not** in scope for this exercise. Please imagine that our workflow service is ready to "produce" well-formed notification messages that are ready to be delivered by our delivery service. It's that service that we're going designing here, and how those messages are sent to your delivery service is up to you to define.

## Service definition

Our deliver service will integrate with many different providers to send out across different channels. We'll initially look to support emails, SMS, push messages, and chat providers like Slack, Discord and Teams. Our customers provide the appropriate configuraion for each provider, which we store in a "configuration service".

The delivery service should:

- Process each notification at most once
- Call the appropropriate delivery provider (sender) for the notification
- Handle retries of messages, with exponential backoffs
- Record delivery logs for all calls made to downstream services
- Handle the result of the notification success or failure and pass this result to other services

## Service objectives

- Start delivery of messages within 1s 
- Process 10,000 notifications per second, but be able to absorb spikes up to 50,000 notifications per second
- Ordering of messages is important, but not essential (it's OK if multiple emails from the same customer arrive out of order)

## Things to note

- Our product is multi-tenanted in that we have many different customers sending many different volumes of messages (imagine one customer accounts for 60% of the peak volume)
- There are multiple tiers of customers we should consider: Enterprise, Paid, and Free. Enterprise customers sign strict SLAs with us and account for the bulk of the volume (75%)

## Out of scope

- Designing the API ingestion or workflow service
- Designing the configuration service
- Designing the message logging service

## Diagramming tools

- [Excalidraw](https://excalidraw.com/) - free to use
- [Figma](https://figma.com) - can send an invite
