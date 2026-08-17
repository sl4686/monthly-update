// Password gate — runs at Vercel's edge before any file is served.
// Credentials come from environment variables set in the Vercel dashboard
// (Settings → Environment Variables), NOT from this file or the repo:
//   DASH_PASSWORD  (required) — the shared password
//   DASH_USER      (optional) — username, defaults to "radai"
// To change or rotate the password: edit the env var in Vercel, then redeploy.

export const config = { matcher: "/(.*)" };

export default function middleware(request) {
  const expectedUser = process.env.DASH_USER || "radai";
  const expectedPass = process.env.DASH_PASSWORD;

  // Fail closed if not configured, with a hint for the admin.
  if (!expectedPass) {
    return new Response(
      "Access control is not configured. Set DASH_PASSWORD in Vercel → Settings → Environment Variables, then redeploy.",
      { status: 503, headers: { "content-type": "text/plain" } }
    );
  }

  const auth = request.headers.get("authorization") || "";
  if (auth.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const idx = decoded.indexOf(":");
      const user = decoded.slice(0, idx);
      const pass = decoded.slice(idx + 1);
      if (user === expectedUser && pass === expectedPass) {
        return; // authenticated — continue to the requested file
      }
    } catch (_) {
      /* malformed header — fall through to challenge */
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Business Snapshot", charset="UTF-8"',
      "content-type": "text/plain",
    },
  });
}
