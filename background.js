chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Check if the tab has finished loading
  if (changeInfo.status === 'complete') {
    // Get the URL of the tab
    var tabUrl = tab.url;
    
    // Check if the URL is from your website
    if (tabUrl && tabUrl.startsWith('https://') && tabUrl.includes('.tallycloud.in/')) {
      // Execute a script in the context of the active tab
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => window.localStorage.getItem('username')
      })
      .then(result => {
        // Log the local storage data to the console
        console.log(result[0]);
          
        // Save the local storage data to chrome storage
        chrome.storage.sync.set({ 'mykey': result[0] }, function() {
          console.log('Saved to chrome storage:', result[0]);
        });
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
});

