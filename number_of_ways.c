// https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
// Runtime: 0 ms, faster than 100.00% of C online submissions for Number of Ways to Paint N × 3 Grid.
// Memory Usage: 5.1 MB, less than 64.52% of C online submissions for Number of Ways to Paint N × 3 Grid.

int numOfWays(int n){
    long int temp = 3;
    long int res = 3;

    for (int i = 0; i < n; i++) {
        long int prevRes = res;
        res = (2 * res + 2 * temp) % 1000000007;
        temp = (2 * prevRes + 3 * temp) % 1000000007;
    }
    return res;
}
