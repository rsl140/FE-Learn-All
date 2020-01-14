/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.78%)
 * Likes:    1221
 * Dislikes: 0
 * Total Accepted:    162.1K
 * Total Submissions: 494.6K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 转为数组
  let numberToArray = String(Math.abs(x)).split('');

  // 从数组末尾取值并更新数组长度
  let result = '';
  for (let i = 0; i < numberToArray.length;) {
    result += numberToArray.pop()
  }

  // 判断是正负
  result = x > 0 ? Number(result) : - Number(result);

  // 长度是否溢出
  if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31)) {
    result = 0
  }

  return result
};

