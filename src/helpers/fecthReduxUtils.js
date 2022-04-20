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