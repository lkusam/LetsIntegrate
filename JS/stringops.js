'use strict'
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});

document.getElementById('userinput').addEventListener("keyup", function () {
    let inputtext;
    inputtext = document.getElementById('userinput').value;
    if (inputtext) {
        document.getElementById('lengthres').innerHTML = inputtext.length;
        document.getElementById('encoderes').innerHTML = encodeURIComponent(inputtext);
        document.getElementById('decoderes').innerHTML = decodeURIComponent(inputtext);
        setRegex(inputtext);
    } else
        document.getElementById('lengthres').innerHTML = 'Please enter the text';
});
/**
 * Gets the given regex matching string
 * @param {string} inputval Given input string from the user
 */
function setRegex(inputval) {
    let givenRegex = document.getElementById('regex_given').value;
    if (givenRegex) {
        //let regex = new RegExp(givenRegex);
        let executeStr = inputval.match(givenRegex);
        document.getElementById('regex_result').innerHTML = `${executeStr}`;
    }

}