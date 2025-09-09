/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    addTwoLists(head1, head2) {
        // code here
        function reverse(head) {
            let current = head, prev = null;
            while(current) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }
        
        function trailZero(head) {
            while(head.next && head.data === 0) {
                head = head.next;
            }
            return head;
        }
        
        head1 = trailZero(head1);
        head2 = trailZero(head2);
        
        head1 = reverse(head1);
        head2 = reverse(head2);
        
        let newHead = null, prev = null, remain = 0;
        
        while(head1 && head2) {
            
            let num = head1.data + head2.data + remain;
            
            if(num > 9) num = num%10, remain = 1;
            else remain = 0;
            
            let newNode = new Node();
            newNode.data = num;
            newNode.next = null;
            
            if(newHead === null) newHead = newNode, prev = newNode;
            else prev.next = newNode, prev = newNode;
            
            head1 = head1.next, head2 = head2.next;
            
        }
        
        while(head1) {
            let num = head1.data + remain;
            
            if(num > 9) num = num%10, remain = 1;
            else remain = 0;
            
            let newNode = new Node();
            newNode.data = num;
            newNode.next = null;
            
            if(newHead === null) newHead = newNode, prev = newNode;
            else prev.next = newNode, prev = newNode;
            
            head1 = head1.next
        }
        
         while(head2) {
            let num = head2.data + remain;
            
            if(num > 9) num = num%10, remain = 1;
            else remain = 0;
            
            let newNode = new Node();
            newNode.data = num;
            newNode.next = null;
            
            if(newHead === null) newHead = newNode, prev = newNode;
            else prev.next = newNode, prev = newNode;
            
            head2 = head2.next
        }
        
        if(remain) {
            let newNode = new Node();
            newNode.data = remain;
            newNode.next = null;
            
            if(newHead === null) newHead = newNode, prev = newNode;
            else prev.next = newNode, prev = newNode;
        }
        
        
        newHead = reverse(newHead);
        
        return newHead;
    }
}





