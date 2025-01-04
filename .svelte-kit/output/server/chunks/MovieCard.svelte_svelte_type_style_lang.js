import { m as fallback, u as element, o as bind_props, h as slot, j as stringify, v as add_styles, t as ensure_array_like, f as pop, p as push } from "./index.js";
import { a as attr } from "./attributes.js";
function Title($$payload, $$props) {
  let level = fallback($$props["level"], void 0);
  let size = fallback($$props["size"], "m");
  let align = fallback($$props["align"], "start");
  element(
    $$payload,
    level ? `h${level}` : "strong",
    () => {
      $$payload.out += `${attr("class", `title title--${stringify(size)} title--${stringify(align)} svelte-1x3h6zd`)}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { level, size, align });
}
function Image($$payload, $$props) {
  let calculatedSrc;
  let src = fallback($$props["src"], void 0);
  let width = fallback($$props["width"], 500);
  let ratio = fallback($$props["ratio"], 1 / 1.5);
  let alt = fallback($$props["alt"], "");
  const size = width > 600 ? "original" : "w500";
  calculatedSrc = !src || src === "" || src === null ? `https://placehold.co/${width}x${Math.round(width * 1 / ratio)}?text=Image+Manquante` : `https://image.tmdb.org/t/p/${size}${src}`;
  $$payload.out += `<img${add_styles({
    width: width + "px !important",
    "aspect-ratio": ratio + " !important"
  })}${attr("src", calculatedSrc)}${attr("alt", alt)} class="svelte-18z7mo8">`;
  bind_props($$props, { src, width, ratio, alt });
}
function Stars($$payload, $$props) {
  push();
  let score = fallback($$props["score"], 0);
  const clampedScore = Math.max(0, Math.min(5, score));
  const fullStars = Math.floor(clampedScore);
  const hasHalfStar = clampedScore % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const each_array = ensure_array_like(new Array(fullStars));
  const each_array_1 = ensure_array_like(new Array(emptyStars));
  $$payload.out += `<span aria-hidden="true" class="svelte-d2pvsu"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$payload.out += `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="svelte-d2pvsu"><path d="M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z"></path></svg>`;
  }
  $$payload.out += `<!--]--> `;
  if (hasHalfStar) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="svelte-d2pvsu"><path d="M16,6.52l2.76,5.58.46,1,1,.15,6.16.89L22,18.44l-.75.73.18,1,1.05,6.13-5.51-2.89L16,23l-.93.49L9.56,26.34l1-6.13.18-1L10,18.44,5.58,14.09l6.16-.89,1-.15.46-1L16,6.52M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z"></path><path d="M11.45 11.22L1.28 12.7 8.64 19.87 6.9 30 16 25.22 16 2 11.45 11.22z"></path></svg>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    each_array_1[$$index_1];
    $$payload.out += `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="svelte-d2pvsu"><path d="M16,6.52l2.76,5.58.46,1,1,.15,6.16.89L22,18.44l-.75.73.18,1,1.05,6.13-5.51-2.89L16,23l-.93.49L9.56,26.34l1-6.13.18-1L10,18.44,5.58,14.09l6.16-.89,1-.15.46-1L16,6.52M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z"></path></svg>`;
  }
  $$payload.out += `<!--]--></span>`;
  bind_props($$props, { score });
  pop();
}
export {
  Image as I,
  Stars as S,
  Title as T
};
