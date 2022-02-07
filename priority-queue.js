// ? Priority Queue

/* 
 methods => print, enquque, dequeue, isEmpty, size, back, front, 
*/

class PriorityQueue {
  constructor() {
    this.collection = []

    this.print = () => {
      console.log(this.collection)
    }

    this.isEmpty = function () {
      return collection.length === 0
    }

    this.enquque = (element) => {
      /* check for priority of the element */
      if (this.collection.isEmpty) {
        this.collection.push(element)
      } else {
        let added = false
        for (let i = 0; i < this.collection.length; i++) {
          if (element[1] < this.collection[i][1]) {
            this.collection.splice(i, 0, element)
            added = true
            break
          }
        }
        if (!added) {
          this.collection.push(element)
        }
      }
    }

    this.dequque = () => {
      return this.collection.shift()[0]
    }

    this.front = () => {
      if (this.collection.isEmpty) {
        return undefined
      } else {
        return this.collection[0][0]
      }
    }

    this.back = () => {
      if (this.collection.isEmpty) {
        return undefined
      } else {
        return this.collection[this.collection.length - 1][0]
      }
    }

    this.size = () => {
      return this.collection.length
    }
  }
}

const myPriorityQueue = new PriorityQueue()
myPriorityQueue.enquque(['Sohail', 1])
myPriorityQueue.enquque(['Rahul', 3])
myPriorityQueue.enquque(['Raj', 2])
myPriorityQueue.print()
console.log(myPriorityQueue.dequque())
myPriorityQueue.print()
myPriorityQueue.enquque(['Sohail', 3])
console.log(myPriorityQueue.front())
console.log(myPriorityQueue.back())
console.log(myPriorityQueue.size())
myPriorityQueue.print()

/* 
OUTPUT

[ [ 'Sohail', 1 ], [ 'Raj', 2 ], [ 'Rahul', 3 ] ]
Sohail
[ [ 'Raj', 2 ], [ 'Rahul', 3 ] ]
Raj
Sohail
3
[ [ 'Raj', 2 ], [ 'Rahul', 3 ], [ 'Sohail', 3 ] ]
*/
