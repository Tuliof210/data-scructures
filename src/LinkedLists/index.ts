import { List as SL_List, Item as SL_Item } from './SinglyLinkedList/classes';

const sl_list = new SL_List();
const sl_items = [
  new SL_Item('tulio'),
  new SL_Item(1),
  new SL_Item({ color: '#fff', fontFamily: 'inter' }),
  new SL_Item([true, null, 900]),
  new SL_Item("hello world I'm a english person"),
  new SL_Item(false),
  new SL_Item([]),
  new SL_Item(2730.789),
];

sl_list.add(...sl_items);

console.log(sl_list.remove(), sl_list.remove());
console.log(sl_list.print());
console.log(sl_list.size());

// ====================================================
