import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EasyTopInterviewQuestionsRoutingModule } from './easy-top-interview-questions-routing.module';
import { RemoveDuplicatesFromSortedArrayComponent } from './problems/remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array.component';
import { ProblemsComponent } from './problems/problems.component';


@NgModule({
  declarations: [
    RemoveDuplicatesFromSortedArrayComponent,
    ProblemsComponent
  ],
  imports: [
    CommonModule,
    EasyTopInterviewQuestionsRoutingModule
  ]
})
export class EasyTopInterviewQuestionsModule { }
