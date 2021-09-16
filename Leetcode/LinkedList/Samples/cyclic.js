/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//BruteForce
 var cyclic = function(head) {
    if(!head.next)
        return head;
    let map = new WeakMap();
    while(head){
        console.log(map);
        if(!map.has(head)){
            map.set(head,1);
        }else{
            return true;
        }
        head = head.next;
    }
    return false;
};

//BruteForce
var cyclic1 = function(head) {
    if(!head.next)
        return head;
    let map = [];
    while(head){
        if(!map.includes(head)){
            map.push(head);
        }else{
            return true;
        }
        head = head.next;
    }
    return false;
};
 class ListNode {
	// constructor
	constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
	}
}
let head = new ListNode(0);
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
head.next =node1 ; 
node1.next = node2
node2.next = node3;
node3.next = node4; //cyclic

console.log(cyclic1(head));
