/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.45%)
 * Likes:    884
 * Dislikes: 0
 * Total Accepted:    230.3K
 * Total Submissions: 404.7K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   let arr = String(x).split('')
//   for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] !== arr[arr.length - (i + 1)]) {
//       return false
//     }
//   }
//   return true
// };

var isPalindrome = function(x) {
  // 如果数字的最后一位是 0，为了使该数字为回文， 则其第一位数字也应该是 0 只有 0 满足这一属性
  if (x < 0 || (x % 10 == 0 && x != 0) ) {
    return false
  }

  let reveredNum = 0
  while (x > reveredNum) {
    reveredNum = reveredNum * 10 + x % 10
    x = Math.floor(x / 10)
  }

  if (reveredNum === x || x === Math.floor(reveredNum / 10)) {
    return true
  } else {
    return false
  }
};
// @lc code=end

