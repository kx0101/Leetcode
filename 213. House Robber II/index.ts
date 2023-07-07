function rob(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)));
};

function helper(nums: number[]): number {
    let rob1 = 0;
    let rob2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let current = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = current;
    }

    return rob2;
}
