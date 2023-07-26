# `useEffect`

Let's create an application to demonstrate the following features of ReactJS
- react lifecycle
- dependencies

Create an app that:
- uses `useEffect` to:
  - retrieve data using `axios` or `fetch`
  - sets a dependency of an `id`
- changes `id` in the parent component
- reloads subcomponent when `id` changes
  - like choosing an `option` from a `select` of a bunch of ids
  - subcomponent uses `useEffect` dependency to reload data by id
- creates a component with a group of items
- maps through the list