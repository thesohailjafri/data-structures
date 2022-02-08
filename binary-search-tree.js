// ? Binary Search Tree

/* 
 methods => add, findMin, findMax, find, isPresent, remove, isBalanced,
  findMinHeight, findMaxHeight, inOrder, preOrder, postOrder, levelOrder
*/
class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }
  add(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }
  findMin() {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.data
  }
  findMax() {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.data
  }
}

let myBst = new BST()
myBst.add(10)
myBst.add(5)
myBst.add(20)
myBst.add(15)
console.log(myBst.findMin())
console.log(myBst.findMax())
