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
 var removeNthFromEnd = function(head, n) {
    if(!head.next)
        return head;
    
    let next = head.next;
    let count=1;
    while(next){
        count++
        next = next.next;
    }
    
    if(n === count){
        head = head.next;
        return head;
    }
    
    let i=1;
    next = head.next;
    while(i<count-n-1){
        i++;
        next = next.next;        
    }
    console.log(next.val);
    console.log(i);
    if(next.next)
    next.next = next.next.next;
    
    return head;
};
 class ListNode {
	// constructor
	constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
	}
}
let head = new ListNode(1);
let node = new ListNode(2);
head.next =node ; 
node.next = new ListNode(3);node = node.next;
node.next = new ListNode(4);node = node.next;
node.next = new ListNode(5);

//console.log(JSON.stringify(head));
// 1 2 3 4 5
console.log(JSON.stringify(removeNthFromEnd(head,5)));
