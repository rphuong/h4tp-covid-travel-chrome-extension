const setAlert = () => {
    var searchbar = document.getElementsByClassName('_1cot5uz')[0];
    if (!searchbar) {
        searchbar = document.getElementsByClassName('_1xq16jy')[0];
    }
    searchbar.addEventListener('click', function() {
        setTimeout(function() {
            var input = document.getElementsByClassName('_1xq16jy')[0];
            var button = document.getElementsByClassName("_o5yydw")[0];
            button.onclick = function() {
                    const state = parseForState(input.value);
                    alert(state);
                }
        }, 10)
    });
};

const parseForState = (location) => {
    var locs = location.trim().split(', ');
    var lastIdx = locs.length - 1;
    if (locs[lastIdx] === 'United States') {
        return locs[lastIdx - 1];
    }
    return locs[lastIdx];
}

setAlert();
chrome.runtime.onMessage.addListener(setAlert);