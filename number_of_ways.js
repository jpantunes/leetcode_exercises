// https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
// Runtime: 60 ms, faster than 83.58% of JavaScript online submissions for Number of Ways to Paint N × 3 Grid.
// Memory Usage: 35.5 MB, less than 91.30% of JavaScript online submissions for Number of Ways to Paint N × 3 Grid.

var numOfWays = function(n) {
    let temp = 3;
    let res = 3;

    for (let i = 0; i < n; i++) {
        let prevRes = res;
        res = (2 * res + 2 * temp) % 1000000007;
        temp = (2 * prevRes + 3 * temp) % 1000000007;
    }
    return res;
}



// var numOfWays = n => {
//     let twoColours = 6;
//     let threeColours = 6;
//     const mod = (10**9 +7);

//     for (let i = 1; i < n; i++) {
//         let prevTwo = twoColours;
//         let prevThree = threeColours;
//         twoColours = (2 * prevThree + 3 * prevTwo) % mod;
//         threeColours = (2 * prevThree + 2 * prevTwo) % mod;
//     }
//     return (twoColours + threeColours) % mod;
// }
//64ms, better than 70.43%