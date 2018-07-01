function BinaryTree (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

BinaryTree.prototype.preorder = function(func) {
    this.walk(func, ['this', 'left', 'right']);
}
BinaryTree.prototype.inorder = function(func) {
    this.walk(func, ['left', 'this', 'right'] );
}
BinaryTree.prototype.postorder = function(func) {
    this.walk(func, ['left', 'right', 'this']);
}

BinaryTree.prototype.walk = function(func, order) {

    for (let i = 0; i < order.length; i++) {
        switch(order[i]) {
            case 'this': func(this.value); break;
            case 'left': if(this.left) { this.left.walk(func, order); }  break;
            case 'right': if(this.right) { this.right.walk(func, order); }break;
        }
    }

}

function createBinaryTreeFromArray(arr) {
    let left = null, right = null;

    if(arr[1]) {
           left = createBinaryTreeFromArray(arr[1]);
    }
    if(arr[2]) {
           right = createBinaryTreeFromArray(arr[2]);
    }
    return new BinaryTree(arr[0], left, right);
}

let arr = [1, [2, [4, [7]], [5]], [3, [6, [8],[9]]]];
let tree = createBinaryTreeFromArray(arr);
tree.preorder(console.log);
console.log('---');
tree.inorder(console.log);
console.log('---');
tree.postorder(console.log);
