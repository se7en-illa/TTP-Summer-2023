- Advanced Topics

  - Flexbox
    - Flexbox Containers
    - Flexbox Items
  - Hover
  - Media, images, videos, custom backgrounds
  - Animations
  - Responsive design using media queries
  - Talking about different libraries to use with CSS

- :hover Pseudo-class
  The :hover pseudo-class in CSS selects elements when the mouse cursor is over them. It's often used to change the color of links when you hover over them, but it can be used on all elements, not just links.

It's very useful for adding interactive styles to elements on your webpage.

Other Related CSS Properties

- Cursor: The cursor property specifies the type of cursor to be displayed when pointing on an element. For example, cursor: pointer; makes the cursor look like a pointer, which is often used to indicate that an element is clickable.

- Transition: The transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows you to control the speed of the hover effect, among other things.

- Transform: The transform property allows you to rotate, scale, skew, or translate an element. It's often used with :hover to create interesting interactive effects.

--- code example

In this code:

- The color of the link changes to red when you hover over it.
- The background color of the button changes to blue, and the cursor changes to a - pointer when you hover over it. This change happens over 0.5 seconds because of the transition property.
- The image scales up (increases in size by 10%) when you hover over it. This change happens over 0.3 seconds because of the transition property.
- This is just a simple example. You can use :hover with almost any CSS property to create a wide variety of interactive effects.

## Flexbox

###### The flexbox layout module provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknow or dynamic.

- Flex gives the container the ability to alter its items' width/height and order to best fill the available space and accomodate all kinds of display devices and screen sizes.
- Again, but with less jardon: An efficient way to have our parent elements communicate to our children elements to behave in a certain way even if we don't know much about our children.
- A flex container expands items to fill available free space or shrinks them to prevent overflow

## Flex Terminology

![flex layout](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg 'Flex Layout')

Items will be laid out following either the main axis (from main-start to main-end) or the cross axis (from cross-start to cross-end).

- **main axis** – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).
- **main-start** | **main-end** – The flex items are placed within the container starting from main-start and going to main-end.
- **main size** – A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
- **cross axis** – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
- **cross-start** | **cross-end** – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
- **cross size** – The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

### Reminder: Block Elements and Inline Elements

- A block level element always starts on a new line and takes up the full width available
  - Ex: divs, paragraphs, forms, tables, lists
- An inline level element does not start on a new line and only takes up as much width as necessary
  - Ex: spans, emphasis, inputs

### Flexbox Container: display

- **display: flex;** defines an element as a flex container and enables a flex context for all its direct children

.container {
display: flex;
}

### Flexbox Container

- Flexbox gives the container the ability to alter its items' dimensions (and order) to best fill the available space
- A flex container expands flexible items to fill free space, or shrinks them to prevent overflow
- Flexbox is (aside from optional wrappping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
- "main axis" and "cross axis"

### Flexbox Container: Direction

- Think of flex items as primarily laying out either in horizontal rows or vertical columns.

.container {
flex-direction: row | row-reverse | column | column-reverse;
}

### Flexbox Container: Wrap

- Items will try to fit onto one line. Items can wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

.container {
flex-wrap: nowrap | wrap | wrap-reverse;
}

### Flexbox Items: flex-grow

- Flex items can grow if necessary. This property accepts a unit-less value that serves as a proprtion. It dictates what amount of the available space inside the flex container the item should take up.
- eg. If all items have flex-grow set to 1, every child will set an equal size inside the container.

.item {
flex-grow: 1; (default 0)
}

If set to 2, that child would take up twice as much space as the others.

.item {
flex-grow: 2;
}

### Flexbox Items: flex-shrink

- This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.

.item {
flex-shrink: 1; (default 1)
}

### Flexbox Items: flex-basis

- Like width property (or height, depending on flex-direction)
- If a relative value, indicates proprtion of that item's width that should be applied.
- Default size of the element before flex-grow or flex-shrink kicks in

.item {
flex-basis: <length> | auto; (default auto)
}

### Other flexbox properties

- flex-start (default): items are packed toward the start of the flex-direction.

- flex-end: items are packed toward the end of the flex-direction.

- start: items are packed toward the start of the writing-mode direction.

- end: items are packed toward the end of the writing-mode direction.

- left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.

- right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.

- center: items are centered along the line

- space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line

- space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.

- space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

- stretch (default): stretch to fill the container (still respect min-width/max-width)

- flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.

- flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.

- center: items are centered in the cross-axis

- baseline: items are aligned such as their baselines align
