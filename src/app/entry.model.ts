export class Entry {
  static category: Entry;
  constructor(public category: string, public content: string) {
    this.category = category;
    this.content = content;
  }
}
