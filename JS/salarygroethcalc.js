'use strict'

  document.addEventListener('DOMContentLoaded', function () {
      // var elems = document.querySelectorAll('.parallax');
      // var instances = M.Parallax.init(elems);
      M.AutoInit();
  });

document.getElementById('getdetails').addEventListener("click", function () {
    getSalaryEstimate();
});

function getSalaryEstimate() {
    let salary = parseInt(document.getElementById('salary').value);
    let numnYears = parseInt(document.getElementById('num_years').value);
    getLowerRate(numnYears, salary);
    getHigherRate(numnYears, salary);
}

/**
 * Gets the list of lower rate salaray growth for number of years
 * @param {number} numnYears Number of years needs to calculated
 * @param {number} slry Your current salary
 */
function getLowerRate(numnYears, slry) {
    let lastyearAmount = 0;
    let lowerPercent = parseInt(document.getElementById('low_rate').value);
    let loweratelist = document.getElementById('lower_rate_list');
    // Emptying the list before we are adding the li
    loweratelist.innerHTML = "";
    if (numnYears && lowerPercent) {
        for (let index = 1; index <= numnYears; index++) {
            let tocalcSalary = (lastyearAmount > 0) ? lastyearAmount : slry;
            let calcSalary = tocalcSalary + (tocalcSalary * (lowerPercent / 100));
            lastyearAmount = parseFloat(calcSalary.toFixed(2));
            loweratelist.innerHTML += `<li>For year ${index} you salary will be:  ${ currencyFormat( lastyearAmount)}</li>`;
        }
    }
}

/**
 * Gets the highest rate salary for the user
 * @param {number} numnYears Number of yaers
 * @param {number} slry current salary entered
 */
function getHigherRate(numnYears, slry) {
    let lastyearAmount = 0;
    let higherpercent = parseInt(document.getElementById('high_rate').value);
    let loweratelist = document.getElementById('higher_rate_list');
    // Emptying the list before we are adding the li
    loweratelist.innerHTML = "";
    if (numnYears && higherpercent) {
        for (let index = 1; index <= numnYears; index++) {
            let tocalcSalary = (lastyearAmount > 0) ? lastyearAmount : slry;
            let calcSalary = tocalcSalary + (tocalcSalary * (higherpercent / 100));
            lastyearAmount = parseFloat(calcSalary.toFixed(2));
            loweratelist.innerHTML += `<li>For year ${index} you salary will be:  ${ currencyFormat( lastyearAmount)}</li>`;
        }
    }
}

/**
 * Gets the currency format for salary based on the locale
 * @param {number} inputVal current input
 */
function currencyFormat(inputVal) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputVal)
}