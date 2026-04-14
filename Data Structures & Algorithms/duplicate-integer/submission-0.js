class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let myMap = new Map();

        for (let num in nums){
            if (myMap.get(num)==true){
                return true;
            }
            myMap.set(num, num);
        }
        return false;
    }
}
