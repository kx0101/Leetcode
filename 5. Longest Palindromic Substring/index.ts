function longestPalindrome(s: string): string {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let j = i + 1;

        while (j <= s.length) {
            const subStr = s.substring(i, j);

            if (subStr.length > result.length && isPalindrome(subStr)) {
                result = subStr;
            }

            j++;
        }
    }

    return result;
};

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}
