var findLength = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const dp = new Array(n + 1).fill(0);
  let max = 0;
  
  for (let i = 1; i <= m; i++) {
    const prev = dp.slice();
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = 1 + prev[j - 1];
        max = Math.max(max, dp[j]);
      } else dp[j] = 0; 
        
    }
  }
  
  return max;
};
