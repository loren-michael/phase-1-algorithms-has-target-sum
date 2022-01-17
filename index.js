// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true
//     }
//   } return false
// }

/* 

n steps from the first loop
n*n steps from the second inner loop
Runtime complexity: O(n^2)
    For each number added, the runtime rises exponentially because each number has to be looped through twice, as i and as j for each i.
    This is not optimal, so we should go back and try to make this less complex.
Space complexity: O(n)
    Adding to the array will only expand linearly, and we do not have any other inner memory needs.
*/

/* 
Make a function called hasTargetSum that checks if two numbers in the array add up to the target sum. For each number, check if there's another number that adds to the target.

hasTargetSum([22, 19, 4, 6, 30], 25)

iterate through each number of the array
find the complement
then search the array for the complement.
if the complement exists, return true
if there are no complements for any number that returnt he target, return false
*/


/*
New approach:

create an object to keep track of the numbers we have already seen so that we don't have to iterate through them multiple times

we still need to iterate through the array once to create the object

we still need to figure out the complements

check if any key on our object is the complement
  if so, return true
  otherwise add that number to the object

hasTargetSum([1,2,3,4], 6) {
  seenNumbers = {
      1: true,
      2: true,
      3: true
    }

}



*/



function hasTargetSum (array, target) {
  const seenNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true
  }
  return false
}























/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
