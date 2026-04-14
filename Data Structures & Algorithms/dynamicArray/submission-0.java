class DynamicArray {

    /** Points to the first element in the internal array. */
    // private int myHead; // NOTE: This problem doesn't ask to optimize by minimizing the need for resizing, so my solution in more robust, but may fail the automated tests...
    
    private int mySize; // NOTE: array size is conventionally called "length".
    // tail is the head + size - 1
    
    // removing elements from the middle means shifting all elements over by one
    private int[] myInternalArray;

    /** Instantiates a dynamic array instance with the specified size.
     *  Sets the head and size.
     */
    public DynamicArray(final int theCapacity) {
        // TODO: edge case -> theCapacity less than 1
         if (theCapacity < 1) throw new IllegalArgumentException("Initial capacity must be 1 or greater");
        
        // Array in Java does not use the `Array` keyword to instantiate.
        myInternalArray = new int[theCapacity]; 
        
        // No element yet.
        mySize = 0;
        
        // Head index is placed at one-third of the inital capacity to leave room for inserting at the head without resizing.
        // TODO: check if the division produces unexpected values in Java.
        //myHead = theCapacity / 3;
    }

    /** Returns the element at the specified index. */
    public int get(final int theIndex) {
        // Check if the index is within bounds.
        // final int actualIndex = myHead + theIndex; // Calculates the actual index based on the user's input.
        
        // if (theIndex < 0 || theIndex >= mySize || actualIndex < 0 || actualIndex >= mySize) return new ArrayOutOfBoundsException("Out of bounds.");

        // return myInternalArray[actualIndex];
        return myInternalArray[theIndex];
    }

    /** Changes the values at specified index. */
    public void set(final int theIndex, final int theValue) {
        // TODO: check if the specified index is within bounds.
        // Edge case: do we let them set values at indices way out of range? 
    
        // final int actualIndex = myHead + theIndex;
        // myInternalArray[actualIndex] = theValue;

        myInternalArray[theIndex] = theValue;
    }

    /** Appends to end of array. */    
    public void pushback(final int theValue) {
        // TODO: full array -> resize() first
        //final int targetIndex = theHead + mySize; // Current head index + the number of elems already  in + 1 at the end
    
        // if the current capacity is 1 and size is zero, no problem
        // if (mySize < myInternalArray.length) myInternalArray[mySize] = theValue;

        // if the current capacity is 1 and size is one. then targeting myInternalArray[1] would be out of bounds. double it
        if (mySize >= myInternalArray.length) resize();

        myInternalArray[mySize] = theValue;
        //final boolean canFitOneMore = (mySize + 1 < myInternalArray.length) ? true : false;

        // if (!canFitOneMore) resize();
        // else myInternalArray[mySize] = theValue;

        mySize++;
    }

    /** Removes and returns the last element. */
    public int popback() {

        if (mySize > 0){
            mySize--; // Decrement size field.
        }

        final int poppedValue = myInternalArray[mySize]; // Size already decremented, so [mySize] is corrent (vs. mySize - 1, which would give the penultimate index).

        // Zero out old elem.
        //myInternalArray[mySize + 1] = 0;
        
        return poppedValue; 

    }

    /** Doubles the size of the internal array */
    private void resize() {

        // 1. calculate new size (double)
        final int doubledSize = myInternalArray.length * 2;

        // 2. Make new array instance that is double the size of the old one.
        int[] temp = new int[doubledSize];

        // 3. Insert the elements into the temp array.
        for (int i = 0; i < myInternalArray.length; i++){
            temp[i] = myInternalArray[i];
        }

        // 4. Update internal reference to the temp array to make it permanent.
        myInternalArray = temp;
    }

    /** Returns the quantity of initialized elements in the internal array. */ 
    public int getSize() {
        return mySize;
    }

    /** Returns the current max capacity of the array */
    public int getCapacity() {
        return myInternalArray.length;
        // todo: make sure resize() actually doubles the internal array
    }
}
