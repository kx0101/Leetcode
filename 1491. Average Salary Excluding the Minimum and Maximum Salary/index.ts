function average(salary: number[]): number {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let total = 0;

    for (let i = 0; i < salary.length; i++) {
        if (min > salary[i]) {
            min = salary[i];
        }

        if (max < salary[i]) {
            max = salary[i];
        }

        total += salary[i];
    }

    return (total - min - max) / (salary.length - 2);
};
