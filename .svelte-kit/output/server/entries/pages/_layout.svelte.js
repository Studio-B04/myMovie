import { f as pop, p as push, h as slot, j as stringify } from "../../chunks/index.js";
import "../../chunks/client.js";
import "clsx";
import { B as Button } from "../../chunks/Button.js";
import { a as attr } from "../../chunks/attributes.js";
function Header($$payload, $$props) {
  push();
  $$payload.out += `<header class="svelte-132l9u8"><div class="svelte-132l9u8"><a href="/" class="svelte-132l9u8"><h1>MyMovie</h1></a></div></header>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  $$payload.out += `<footer class="svelte-3q0cxi"><div class="svelte-3q0cxi">Copyright @StudioB04 | 2024 <span class="svelte-3q0cxi">`;
  Button($$payload, {
    action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    children: ($$payload2) => {
      $$payload2.out += `<!---->↑`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></span></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let headerHeight = 0;
  let footerHeight = 0;
  Header($$payload);
  $$payload.out += `<!----> <main${attr("style", `--header-height: ${stringify(headerHeight)}px; --footer-height: ${stringify(footerHeight)}px`)} class="svelte-grmlmy"><div class="svelte-grmlmy"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
