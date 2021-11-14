// 实现千位分隔符 1234567890 => 1,234,567,890，仅考虑整数
// 多种方法，主要思路：
// 1. 转字符串：从末尾开始递归或者循环每一位处理计数，每三位添加一个逗号
// 2. 数值处理：取余，对1000取余，这个时候需要注意余数不满3位补零，由于number类型没法遍历，使用递归
// 3. 正则表达式：
// 4. toLocaleString()
// 至于具体实现，可能会有各种写法。考虑小数的情况更复杂一些，前1种和第3种方法都需要调整，第2种方法涉及到浮点数运算可能会出现误差

// 1
function toThousands1(num){
  let s = (num||0).toString()
  let r = ''
  let count = 0
  for(let i=s.length-1;i>=0;i--){
    count++
    r = s[i]+ r
    if(count % 3===0 && i!==0){
      r = ','+ r
    }
  }
  return r
}

// 2
function toThousands2(num){
  let r = ''
  function calc(num){
    if(num<1000){
      r = num + r
      return
    }
    let rem = num % 1000
    let s = ''
    if(rem<10){
      s = '00' + rem
    }else if(rem<100){
      s = '0' + rem
    }else{
      s = ''+ rem
    }
    r = ',' + s + r
    calc(Math.floor(num/1000))
  }
  calc(num)
  return r
}

// 3
function toThousands3(num){
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 4
function toThousands(num){
  return num.toLocaleString()
}

console.log(toThousands(1234567890))
console.log(toThousands(100000))
console.log(toThousands(100000.001))