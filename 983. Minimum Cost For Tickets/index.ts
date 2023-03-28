/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days: number[], costs: number[]): number {

    const dp = new Array<number>(366).fill(0);
    let dayIndex = 0;

    for (let day = 1; day <= 365; day++) {

        if (day === days[dayIndex]) {
            let oneDayCost = dp[day - 1] + costs[0];
            let oneWeekCost = dp[Math.max(0, day - 7)] + costs[1];
            let oneMonthCost = dp[Math.max(0, day - 30)] + costs[2];
            dp[day] = Math.min(oneDayCost, oneWeekCost, oneMonthCost);
            dayIndex++;

        } else {
            dp[day] = dp[day - 1];
        }
    }

    return dp[days[days.length - 1]];
};
