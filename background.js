'use strict';

chrome.runtime.onInstalled.addListener(() => {
    /*
     * Make the extension active on airbnb.com only
     */
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'airbnb.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    /*
     * Sends a message to the tab when the URL is changed
     */
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete') {
                setTimeout(() => {
                    chrome.tabs.sendMessage(tabId, { message: "URL Change" } )
                }, 500)
            }
        }
    );
});

