// named exports
export const clickHandler = (event) => {
  console.log("clicked");
};

export const scrollHandler = (event) => {
  console.log("scrolling");
};

// default export
export default (name) => {
  console.log(name);
};
