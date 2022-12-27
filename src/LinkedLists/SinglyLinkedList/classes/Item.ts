class Item {
  constructor(private data: any, private nextItem: Item | null = null) {}

  public getData(): any {
    return this.data;
  }

  public getNextItem(): Item | null {
    return this.nextItem;
  }

  public setNextItem(item: Item): void {
    if (this.nextItem) this.nextItem.setNextItem(item);
    else this.nextItem = item;
  }

  public count(size: number): number {
    if (this.nextItem) {
      size++;
      size = this.nextItem.count(size);
    }

    return size;
  }

  public print(): string {
    const rawData = this.getData();
    const data = typeof rawData === 'object' ? JSON.stringify(rawData) : rawData;
    const nextData = this.getNextItem()?.print() || null;

    return `${data} -> ${nextData}`;
  }
}

export default Item;
