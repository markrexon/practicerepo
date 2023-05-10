const _ =require("lodash");

var array = [1, 2, 3, 4];
var evens = _.remove(array, (n)=>  n % 2 == 0);
console.log(evens)
console.log(_.reverse(array))
console.log(_.slice(array,0,3))
console.log(_.sortedIndex())

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
   
  const val=_.takeRightWhile(users, function(o) { return !o.active; });
console.log(val)    