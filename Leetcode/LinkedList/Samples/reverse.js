
 
 
 var reverse = function(head) {
     if(!head || !head.next)
     {
         return head;
     }
     let tail = head,
     first = head;
     let second= first.next;
     while(second){
         const temp = second.next;
         second.next=first;
         first = second;
         second = temp;
     }
     tail.next=null;
     return first;
 }
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
console.log(JSON.stringify(reverse(head)));
