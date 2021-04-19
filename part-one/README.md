# Knock message job

In this pair programming exercise we're going to be building a core piece of the Knock
infrastructure; our message delivery service.

We'll be creating a message delivery service that reads jobs from a JSON file and ultimately calls
a downstream delivery provider to send the message.

## Part 1: Parsing message jobs

- The `jobs.json` file contains all of the jobs to be processed
- The jobs may not be in order, but will need to be processed in order
- There may be duplicate jobs that should be removed

## Part 2: Building our delivery services

- We want to create 2 different delivery providers: an `email` provider, and an `sms` provider
- Each delivery provider should call a specific delivery endpoint (see API Documentation.md) and
  format the request as necessary
- We should consider failure handling as part of the design in the delivery service

## Part 3: Stitching it together

- We want to take all of our processed jobs and execute them to the correct delivery provider
  (email jobs should go to the `email` provider, sms jobs should go to the `sms` provider)
- When all of the jobs have finished we want to show the total number of successful and failed jobs
  in the batch

## Part 4: Extending our design

- We want to add checkpointing into our delivery queue so that jobs that have been processed are
  marked as done. On the startup of our program we should skip any completed jobs and continue
  processing from the last job (if any are left)
