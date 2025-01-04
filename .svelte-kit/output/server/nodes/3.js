import * as universal from '../entries/pages/film/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/film/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/film/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.D7B8AgNS.js","_app/immutable/chunks/MovieCard.BeAGSSM_.js","_app/immutable/chunks/runtime.CFcG-3Xj.js","_app/immutable/chunks/disclose-version.CLSDmHhS.js","_app/immutable/chunks/legacy.Bv5XtgpG.js","_app/immutable/chunks/attributes.ksGBOeus.js","_app/immutable/chunks/props.D6hYFncs.js","_app/immutable/chunks/render.Cgf7nCeE.js","_app/immutable/chunks/if.Cv0M8SsW.js","_app/immutable/chunks/index-client.ee2ljMUb.js"];
export const stylesheets = ["_app/immutable/assets/3.BPcA9kzQ.css","_app/immutable/assets/MovieCard.DWVbrQgH.css"];
export const fonts = [];
