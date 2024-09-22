chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'get-click-count') {
        chrome.storage.local.get('clickCount', result => {
            let clickCount = (result.clickCount || 0) + 1;

            sendResponse(clickCount);
            
            chrome.storage.local.set({ clickCount });
        });

        //Required to return true to keep the message channel open for async response
        return true;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed successfully!');
});
