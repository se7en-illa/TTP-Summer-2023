// default import, { named import }
import nameLogger, { clickHandler, scrollHandler } from "./handlers";

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", clickHandler);

window.addEventListener("scroll", scrollHandler);

nameLogger("Orlando");
