// ? QUEUE

/* 
 methods => print, enquque, dequeue, peek, isEmpty, size, bottom
*/

// * Create a QUEUE class

class QueueClass {
  constructor() {
    this.collection = []

    this.print = function () {
      console.log(this.collection)
    }

    this.enqueue = function (element) {
      this.collection.push(element)
    }

    this.dequeue = function () {
      return this.collection.shift()
    }

    this.peek = function () {
      return this.collection[0]
    }

    this.isEmpty = function () {
      return this.collection.length === 0
    }

    this.size = function () {
      return this.collection.length
    }

    this.bottom = function () {
      return this.collection[this.collection.length - 1]
    }
  }
}

const myQueue = new QueueClass()
myQueue.print()
myQueue.enqueue('A')
myQueue.enqueue('B')
myQueue.enqueue('C')
myQueue.enqueue('D')
myQueue.print()
console.log(myQueue.dequeue())
myQueue.print()
console.log(myQueue.peek())
console.log(myQueue.isEmpty())
console.log(myQueue.size())
console.log(myQueue.bottom())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.isEmpty())

/* 
OUTPUT

[]
[ 'A', 'B', 'C', 'D' ]
A
[ 'B', 'C', 'D' ]
B
false
3
D
B
C
D
true
*/
