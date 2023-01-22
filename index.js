import LinkedList from './linked_list.js'

let linkedList = new LinkedList;

linkedList.append('test');
linkedList.prepend('test2');
linkedList.append('test3');
linkedList.append('test4 the new tail');
linkedList.append('test5 the tail');
linkedList.pop();
console.log(linkedList.size());
console.log(linkedList.head.data);
console.log(linkedList.head.next.data);
console.log(linkedList.head.next.next.data);
console.log(`Tail: ${linkedList.tail().data}`);
console.log(linkedList.at(2));
console.log(linkedList.contains('test'));
console.log(linkedList.find('fart'));
console.log(linkedList.toString());