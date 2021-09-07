class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    } remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }

        //traverse to find
        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
            //traverse to find
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            //found
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                let min = this.findMinNode(node.right);
                node.data = min.data;
                node.right = this.removeNode(node.right, min.data);
                return node;
            }
        }
    }

    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    //lvr
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    //vlr
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.inorder(node.left);
            this.inorder(node.right);
        }
    }

    //vlr
    postorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            this.inorder(node.right);
            console.log(node.data);
        }
    }
    // search for a node with given data
    search(node, data) {
        // if trees is empty return null
        if (node === null)
            return null;

        // if data is less than node's data
        // move left
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data
        // move left
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data 
        // return node
        else
            return node;
    }
    // returns root of the tree
getRootNode()
{
    return this.root;
}
}

var BST = new BinarySearchTree();
  
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 
  
var root = BST.getRootNode();
              
// prints 5 7 9 10 13 15 17 22 25 27
//BST.inorder(root);
              
// Removing node with no children 
BST.remove(15);
              
              
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17 
              
                          
var root = BST.getRootNode();
              
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);