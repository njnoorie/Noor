
 
 
 var reverse = function(head) {
     if(!head || !head.next)
     {
         return head;
     }
     let   first = head;
     let second= first.next;

     first.next = null;
     first.prev = second;

     while(second){
        // const temp = second.next;
        // second.next = first;
        // first.prev = second;
        
        second.prev = second.next;
        second.next = first;
        
         first = second;
         second = second.prev;

     }
     
     return first;
 }
 var reverseRecurse = function(head) {
     if(!head || !head.next)
     {
         return head;
     }
    
     let newHead = reverseRecurse(head.next);
     head.next.next = head;
     head.next = null;
     console.log(JSON.stringify(newHead));
     return newHead;

 }
 class ListNode {
	// constructor
	constructor(val, prev, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
	}
}
let head = new ListNode(1);
let node = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
head.next =node ;
node.prev = head; 

node.next = node3;
node3.prev = node;

node3.next = node4;
node4.prev = node3;

//console.log(JSON.stringify(head));
// 1 2 3 4 5
console.log(reverse(head));
