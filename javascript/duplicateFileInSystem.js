var findDuplicate = function (paths) {
  let map = new Map()

  for (let i = 0; i < paths.length; i++) {
    let filesplit = paths[i].split(' ')
    let root = filesplit[0]

    for (let j = 1; j < filesplit.length; j++) {
      let file = filesplit[j]
      // check if second part of filename since know the extenstion will always be txt,
      // we can just check the content
      let content = file.split('.')[1]
      console.log(content)
      if (!map.has(content)) {
        map.set(content, [])
      }

      map.get(content).push(root + '/' + file.split('(')[0])
    }
  }

  console.log(map)
  console.log([...map.values()].filter((item) => item.length > 1))
}

findDuplicate([
  'root/a 1.txt(abcd) 2.txt(efgh)',
  'root/c 3.txt(abcd)',
  'root/c/d 4.txt(efgh)',
  'root 4.txt(efgh)',
])

// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
