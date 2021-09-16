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

 function findMergeNode1(headA, headB) {
    let mapA=[],mapB=[];   
       while(headA || headA){
               
           if(headA && !mapA.includes(headA)){
               mapA.push(headA);
           }if(headB && !mapB.includes(headB)){
               mapB.push(headB);
           }
           
       
           if(headA){
               if(mapB.includes(headA)){
                   return headA.data;
               }
               headA = headA.next;
           }
           if(headB) {
               if(mapA.includes(headB)){
                   return headB.data;
               }
               headB = headB.next;
           }
           
       }
   }
   function findMergeNode (headA, headB) {
    let currentA = headA, currentB = headB;
     while(currentA != currentB){
        //If you reached the end of one list start at the beginning of the other one
        //currentA
        if(currentA.next == null){
            currentA = headB;
        }else{
            currentA = currentA.next;
        }
        //currentB
        if(currentB.next == null){
            currentB = headA;
        }else{
            currentB = currentB.next;
        }
    }
    return currentB.data;
}
 class ListNode {
	// constructor
	constructor(val, next) {
        this.data = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
	}
}
let headA = new ListNode(0);
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
headA.next =node1 ; 
node1.next = node2
node2.next = node3;
node3.next = node4; //cyclic


let headB = new ListNode(10);
let nodeb1 = new ListNode(11);
let nodeb2 = new ListNode(12);
let nodeb3 = new ListNode(13);
let nodeb4 = new ListNode(14);
headB.next =nodeb1 ; 
nodeb1.next = nodeb2
//nodeb2.next = node3;

// 0 - 1 - 2 - 3 - 4
//       -    /
// 10 - 11
let ret = findMergeNode(headA,headB);
console.log(ret);
