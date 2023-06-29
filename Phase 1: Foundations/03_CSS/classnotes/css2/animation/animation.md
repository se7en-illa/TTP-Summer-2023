### CSS Animations

- animation-name: Specifies the name of the @keyframes at-rule describing the animation's keyframes.

- animation-duration: Defines how long an animation takes to complete one cycle. It's usually specified in seconds (s) or milliseconds (ms).

- animation-timing-function: Establishes the acceleration curve of the animation, i.e., it can make the animation proceed with constant speed, or start slowly and end fast, etc. Values can include linear, ease, ease-in, ease-out, ease-in-out, or custom cubic-bezier function.

- animation-delay: Specifies the delay between the time the element is loaded and the start of the animation sequence. Like animation-duration, it can be defined in seconds or milliseconds.

- animation-iteration-count: Determines the number of times the animation will run. It can be a number, or infinite for endless animations.

- animation-direction: Sets whether an animation should play forward, backward, or alternate between the two. Values can be normal, reverse, alternate, or alternate-reverse.

- animation-fill-mode: Sets what values are applied by the animation outside the time it's executing. For instance, you might want the element to retain the styles of the last keyframe when the animation ends. Values can be none, forwards, backwards, or both.

- animation-play-state: Allows you to pause and resume your animation. The values can be running or paused.

- @keyframes: The rule where the animation is created. It consists of a set of keyframes that describe the animation's intermediate steps. Each keyframe describes how the animated element should render at a given time during the animation sequence.
