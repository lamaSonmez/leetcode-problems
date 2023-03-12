import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'/easy-top-interview-questions',
  loadChildren: () => import("./modules/easy-top-interview-questions/easy-top-interview-questions.module").then(m => m.EasyTopInterviewQuestionsModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
