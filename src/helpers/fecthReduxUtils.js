export function selectFromResponse(array, categoriesArr) {

  let newArr = array.map(item => {
    let empObj = {}
    categoriesArr.forEach(category => {
      if (Object.keys(item).includes(category)) {

        empObj = { ...empObj, [category]: item[category] }
      }
    })
    return empObj

  })
  return newArr
}

export function filterByCountry(arr, text) {
  console.log("text", text)
  const newUserList = arr.filter(user => user.location.country.toLowerCase().includes(text.toLowerCase()))
  console.log(newUserList)
  return newUserList
}