/**
 * mini click event for reset
 */
button("reset").onclick = function() {
    reset();
    clear();
}

/**
 * mini click event for hint
 */
/* button("hint").onclick = function() {
    spellWord('btn_' + spellId)
    spellId++;
} */

/**
 * mini click event for quit
 */
button("quit").onclick = function() {
    removeBtn();
    clear();
}

/**
 * mini click event for home
 */
button("home").onclick = function() {
    removeBtn();
    getWords();
    clear();
}

getWords();