import Item from './Item';

type ListHead = Item | null;

class List {
  constructor(private Head: ListHead = null) {}

  public add(...items: Array<Item>) {
    items.forEach(item => {
      if (this.Head) this.Head.setNextItem(item);
      else this.Head = item;
    });
  }

  public remove(): ListHead {
    if (this.Head) {
      const oldHead = this.Head;
      const newHead = oldHead.getNextItem();

      this.Head = newHead;
      return oldHead;
    }

    return null;
  }

  public size(): number {
    let count = 0;

    if (this.Head) {
      count++;
      count = this.Head.count(count);
    }

    return count;
  }

  public print(): string {
    let log = 'List: ';

    if (this.Head) log += this.Head.print();
    else log += 'empty...';

    return log;
  }
}

export default List;
