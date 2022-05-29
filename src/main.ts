import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import mitt from "mitt";

const app = createApp(App).use(store).use(router);
app.config.globalProperties.emitter = mitt();
app.mount("#app");
