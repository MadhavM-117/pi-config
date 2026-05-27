import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function(pi: ExtensionAPI) {
	pi.registerCommand("clear", {
		description: "Start a new session",
		handler: async (_args, ctx) => {
			await ctx.waitForIdle();
			const newSessionResult = await ctx.newSession({
				parentSession: ctx.sessionManager.getSessionFile(),
				withSession: async (sessionCtx) => {
					await sessionCtx.waitForIdle();
					sessionCtx.ui.notify("New session!");
					// Also ensure proper notification display
				},
			});

			if (newSessionResult.cancelled) {
				ctx.ui.notify("New session failed!", "error")
			}
		},
	});


}
