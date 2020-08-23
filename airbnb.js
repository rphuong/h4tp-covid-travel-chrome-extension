'use strict';

/*
 * Sets up an alert to display covid data
 */
const setAlert = () => {
    // Find search bar
    var searchbar = document.getElementsByClassName('_1cot5uz')[0];
    if (!searchbar) {
        searchbar = document.getElementsByClassName('_1xq16jy')[0];
    }
    // Once the search bar is clicked, set up the alert
    searchbar.onclick = () => {
        setTimeout(() => {
            var input = document.getElementsByClassName('_1xq16jy')[0];
            var button = document.getElementsByClassName("_o5yydw")[0];
            button.onclick = () => {
                    const state = parseForState(input.value);
                    var info = new COVIDInfo(state, (info) => {
                        alert(info.information.state + " " 
                            + info.information.positiveIncrease + " " 
                            + info.information.date
                        )});
                }
        }, 10)
    };
};

/*
 * Parses the given location string in some format "A, ..., Y, Z," and
 * returns what would the state name
 */
const parseForState = (location) => {
    var locs = location.trim().split(', ');
    var lastIdx = locs.length - 1;
    if (locs[lastIdx] === 'United States') {
        return locs[lastIdx - 1];
    }
    return locs[lastIdx];
}

setAlert();
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {if (request.message === "URL Change") {setAlert();}});