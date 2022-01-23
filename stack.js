// ? STACKS

// ! methods => push, pop, peek, count, start and end

// * Create a stack class

class Stack {
  constructor() {
    this.count = 0
    this.storage = {}

    this.push = function (value) {
      this.storage[this.count] = value
      this.count++
    }

    this.pop = function () {
      if (this.count === 0) {
        return undefined
      }
      this.count--
      const result = this.storage[this.count]
      delete this.storage[this.count]
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

let myStack = new Stack()

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
