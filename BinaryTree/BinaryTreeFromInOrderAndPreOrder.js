class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function buildTree(preorder1,inorder1){
    if(preorder1.length=== 0 || inorder1.length === 0){
        return;
    }
    let root = new Node(preorder1[0]);
    let mid = inorder1.indexOf(preorder1[0]);
    let pre = preorder1.slice(1,mid+1);
    let ino = inorder1.slice(0,mid);
    root.left = buildTree(pre,ino);
     pre = preorder1.slice(mid+1);
     ino = inorder1.slice(mid+1);
    root.right = buildTree(pre,ino);
    return root;
}

function getTree() {
    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17 

    let root = new Node(15);
    let node1 = new Node(10);
    let node2 = new Node(25);

    root.left = node1;
    root.right = node2;


    let node3 = new Node(7);
    let node4 = new Node(13);
    node1.left = node3;
    node1.right = node4;


    let node5 = new Node(22);
    let node6 = new Node(27);
    node2.left = node5;
    node2.right = node6;
    return root;
}


//lvr
function inorder(node, arr) {
    if (node !== null) {
        inorder(node.left, arr);
        arr.push(node.data);
        inorder(node.right, arr);
    }
    return arr;
}
//vlr
function preorder(node, arr) {
    if (node !== null) {
        arr.push(node.data);
        preorder(node.left, arr);
        preorder(node.right, arr);
    }
    return arr;
}

let root = getTree();
let inorder1 = [], preorder1 = [];
inorder(root, inorder1);
preorder(root, preorder1);

console.log(inorder1);
console.log(preorder1);

let tree = buildTree(preorder1,inorder1);
console.log(tree);
