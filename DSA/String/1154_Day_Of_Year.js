/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {

    let [year, month, day] = date.split("-").map(Number);

    let days = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (
        year % 400 === 0 ||
        (year % 4 === 0 && year % 100 !== 0)
    ) {
        days[1] = 29;
    }

    let ans = day;

    for (let i = 0; i < month - 1; i++) {
        ans += days[i];
    }

    return ans;
};

console.log(dayOfYear("2022-5-18"));