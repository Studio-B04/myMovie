import { k as getContext, l as escape_html, f as pop, p as push } from "../../chunks/index.js";
import "clsx";
import { u as updated, s as stores } from "../../chunks/client.js";
({
  get current() {
    return updated.current;
  },
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get data() {
    return context().page.data;
  },
  get error() {
    return context().page.error;
  },
  get form() {
    return context().page.form;
  },
  get params() {
    return context().page.params;
  },
  get route() {
    return context().page.route;
  },
  get state() {
    return context().page.state;
  },
  get status() {
    return context().page.status;
  },
  get url() {
    return context().page.url;
  }
};
const page = page$1;
function _error($$payload, $$props) {
  push();
  $$payload.out += `<section class="error svelte-1el8dpl"><h2>${escape_html(page.error.message)}</h2> <p>Une erreur s'est produite.</p> <a href="/">Retour à l'accueil</a></section>`;
  pop();
}
export {
  _error as default
};
