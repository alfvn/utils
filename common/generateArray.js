// 生成一个连续数值的函数
// 关键点：利用new Array(length)生成指定长度的数组，用array.keys获取到下标组成的数组，再截取制定部分
// 总结：其实连续数值相关的题都可以根据下标来考虑

function generateArray(start, end){
  return Array.from(new Array(end+1).keys()).slice(start)
}

console.log(generateArray(5,19))