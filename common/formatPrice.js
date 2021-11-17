function formatPrice(n){
  let num = Number(n || 0)
  if(num < 0){
    return `-¥${parseFloat(Math.abs(num).toFixed(2))}`
  }else{
    return `¥${parseFloat(num.toFixed(2))}`
  }
}