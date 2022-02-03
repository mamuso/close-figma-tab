chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.closeFigmaTab) chrome.tabs.remove(sender.tab.id);
});
