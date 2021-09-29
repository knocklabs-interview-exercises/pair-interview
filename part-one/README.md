# Knock message job

In this pair programming exercise we're going to be building a core piece of the Knock
infrastructure; our message delivery service.

We'll be creating a message delivery service that reads jobs from a JSON file and ultimately calls
a downstream delivery provider to send the message.

## Part 1: Parsing message jobs

- The `jobs.json` file contains all of the jobs to be processed
- The jobs may not be in order, but will need to be processed in order
- There may be duplicate jobs that should be removed before they can be processed

## Part 2: Building our delivery services

- We want to create 2 different delivery providers: an `email` provider, and an `sms` provider
- Each delivery provider should call a specific delivery endpoint (see API Documentation.md) and
  format the request as necessary

## Part 3: Stitching it together

- We want to take all of our processed jobs and execute them to the correct delivery provider
  (email jobs should go to the `email` provider, sms jobs should go to the `sms` provider)
- When all of the jobs have finished we want to show the total number of successful and failed jobs
  in the batch

## Part 4: Extending our design

- We want to add a checkpointing mechanism into our design so that jobs that have been processed are
  recorded, such that we can terminate our program, restart it, and execute any remaining jobs.
