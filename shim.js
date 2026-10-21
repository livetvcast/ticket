window.addEventListener("message", function (e) {
  if (e.source !== window || !e.data || e.data.source !== "TSF_PAGE") return;
  window.postMessage(
    { source: "TSF_BRIDGE", id: e.data.id, ok: false, error: "Gemini is not set up in the app" },
    "*"
  );
});
