export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["base.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BV_1cHUJ.js","app":"_app/immutable/entry/app.DnvCvebR.js","imports":["_app/immutable/entry/start.BV_1cHUJ.js","_app/immutable/chunks/entry.Crodvzmd.js","_app/immutable/chunks/index-client.ee2ljMUb.js","_app/immutable/chunks/runtime.CFcG-3Xj.js","_app/immutable/entry/app.DnvCvebR.js","_app/immutable/chunks/runtime.CFcG-3Xj.js","_app/immutable/chunks/render.Cgf7nCeE.js","_app/immutable/chunks/disclose-version.CLSDmHhS.js","_app/immutable/chunks/if.Cv0M8SsW.js","_app/immutable/chunks/props.D6hYFncs.js","_app/immutable/chunks/this.DkqGLlrH.js","_app/immutable/chunks/index-client.ee2ljMUb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/film/[slug]",
				pattern: /^\/film\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
