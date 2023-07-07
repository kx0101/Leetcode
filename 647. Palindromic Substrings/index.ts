function countSubstrings(s: string): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count += countPalindromes(s, i, i);
        count += countPalindromes(s, i, i + 1);
    }

    return count;
};

function countPalindromes(s: string, left: number, right: number): number {
    let count = 0;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;

        left--;
        right++;
    }

    return count;
}
