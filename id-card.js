export function checkIDCard(idcode){
  let weightFactor = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]
  let checkCode = ['1','0','X','9','8,','7','6','5','4','3','2']
  let code = String(idcode)
  let last = code[17]
  let seventeen = code.substring(0,17)
  const arr = seventeen.split('')
  let num = 0
  for(let i=0;i<arr.length;i++){
    num += Number(arr[i])*weightFactor[i]
  }
  let remainder = num % 11
  let lastNo = checkCode[remainder]
  let idcardPatter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0-2][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
  let format = idcardPatter.test(idcode) //? number string
  return last === lastNo && format
}

export function getSexFromIdCard(idcode){
  let r = ''
  if(idcode.length===15){
    r = parseInt(idcode.substring(14,1),10) % 2 ? '男' : '女'
  }
  if(idcode.length===18){
    r = parseInt(idcode.substring(17,1),10) % 2 ? '男' : '女'
  }
  return r
}

export function getBirthdayFromIdCard(idNo, split = '-') {
  idNo = idNo.replace(/\s*/g, '')
  let tmpStr = ''
  if (idNo.length === 15) {
    tmpStr = idNo.substring(6, 12)
    tmpStr = '19' + tmpStr
    tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6)
  } else if (idNo.length === 18) {
    tmpStr = idNo.substring(6, 14)
    tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6)
  }
  return tmpStr
}