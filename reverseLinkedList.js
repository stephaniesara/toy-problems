// practice with Gregory 5.9.18

function reverseLinkedList(head) {
  let prev = head;
  let curr = prev.next;
  prev.next = null;
  while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
}