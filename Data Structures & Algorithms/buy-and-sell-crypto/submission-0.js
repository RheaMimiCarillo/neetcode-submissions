class Solution {
    /**
     * @param {number[]} prices list of prices per day
     * @return {number} maxProfit the max profit possible
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxProfit = 0;

        // loop through with sliding window
        while (r < prices.length){

            if (prices[l] < prices[r]){

                let currentProfit = prices[r] - prices[l];
                if (currentProfit > maxProfit){
                    maxProfit = currentProfit;

                }
            } else{ //
                l = r;
            } 
            r++;
        }

        return maxProfit;
    }
}