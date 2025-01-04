import { m as fallback, l as escape_html, o as bind_props, j as stringify, u as element, t as ensure_array_like, f as pop, p as push } from "../../../../chunks/index.js";
import { I as Image, S as Stars, T as Title } from "../../../../chunks/MovieCard.svelte_svelte_type_style_lang.js";
import { a as attr } from "../../../../chunks/attributes.js";
function Pill($$payload, $$props) {
  let label = fallback($$props["label"], void 0);
  $$payload.out += `<div class="pill">${escape_html(label)}</div>`;
  bind_props($$props, { label });
}
function formatDate(date, pattern = "dd/mm/yy") {
  const DATE = new Date(date);
  if (!(DATE instanceof Date) || isNaN(DATE)) {
    throw new Error("Invalid date provided.");
  }
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  const map = {
    dd: String(DATE.getDate()).padStart(2, "0"),
    mm: String(DATE.getMonth() + 1).padStart(2, "0"),
    // Months are 0-based
    yyyy: DATE.getFullYear(),
    yy: String(DATE.getFullYear()).slice(-2),
    MM: months[DATE.getMonth()],
    // Full text month
    D: days[DATE.getDay()]
    // Full text day
  };
  return pattern.replace(/dd|mm|yyyy|yy|MM|D/g, (match) => map[match]);
}
function _page($$payload, $$props) {
  push();
  let data = fallback($$props["data"], () => ({}), true);
  $$payload.out += `<div class="movie"${attr("id", data.id)}><header class="movie__header"><div class="movie__header__image">`;
  Image($$payload, {
    src: data.poster_path,
    alt: `affiche du film ${stringify(data.title)}`,
    width: 400
  });
  $$payload.out += `<!----></div> <div class="movie__header__details">`;
  element(
    $$payload,
    data.homepage ? "a" : "div",
    () => {
      $$payload.out += ` class="movie__header__details__title"${attr("href", data.homepage || void 0)}${attr("target", data.homepage ? "_blank" : void 0)}`;
    },
    () => {
      Title($$payload, {
        level: 2,
        size: "xxl",
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(data.title)} `;
          if (data.title !== data.original_title) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<small>(${escape_html(data.original_title)})</small>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (data.tagline) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<em>“${escape_html(data.tagline)}”</em>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
    }
  );
  $$payload.out += ` `;
  if (data.production_countries) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.production_countries);
    $$payload.out += `<div class="movie__header__details__countries"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { iso_3166_1, name } = each_array[$$index];
      $$payload.out += `<img${attr("src", `https://flagsapi.com/${stringify(iso_3166_1.toUpperCase())}/shiny/64.png`)}${attr("alt", name)}>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.vote_average && data.vote_count) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="movie__header__details__reviews" href="#reviews">`;
    Stars($$payload, { score: data.vote_average / 2 });
    $$payload.out += `<!----> ${escape_html(Math.round(data.vote_average * 100) / 100)}/10 <small>(${escape_html(data.vote_count)} avis.)</small></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.release_date) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="movie__header__details__remease"><strong>Date de sortie :</strong> ${escape_html(formatDate(data.release_date, "D dd MM yyyy."))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.production_companies) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(data.production_companies);
    $$payload.out += `<strong>Production :</strong> <ul class="movie__header__details__production"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let { id, name, origin_country } = each_array_1[$$index_1];
      $$payload.out += `<li${attr("id", id)}>${escape_html(name)} `;
      if (origin_country) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<small>(${escape_html(origin_country)})</small>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.overview) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="movie__header__details__overview">${escape_html(data.overview)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.genres) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(data.genres);
    $$payload.out += `<div class="movie__header__details__genres"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let genre = each_array_2[$$index_2];
      Pill($$payload, { label: genre.name });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></header> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
