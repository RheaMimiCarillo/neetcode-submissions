class Solution {
    /**
     * @param {string} s the first string 
     * @param {string} t the second string to compare with
     * @return {boolean} true if exact same number and quantity of each char between s and t
     */
    isAnagram(s, t) {
        const sMap = new Map(); // map for s
        const tMap = new Map(); // map for t

        // loop to put chars in both maps
        for (let char of s){
            // if key not already in sMap, make new entry
            if (sMap.has(char)){
                let newValue = sMap.get(char) +1;
                sMap.set(char, newValue);
            }
            else{
                sMap.set(char, 1);
            }
            // else, increment the value by one
        }

        for (let char of t){
            if (tMap.has(char)){
                let newValue = tMap.get(char) +1;
                tMap.set(char, newValue);
            }
            else{
                tMap.set(char, 1);
            }
        }

        // compare the two maps
        if (sMap.size !== tMap.size){
            return false;
        }
        else{
            // for loop for keys and values
            // get each key value pair in sMap
            for (let [key, value] of sMap){
                // if tMap doesn't have the key -> false
                // or sMap.get(key) !== value -> false
                if (!tMap.has(key)) return false;
                if (tMap.get(key) !== value) return false;
            }
        }


        
        // problem, compare if two strings are anagrams of each other
        // same quantity of chars, independent of ordering
        // brute force: sort each and walk thru each and see if each match up
        // alternate solution: put each into hash sets and compare the tables

        // how to compare two hash tables for equality? -> 
        //      1. check for size equality (theMap.size === theOtherMap.size) 
        //      2. compare keys and values in for loop -> for (let [key, value] in theMap){ if (!theOtherMap.has(key) || theOtherMap.get(key) !== value) return false;}
        //                                  if the other map doesn't have the current key, or the current map's value for the key is different from the other map, false
        // how to instantiate a hashtable in JS? -> use Map() 
        // how to put items into Map()? -> theMap.set(key, value);
        // how to retrieve items from Map()? -> theMap.get(key);
        // how to see whether a Map() has the key? -> theMap.hash(key);
        return true; // todo: replace with actual value
    }
}