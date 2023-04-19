# Systems design exercise

In this exercise we'll be designing a key component of Knock: our message delivery pipeline.

In Knock we take in customer API requests that "trigger" a defined workflow for one or more recipients, and turn them into notification messages that should be delivered to a provider using some predefined configuration.

Our ingestion and workflow execution service are already defined, and are **not** in scope for this exercise. Please imagine that our workflow service is ready to "produce" well-formed notification messages that are ready to be delivered by our delivery service. It's that service that we're going designing here.

## Service definition

Our deliver service will integrate with many different providers to send out across different channels. We'll initially look to support emails, SMS, push messages, and chat providers like Slack, Discord and Teams. Our customers provide the appropriate configuraion for each provider, which we store in a "configuration service".

The delivery service should:

- Process each notification at most once
- Call the appropropriate delivery provider (sender) for the notification
- Handle retries of messages, with exponential backoffs
- Record delivery logs for all calls made to downstream services (this logging service can be OOS from this design)
- Handle the result of the notification success or failure and pass this result to other services

## Service objectives

- Aim to start delivery of messages within 1s
- Process 10,000 notificaions per second, but be able to absorb spikes up to 50,000 notifications per second
- Maintain "timely" delivery of messages (they are not real-time, but they do have a usefulness window)
- Ordering of messages is important, but not essential (it's ok if one email may arrive before another)

## Things to note

- Our product is multi-tenanted in that we have many different customers sending many different volumes of messages (imagine one customer accounts for 60% of the peak volume)
- There is only a single "usage" plan for our product, but we may want to consider ways to throttle or limit free tier customers

## Out of scope

- Designing the API or workflow service
- Designing the configuration service

## Diagramming tools

- [Excalidraw](https://excalidraw.com/) - free to use
- [Figma](https://figma.com) - can send an invite
