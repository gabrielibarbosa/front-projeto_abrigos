import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedInitComponent } from './feed-init/feed-init.component';

const routes: Routes = [
  { path: '', component: FeedInitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
