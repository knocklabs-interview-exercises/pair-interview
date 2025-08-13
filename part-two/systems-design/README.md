# Systems design exercise

In this exercise we'll be designing a key component of Knock: our **message delivery pipeline**.

At Knock we accept customer API requests that "trigger" a defined workflow for one or more recipients, and turn them into notification messages that should be delivered to a provider using some predefined configuration.

Let's assume our ingestion API and workflow execution service are already defined, and are **not** in scope for this exercise. Imagine that our workflow service is ready to "produce" well-formed notification messages that are ready to be delivered by our *delivery service*. We'll design that *delivery service* here. How messages are sent to your delivery service is up to you.

## Service definition

Our deliver service will eventually integrate with many different providers to send out across different channels. Initially we'll want to support emails, SMS, push messages, and chat providers (Slack, Discord, and Teams). Our customers provide the appropriate configuration for each provider, which we store in a "configuration service". You can assume that the delivery service can send as many requests as it wants to the configuration service, which responds instantly at any scale.

The delivery service should:

- Process each notification at most once.
- Call the appropropriate delivery provider for the notification.
- Handle retries of messages, with exponential backoffs: 8 retries over 30 minutes.
- Record an *audit trail* delivery logs for all calls made to downstream services.
  - This trail should be eventually be available to customers: this means customers should be able to look at delivery logs in the Knock dashboard.
  - We only need to retain delivery logs for 90 days; after that, they can be deleted or archived.

## Service objectives

- The first delivery attempt for a message—that is, the first request to the remote provider—should happen no longer than 5s *after the notification request was received*.
- Process 10,000 notifications per second, but be able to absorb spikes up to 50,000 notifications per second.
- Ordering of messages is important, but not essential (it's OK if multiple emails from the same customer arrive out of order)—a best-effort approach is okay.

## Things to note

- Our product is multi-tenanted. We have different customers sending different volumes of messages. Our product aligns with a sort of 80/20 rule: 20% of our customers send 80% of our messages. It could get more extreme, with a handful of customers accounting for a large percentage of those messages.
- There are multiple tiers of customers we should consider: *Enterprise*, *Paid*, and *Free*. Enterprise customers sign strict SLAs with us and account for the bulk of the volume (75%). You don't have to worry about the specifics of SLAs: it's enough to know that we'll want to give these customers "special treatment".

## Out of scope

- Designing the API ingestion or workflow service
- Designing the configuration service

## Diagramming tools

- [Excalidraw](https://excalidraw.com/) - free to use
- [Figma](https://figma.com) - can send an invite
