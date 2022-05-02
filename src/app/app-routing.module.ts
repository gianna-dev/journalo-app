import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { EntryNewComponent } from './entry-new/entry-new.component';
import { MotivationComponent } from './motivation/motivation.component';

const routes: Routes = [
  { path: 'neu', component: EntryNewComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: '', component: EntriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

  
}
