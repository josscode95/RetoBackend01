export const isValidateDate = (date:string) => {
  if(typeof date !== "string") return false;
  const res = date.split("-");
  const resNumber = [];
  for(let i = 0; i < res.length; i++){
  	resNumber.push(Number(res[i]))
  }
  if(resNumber[0] > 31) return false;
  if(resNumber[1] > 12) return false;
  if(resNumber[2] > 2050) return false;
  return true
}