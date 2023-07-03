# Tailwind CSS Tutorial

## Overview

This example demonstrates the use of the Tailwind CSS library, a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

## Components

### index.html

This is the main HTML file for the website. It references the Tailwind CSS library using a CDN link in the head section.

## How it works

We're using a variety of utility classes to style our elements. Here's what a few of them mean:

- `p-6`: padding on all sides
- `max-w-sm`: max-width small
- `mx-auto`: margin auto on the x-axis (horizontal centering)
- `bg-white`: background color white
- `rounded-xl`: extra large rounded corners
- `shadow-md`: medium shadow
- `flex`: flexbox
- `items-center`: align items in the center on the cross axis
- `space-x-4`: horizontal spacing between child elements

## Setup

In this example, we've included Tailwind CSS via a CDN for simplicity. In a real-world project, you would install Tailwind via npm and include it in your build process.

To include Tailwind CSS via a CDN, simply include this link in your HTML:

```html
<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
  rel="stylesheet"
/>
```
