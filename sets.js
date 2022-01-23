// ? SETS

/* 
 methods => has, values, add, remove, size, union,
 intersection, difference and subset
*/

// * Create a set class

class SetClass {
  constructor() {
    //collection will hold the elements of sets
    this.collection = []
    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
      return this.collection.indexOf(element) !== -1
    }
    // this method will return all the values in the set
    this.values = function () {
      return this.collection
    }
    // this method will add an element to the set
    this.add = function (element) {
      if (this.has(element)) {
        return undefined
      }
      this.collection.push(element)
    }
    // this method will remove an element from a set
    this.remove = function (element) {
      if (this.has(element)) {
        let index = this.collection.indexOf(element)
        this.collection.splice(index, 1)
      }
    }
    // this method will return the size of the collection
    this.size = function () {
      return this.collection.length
    }
    // this method will return the union of two sets
    this.union = function (otherSet) {
      let unionSet = new SetClass()
      let setOne = this.values()
      let setTwo = otherSet.values()
      setOne.forEach((ele) => unionSet.add(ele))
      setTwo.forEach((ele) => unionSet.add(ele))
      return unionSet.values()
    }
    // this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
      let intersectionSet = new SetClass()
      let setOne = this.values()
      setOne.forEach((e1) => {
        if (otherSet.has(e1)) {
          intersectionSet.add(e1)
        }
      })
      return intersectionSet.values()
    }
    // this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
      let differenceSet = new SetClass()
      let setOne = this.values()
      setOne.forEach((e1) => {
        if (!otherSet.has(e1)) {
          differenceSet.add(e1)
        }
      })
      return differenceSet.values()
    }
    // this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
      let setOne = this.values()
      return setOne.every((e1) => {
        return otherSet.has(e1)
      })
    }
  }
}

const mySet = new SetClass()
const otherSet = new SetClass()
mySet.add(10)
mySet.add(0)
mySet.add(1)
otherSet.add(10)
otherSet.add(0)
otherSet.add(100)
console.log('My-set values', mySet.values())
console.log('Other-set values', otherSet.values())

console.log('Union', mySet.union(otherSet))
console.log('Intersection', mySet.intersection(otherSet))
console.log('Difference', mySet.difference(otherSet))
console.log('Subset', mySet.subset(otherSet))
otherSet.remove(0)
otherSet.remove(100)
console.log(
  'Subset after removing 0, 100 from other-set',
  mySet.subset(otherSet),
)

/* 
OUTPUT

My-set values [ 10, 0, 1 ]
Other-set values [ 10, 0, 100 ]
Union [ 10, 0, 1, 100 ]
Intersection [ 10, 0 ]
Difference [ 1 ]
Subset false
Subset after removing 0, 100 from other-set false
*/
