import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntriesService } from './entries/entries.service';
import { EntryNewComponent } from './entry-new/entry-new.component';
import { MotivationComponent } from './motivation/motivation.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryNewComponent,
    MotivationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EntriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
