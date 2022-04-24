import { createApp } from "vue";
import "normalize.css";
import "./styles/global.css";
import App from "./App";

const app = createApp(App);

// app.config.errorHandler = (error, instance) => {};

app.mount("#app");
