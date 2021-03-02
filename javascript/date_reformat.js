let reformatDate = (date) => {
  return new Date(
    date.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '')
  )
    .toISOString()
    .slice(0, 10)
}

console.log(reformatDate('20th Oct 2052')) //"2052-10-20"
