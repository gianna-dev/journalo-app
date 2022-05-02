import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EntriesService } from '../entries/entries.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry-new',
  templateUrl: './entry-new.component.html',
  styleUrls: ['./entry-new.component.scss'],
})
export class EntryNewComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  newEntry: Entry;

  constructor(private entriesService: EntriesService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newEntry = new Entry(value.category, value.content);
    this.entriesService.addEntry(newEntry);
    this.form.reset();
    this.router.navigate(['']);
  }
}
