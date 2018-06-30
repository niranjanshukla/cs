function LinkedList(value, next) {
    this._value = value;
    this._next = next;
}

LinkedList.prototype.value = function() {
    if (arguments.length === 1) {
        this._value = arguments[0];
    }
    return this._value;
}

LinkedList.prototype.next = function() {
    if (arguments.length === 1) {
        this._next = arguments[0];
    }
    return this._next;
}

function createLinkedListFromArray(arr) {
    let head = new LinkedList(arr[0], null);
    let prev = head;
    for(let i = 1; i < arr.length; i++) {
        let curr = new LinkedList(arr[i], null);
        prev.next(curr);
        prev = curr;
    }
    return head;
}

let head = createLinkedListFromArray([10,20,25,33]);
console.log(head);