/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.38%)
 * Likes:    921
 * Dislikes: 0
 * Total Accepted:    211.3K
 * Total Submissions: 576.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 2) {
    return strs.length ? strs[0] : ''
  }

  // 比对前后的值如果不一致则返回一致的前缀并和下一个进行比对

  // 语法：arr.reduce((prev, next) => { return prev + next }

  // prev：数组前一项的值
  // next：数组后一项的值
  // return：return 出来的值，会被当成下一次的 prev
  return strs.reduce((prev, next) => {
    let i = 0
    while (prev[i] && next[i] && prev[i] === next[i]) {
      i++
    }
    return prev.slice(0, i)
  })
};
// @lc code=end

