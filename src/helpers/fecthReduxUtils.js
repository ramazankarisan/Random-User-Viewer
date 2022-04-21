// according to the target array, select the properties that we want from original array
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

// takes a text and from original array filters it
export function filterByCountry(arr, text) {
  const newUserList = arr.filter(user => user.location.country.toLowerCase().includes(text.toLowerCase()))
  return newUserList
}