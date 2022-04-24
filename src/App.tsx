import { defineComponent } from "vue";
import { root } from "./App.css";

export default defineComponent({
  setup() {
    return () => <div class={root}>App.vue</div>;
  },
});
