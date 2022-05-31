/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// #234 -> works but stack based sol'n would be better
 var isPalindrome = function(head) {
    if (!head) return false;
    const itemArr = [];
    while (head) {
        itemArr.push(head.val);
        head=head.next;
    }
    
    for (let i = 0; i < itemArr.length; i++) {
        const left = itemArr[i];
        const right = itemArr[itemArr.length - 1 - i];
        if (i >= itemArr.length - 1 - i) break;
        
        if (left !== right) return false;
    }
    return true;
};