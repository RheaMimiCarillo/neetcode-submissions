class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(theIntegerArray, theTargetSum) {

        /* prompt interpretation
         *  gives an array of integers i.e. [2,4,6,1,7,12,66]
         *  and given a target sum, i.e., 10
         *  find the exact two indices whose values add up to the targetSum
         *  Assume that exactly one pair exists in the integerArray, i.e., no duplicate integers
         *  
         *  // strategy:
         *      want to be faster than O(n^2), so no nested loops
         *      1. make a hashmap where [theIneger, theIndex]
         *      2. do a for...of loop of the array thru theintegerArray
         *      3. on each iteration, save to a var -> theTargetSum minus i, i.e., the difference between the target and i will be the j that we hope to find in the array
         *      4. check if the hashmap has() the key of the difference
         *      5. if so, .get(key) to get the index of the target j. NOTE: j must NOT be the same index as i
         *      6. if at the end of the loop, there is no j, then the input array didn't have a match
         * 
         * // edge cases and reminders
         *      - return the lower index first in the tuple, i.e., [0, 19] 
         *      - we assume that an answer exists within the input array
         *      - i and j must NOT be the same index
         */

        const integerMap = new Map();

        for (let i = 0; i < theIntegerArray.length; i++){
            // if I already in the array then what to do with dupe?
            integerMap.set(theIntegerArray[i], i);// [theValue, theIndex]
        }

        for (let i = 0; i < theIntegerArray.length; i++){
            const targetDifference = theTargetSum - theIntegerArray[i];
            if (integerMap.has(targetDifference) && integerMap.get(targetDifference) !== i){
                return [i, integerMap.get(targetDifference)];
            }
        }
    }
}
