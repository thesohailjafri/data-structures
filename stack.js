// ? STACKS

// ! methods => push, pop, peek, count, start and end

// * Create a stack class

class StackClass {
  constructor() {
    this.count = 0
    this.storage = {}

    this.push = function (value) {
      //set element in storage with key of count
      this.storage[this.count] = value
      //increae the count by 1
      this.count++
    }

    this.pop = function () {
      //if count is 0 meana no element is present in stack
      if (this.count === 0) {
        return undefined
      }
      //stack always point 1 index ahead so remove 1 to access last stack element
      this.count--
      //store that last element
      const result = this.storage[this.count]
      //delete that element
      delete this.storage[this.count]
      //return that element
      return result
    }

    this.peek = function (index) {
      return this.storage[index]
    }

    this.start = function () {
      if (this.count === 0) {
        return undefined
      }
      return this.storage[0]
    }

    this.end = function () {
      let index = this.count - 1
      return this.storage[index]
    }
  }
}

let myStack = new StackClass()

myStack.push(1)
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50)

console.log('Total elements', myStack.count)
console.log('Element at 0 index', myStack.peek(0))
console.log('Element at 1 index', myStack.peek(2))
console.log('Element at the start of stack', myStack.start())
console.log('Element at the end of stack', myStack.end())
console.log('Pushing element 100 onto the stack')
myStack.push(100)
console.log('New element at the end of stack', myStack.end())

/* 
OUTPUT

Total elements 6
Element at 0 index 1
Element at 1 index 20
Element at the start of stack 1
Element at the end of stack 50
Pushing element 100 onto the stack
New element at the end of stack 100
*/
