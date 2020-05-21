// https://leetcode.com/problems/trapping-rain-water/
// Runtime: 56 ms, faster than 91.49% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Trapping Rain Water.

function solution(A) {
    if (A.length < 2) return 0;

    const sumIntermediateCols = (arr, h, g, start, end) => {
        let sum = 0;
        for (let i = start + 1; i < end; i++) sum += arr[i];
        return h * g - sum;
    }
    const findNextCol = (arr, colIdx, colVal) => {
      let max = 0;
      for (let i = colIdx + 1; i < arr.length; i++) {
        if (arr[i] >= colVal) {
          return i; //return the next column at least as high as A[i]
        } else {
          max = Math.max(max, arr[i]); //track the highest remaining column
        }
      }
      //return index of  max if found, otherwise colIdx as last resort
      return Math.max(arr.indexOf(max, colIdx), colIdx);
    }
    const calculator = (arr) => {
        let raindrops = 0;
        let gap = 0;
        let height = 0;
        let nextCol = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                nextCol = findNextCol(arr, i, arr[i]);
                if (nextCol !== i) {
                    gap = nextCol - i - 1;
                    height = Math.min(arr[i], arr[nextCol]);
                    raindrops += sumIntermediateCols(arr, height, gap, i, nextCol);
                    i = nextCol - 1;
                }
            }
        }
        return raindrops;
    }
    return calculator(A);
}