# Part two: full-stack exercise

In this excercise we'll be updating this very vanilla, very plain `create-react-app` and introducing
more functionality.

## Getting started

1. `npm install`
2. `npm run start`
3. open your web browser to port `3000`

## Excercise

We're going to be adding some features to our very barebones application to give it some more
functionality.

## Part 1: Introduce an external API fetch

We're going to fetch the items we're showing from an API endpoint rather than a static list.
Clicking on an item should still show the details about it.

**Note: you can find the API documentation in `API Documentation.md`**

## Part 2: Add search and filters

Using the prebuilt `<Search />` and `<TypeFilter />` components, introduce simple filters where:

- Searching should filter the workflow items by the name
- Clicking on one or more filters should filter by that type
- Introduce a way to clear all of the filters and search term set
