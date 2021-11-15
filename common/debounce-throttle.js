// 防抖：最后一次调用函数但是处理函数延迟n秒后执行
// 适用场景：输入联想、resize
function debounce(func, wait){
  let timer = null
  return function(){
    let _this = this
    let _args = arguments
    if(timer){
      clearTimeout(timer)
      return
    }
    timer = setTimeout(()=>{
      func.apply(_this, _args)
      timer = null
    },wait)
  }
}

// 节流：频繁调用函数但是处理函数以固定的频率执行
// 按钮狂点（为什么不是防抖，因为按钮需要立马响应）scroll（连续滚动保持响应）
function throttle(func, wait){
  let timer = null
  let lastTime = 0
  return function(){
    let nowTime = +new Date()
    let remainTime = wait - (nowTime - lastTime)
    let _this = this
    let _args = arguments
    if(remainTime<=0){
      lastTime = nowTime
      func.apply(_this, _args)
    }else{
      clearTimeout(timer)
      timer = setTimeout(()=>{
        func.apply(_this,_args)
        lastTime = nowTime
        timer = null
      },remainTime)
    }
  }
}