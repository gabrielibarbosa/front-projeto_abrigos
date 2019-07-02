import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedInitComponent } from './feed-init/feed-init.component';

@NgModule({
  declarations: [FeedInitComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
