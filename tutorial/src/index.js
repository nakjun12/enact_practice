import { render } from "react-dom";

import App from "./App";

let appElement = <App />;

// In a browser environment, render instead of exporting
if (typeof window !== "undefined") {
  render(
    appElement,
    document.getElementById("root") // provided by Enact's HTML template
  );
}

export default appElement;
