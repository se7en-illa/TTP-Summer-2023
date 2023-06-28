- Advanced Topics
  - Flexbox
    - Flexbox Containers
    - Flexbox Items
  - Hover
  - Media, images, videos, custom backgrounds
  - Animations
  - Responsive design using media queries
  - Talking about different libraries to use with CSS

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
