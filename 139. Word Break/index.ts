function wordBreak(s: string, wordDict: string[]): boolean {
    let dp: boolean[] = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(i, j))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};
