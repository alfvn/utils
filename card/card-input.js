// 每4位增加1个中横线 taro
export function handleChange(inputVal){
  inputVal = inputVal.trim().slice(0, 19);

  // 新增输入需要处理 删除输入不需要
  if(inputVal.length > this.state.value.length){
    inputVal = inputVal.replace(/-/g,'').replace(/(.{4})/g,"$1-").slice(0, 19);
  }
  
  //处理h5环境下输入框的值
  if(process.env.TARO_ENV==='h5'){
    let inputEl = document.querySelector('input[name="value"]')  
    if(inputEl){
      inputEl.value = inputVal 
      setTimeout(()=>inputEl.setSelectionRange && inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length) ) //处理光标位置
    } 
  }

  this.setState({
    value: inputVal
  });

  if (!inputVal) {
    this.setState({
      btnClass: 'disabled',
    });
  }

  return inputVal;
}