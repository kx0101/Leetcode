/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const res = [];

    const efuges = (left, right, s) => {
        if (left > right) return;

        if (left === 0 && right === 0) {
          res.push(s);
          return;
        }

        if (left > 0) efuges(left - 1, right, s + '(');
        if (right > 0) efuges(left, right - 1, s + ')');
    };

    efuges(n, n, '');
    return res;
};
