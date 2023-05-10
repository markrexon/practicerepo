var _ = require('lodash');

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
// console.log(_.dropRightWhile(users, (user)=> { return !user.active; }));
// console.log(_.findLastIndex(users,(user)=>user.user=="pebbles"))
var array = [1, 2, 3,1,3,2];
// console.log(_.fill(array,8,0,2))

const obj=[ 
    [2, 1], [3, 2,10],
    ['c',3]];
  // console.log(_.fromPairs(obj))

  // console.log(_.indexOf(array,2))

  // console.log(_.join(array,''))
  // console.log(_.last(array))
 _.pullAll(array,1,2);
 console.log(array)
  // for(const i in array)
  //   console.log(_.nth(array, i))
 