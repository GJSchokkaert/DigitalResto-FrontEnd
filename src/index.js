import "./App.scss";
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Digital-Resto",
  },
});

export default app;
