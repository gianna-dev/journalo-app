import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Entry } from '../entry.model';

@Injectable()
export class EntriesService {
  entriesChanged = new Subject<Entry[]>();
  entries: Entry[] = [];
  filteredEntries: Entry[];

  addEntry(newEntry: Entry) {
    this.entries.push(newEntry);
    this.entriesChanged.next(this.entries.slice());
  }

  getEntries() {
    return this.entries.slice();
  }

  selectEntries(category) {
    this.filteredEntries = this.entries.filter(
      (entry) => entry.category === category
    );
    this.entriesChanged.next(this.filteredEntries.slice());
  }

  searchEntries(searchData: string) {
    this.filteredEntries = this.entries.filter((entry) =>
      entry.content.toLowerCase().includes(searchData.toLowerCase())
    );
    this.entriesChanged.next(this.filteredEntries.slice());
  }
}
