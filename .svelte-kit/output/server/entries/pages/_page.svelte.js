import { m as fallback, j as stringify, h as slot, o as bind_props, l as escape_html, f as pop, p as push, q as await_block, t as ensure_array_like } from "../../chunks/index.js";
import { G as GetLatestMovies, S as SearchMovie } from "../../chunks/api.js";
import { I as Image, S as Stars, T as Title } from "../../chunks/MovieCard.svelte_svelte_type_style_lang.js";
import { a as attr } from "../../chunks/attributes.js";
import { B as Button } from "../../chunks/Button.js";
function Grid($$payload, $$props) {
  let width = fallback($$props["width"], "300px");
  let height = fallback($$props["height"], "200px");
  $$payload.out += `<ul${attr("style", `--grid-width: ${stringify(width)}; --grid-height: ${stringify(height)};`)} class="svelte-uywpku"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { width, height });
}
function MovieCard($$payload, $$props) {
  push();
  let id = fallback($$props["id"], void 0);
  let title = fallback($$props["title"], void 0);
  let image = fallback($$props["image"], void 0);
  let description = fallback($$props["description"], void 0);
  let date = fallback($$props["date"], void 0);
  let score = fallback($$props["score"], void 0);
  $$payload.out += `<article${attr("id", id)}>`;
  Image($$payload, {
    src: image,
    alt: `Affiche du film ${stringify(title)}`
  });
  $$payload.out += `<!----> <div><h3>${escape_html(title)} <small>(${escape_html(new Date(date).getFullYear())})</small></h3> `;
  if (score) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="score">`;
    Stars($$payload, { score: score / 2 });
    $$payload.out += `<!----> <small>(${escape_html(score)}/10)</small></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p>${escape_html(description)}</p></div></article>`;
  bind_props($$props, {
    id,
    title,
    image,
    description,
    date,
    score
  });
  pop();
}
function Latest($$payload, $$props) {
  push();
  let max = fallback($$props["max"], 5);
  $$payload.out += `<div class="similar svelte-1m02yxx"><!---->`;
  await_block(
    GetLatestMovies(max),
    () => {
    },
    (data) => {
      if (data?.results?.length) {
        $$payload.out += "<!--[-->";
        Grid($$payload, {
          width: "220px",
          children: ($$payload2) => {
            const each_array = ensure_array_like(data?.results);
            $$payload2.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let {
                id,
                original_title,
                overview,
                poster_path,
                release_date,
                original_language,
                vote_average
              } = each_array[$$index];
              $$payload2.out += `<li><a${attr("href", `/film/${stringify(id)}`)} class="svelte-1m02yxx">`;
              MovieCard($$payload2, {
                id,
                title: original_title,
                image: poster_path,
                description: overview,
                date: release_date,
                language: original_language,
                score: vote_average
              });
              $$payload2.out += `<!----></a></li>`;
            }
            $$payload2.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `Il n'y a aucun film tendance en ce moment`;
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!----></div>`;
  bind_props($$props, { max });
  pop();
}
function _page($$payload, $$props) {
  push();
  let query = "";
  let data = null;
  let loading = false;
  let error = void 0;
  async function search(page) {
    loading = true;
    data = await SearchMovie(query, page).catch((err) => {
      error = err;
      data = void 0;
    }).finally(() => {
      loading = false;
    });
  }
  Title($$payload, {
    size: "xl",
    level: 2,
    align: "center",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Bienvenue sur le Portail MyMovie`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Title($$payload, {
    size: "sm",
    level: 3,
    align: "center",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Le site de référence du cinéma ! Retrouvez toutes les informations sur vos films préférés.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <form><input type="search"${attr("value", query)}> `;
  Button($$payload, {
    action: () => search(1),
    disabled: query.length < 3 ? "disabled" : void 0,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Chercher`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form> <section class="home">`;
  if (loading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `recherche...`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (error) {
    $$payload.out += "<!--[-->";
    Title($$payload, {
      size: "sm",
      align: "center",
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(error)}`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!error && !loading && data) {
    $$payload.out += "<!--[-->";
    if (data?.total_results === 0) {
      $$payload.out += "<!--[-->";
      Title($$payload, {
        size: "sm",
        align: "center",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Aucun film ne correspond à votre recherche...`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
      if (data?.total_results === 1) {
        $$payload.out += "<!--[-->";
        Title($$payload, {
          size: "sm",
          align: "center",
          children: ($$payload2) => {
            $$payload2.out += `<!---->1 film trouvé pour "${escape_html(query)}" :`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload.out += "<!--[!-->";
        Title($$payload, {
          size: "sm",
          align: "center",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(data?.total_results)} films trouvés pour "${escape_html(query)}" :`;
          },
          $$slots: { default: true }
        });
      }
      $$payload.out += `<!--]--> `;
      Grid($$payload, {
        width: "300px",
        children: ($$payload2) => {
          const each_array = ensure_array_like(data?.results);
          $$payload2.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let {
              id,
              original_title,
              overview,
              poster_path,
              release_date,
              original_language,
              vote_average
            } = each_array[$$index];
            $$payload2.out += `<li><a${attr("href", `/film/${stringify(id)}`)}>`;
            MovieCard($$payload2, {
              id,
              title: original_title,
              image: poster_path,
              description: overview,
              date: release_date,
              language: original_language,
              score: vote_average
            });
            $$payload2.out += `<!----></a></li>`;
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!----> `;
      if (data?.page < data?.total_pages) {
        $$payload.out += "<!--[-->";
        Button($$payload, {
          disabled: loading,
          action: () => search(data?.page + 1),
          children: ($$payload2) => {
            $$payload2.out += `<!---->Voir les films suivants`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section> <section class="movie__section" id="latest">`;
  Title($$payload, {
    level: 3,
    size: "xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Les films tendances`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Latest($$payload, { max: "10" });
  $$payload.out += `<!----></section>`;
  pop();
}
export {
  _page as default
};
