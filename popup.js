chrome.runtime.onStartup.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("welcome.html") });
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("welcome.html") });
  });