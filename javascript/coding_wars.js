// There are N coders standing in a line, where i denotes the ith position of a coder with Rating of Ri. All ratings are distinct. You have to form a team of 3 from amongst them with condition :
// "Any three coders with positions (i, j, k) and ratings (Ri, Rj, Rk) can form a team when ( "Ri<Rj<Rk" or "Ri>Rj>Rk" ) and ( 1 <= i < j < k <= N ) "
// You have to find out how many such teams exists ( 1 coder can be part of multiple teams ).
// Input :
// N = 5
// Ratings = [ 5, 2, 3, 1, 4 ]
// Output :
// 3
// Hint : [ 5, 2, 1 ] [ 5, 3, 1 ] [ 2, 3, 4 ]

function codingWars(N, ratings) {
  let count = 0
  let myarr = []
  let i = 0,
    j = i + 1,
    k = i + 2
  for (let i = 0; i < ratings.length; i++) {
    for (let j = i + 1; j < ratings.length; j++) {
      for (let k = i + 2; k < ratings.length; k++) {
        if (
          (ratings[i] < ratings[j] && ratings[j] < ratings[k]) ||
          (ratings[i] > ratings[j] && ratings[j] > ratings[k])
        ) {
          count++
          myarr.push([ratings[i], ratings[j], ratings[k]])
        }
      }
    }
  }
  console.log(count)
  console.log(myarr)
}

console.log(codingWars(5, [5, 2, 3, 1, 4])) //3
