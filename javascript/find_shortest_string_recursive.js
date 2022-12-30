function findShortestStringRecursive(arr) {
  if (arr.length === 1){
    return arr[0]
  }
  if (arr[0].length < arr[1].length){
    return arr[0]
  } else {
    return arr[1]
  }
  findShortestStringRecursive([arr[1]].concat(findShortestStringRecursive(arr.slice(0))))

  // iterate way
  // return arr.reduce((shortest,string)=>
  // string.length < shortest.length ? string : shortest
  // )
  // type your code here
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
