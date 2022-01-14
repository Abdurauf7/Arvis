import { createApp } from "vue";
import Toaster from "@meforma/vue-toaster";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .use(Toaster, {
    position: "top-right",
    duration: 4000
  })
  .mount("#app");
