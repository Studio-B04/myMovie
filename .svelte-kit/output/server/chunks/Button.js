import { m as fallback, h as slot, o as bind_props } from "./index.js";
import { a as attr } from "./attributes.js";
function Button($$payload, $$props) {
  let action = fallback($$props["action"], () => {
  });
  let disabled = fallback($$props["disabled"], false);
  $$payload.out += `<button class="button"${attr("disabled", disabled, true)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></button>`;
  bind_props($$props, { action, disabled });
}
export {
  Button as B
};
