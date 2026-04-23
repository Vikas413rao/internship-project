function createFloatingIcon() {
  if (document.getElementById("algoscraper-float-icon")) return;

  chrome.storage.local.get(["isMinimized"], (res) => {
    if (!res.isMinimized) return;

    const wrapper = document.createElement("div");
    wrapper.id = "algoscraper-float-icon";

    wrapper.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #1976d2;
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("assets/download.png");
    img.style.width = "28px";
    img.style.height = "28px";

    wrapper.appendChild(img);
    document.body.appendChild(wrapper);

    wrapper.onclick = () => {
      chrome.runtime.sendMessage(
        { action: "restorePopup" },
        () => {}
      );
      wrapper.remove();
    };
  });
}


chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "showFloatIcon") {
    createFloatingIcon();
  }

  if (msg.action === "removeFloatIcon") {
    document.getElementById("algoscraper-float-icon")?.remove();
  }
});


createFloatingIcon();