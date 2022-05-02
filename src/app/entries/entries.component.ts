import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entry } from '../entry.model';
import { EntriesService } from './entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss'],
})
export class EntriesComponent implements OnInit, OnDestroy {
  entries: Entry[];
  private entriesChangedSub: Subscription;
  searchData: string;

  constructor(private entriesService: EntriesService) {}

  ngOnInit(): void {
    this.entries = this.entriesService.getEntries();
    this.entriesChangedSub = this.entriesService.entriesChanged.subscribe(
      (entries: Entry[]) => {
        this.entries = entries;
      }
    );
  }

  onGetEntries() {
    this.entries = this.entriesService.getEntries();
  }

  onSelect(category) {
    this.entriesService.selectEntries(category);
  }

  onSearch(event: any) {
    this.searchData = event.target.value;
    this.entriesService.searchEntries(this.searchData);
  }

  ngOnDestroy(): void {
    this.entriesChangedSub.unsubscribe();
  }
}
