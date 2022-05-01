export const dateRandom = (fecha:string) => {
  const date = (Math.random()).toString();
  const day = Number(date.slice(2, 3))
  const year = Number(date.slice(6, 8))
  const arrStr = fecha.split('-');
	const newArr = [];
	newArr.push(Number(arrStr[0]) + day)
  newArr.push(Number(arrStr[1]))
  newArr.push(Number(arrStr[2]) + year)
  return newArr.join('-')
}

//PULIR LAS FECHAS Y FORMAT '04'
//FALTA SOLO DOCUMENTAR API
//SUBIR A HEROKU