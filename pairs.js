/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 * THIS REMOVES AND RETURNS A RANDOM ELEMENT IN THE ARRAY!!!!
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let new_arr = [];
  //if received empty array OR no argument:
  //NOTE names = [] is wrong cuz assigning it an empty array, and !names MEANS NULL!!!!!!!
  if (names == null){
    return [];

  } else if (names.length === 0){
    return [];
  }else 
  if(names.length === 2){
    r1 = names.pop();
    r2 = names.pop();
    new_arr.push([r1,r2]);
    return new_arr;
    //return pairs if passed multiple names
    // array.length > 2 OR while array.length > 1-> add pairs
    //if it breaks then add that one pair in a separate place
  }
  while(names.length > 1){
    r1 = names.getRandom();
    r2 = names.getRandom();
    new_arr.push([r1,r2]);
  }
  if(names.length === 1){
    r3 = names.getRandom();
    new_arr.push([r3]);

  }
  return new_arr;

}

let myname = [];
console.log(pairs(myname));

module.exports = pairs;

console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
