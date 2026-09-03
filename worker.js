export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.zulviq.com" || url.hostname.startsWith("www.")) {
      url.hostname = "zulviq.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
