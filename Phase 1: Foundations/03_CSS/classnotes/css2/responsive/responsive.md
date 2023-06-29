### Responsive Design using Media Queries

- Responsive design is an approach to web design that makes your web pages look good on all devices (desktops, tablets, and phones). Media queries are a popular technique for delivering a tailored style sheet to different devices.

- Viewport: It is the user's visible area of a web page. It varies with the device, and it will be smaller on a mobile phone than on a computer screen.

You should include the following <meta> viewport element in all your web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

- **_Media Queries: Media queries can help with building responsive layouts. They allow you to apply different styles based on the characteristics of the device rendering the web content, most commonly the width of the browser._**

Syntax:
@media only screen and (max-width: 600px) {
body {
background-color: lightblue;
}
}

- In this example, the background color will be lightblue if the viewport is 600px wide or less.

- Grid View: Grid view is an important concept for responsive design. It allows for a flexible layout that adapts to screen size.

- Device Targeting: With media queries, you can target specific device categories. Here we are using @media screen to apply styles only on screens. The header element's bottom border color changes based on the viewport width.

- Orientation: You can also apply styles depending on the orientation of the device. In our example, the header background color changes based on whether the device is in landscape or portrait orientation.

- Resolution: Media queries allow you to adjust styles based on the resolution of the device screen. We change the body font size when the device has a minimum resolution of 2dppx (dots per 'px' unit).

- Aspect Ratio: This allows for styles to be applied when the viewport is of a specific aspect ratio. Here we are changing the body line-height when the viewport aspect ratio is 16:9.

- Hover: With media queries, you can apply styles based on whether the device can hover over elements or not. Here, we are underlining paragraph text if the device allows hovering.
