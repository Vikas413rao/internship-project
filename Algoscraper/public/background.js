chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "restorePopup") {

   
    chrome.storage.local.set({ isMinimized: false });

   
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, {
          action: "removeFloatIcon"
        }).catch(() => {});
      });
    });

    
    setTimeout(() => {
      chrome.action.openPopup().catch((err) => {
        console.log("Popup open failed:", err);
      });
    }, 30);

    return true;
  }
});