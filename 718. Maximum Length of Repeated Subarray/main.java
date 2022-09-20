class Solution {
    public int findLength(int[] numA, int[] numB) {
        int[] numC = new int[numB.length + 1];
        int max = 0;
        
        for (int i = numA.length - 1; i >= 0; i--) {
            for (int j = 0; j < numB.length; j++) {
                numC[j] = numA[i] == numB[j] ? numC[j + 1] + 1 : 0;
                max = Math.max(max, numC[j]);
            }
        } 
        return max;
    }
}

// Runtime: 68 ms, faster than 73.19% of Java online submissions for Maximum Length of Repeated Subarray.
// Memory Usage: 44.7 MB, less than 94.34% of Java online submissions for Maximum Length of Repeated Subarray
