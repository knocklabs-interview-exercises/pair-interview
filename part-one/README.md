# Knock message job

A few hours ago an incident occurred that caused some "jobs" to not run (= some emails didn't get sent). The incident is now over and things aren't on fire.

Now you come in: the team pulled together a rough list of such jobs and collected them in a JSON file at [`data/jobs.json`](./data/jobs.json). They're asking you to "replay" those jobs. *Replaying a job* means hitting an HTTP endpoint with data about that job.

You'll write a script you don't have to share with coworkers: no need for production-grade code, observability, or testing.

## Part 1: Parsing message jobs

- The [`data/jobs.json`](./data/jobs.json) file contains all the jobs to be processed
- The jobs may not be in order, but will need to be processed in order
- There may be duplicate jobs that should be removed before they can be processed

## Part 2: Building our delivery service

- To replay a job, you'll want to hit the delivery API documented in [API Documentation.md](./API%20Documentation.md)) and format the request as necessary
  - We don't need to perform retries if the API calls fail (which they will, sometimes)
- We want to take all of our processed jobs and execute them against the  delivery provider
- When all the jobs have finished we want to show the total number of successful and failed jobs in the batch for reporting purposes

## Part 3: Extending our design

- We want to add a checkpointing mechanism into our design so that jobs that have been processed are
recorded, such that we can terminate our program at any time, restart it, and execute any remaining jobs.
