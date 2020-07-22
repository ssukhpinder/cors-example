import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCorsComponent } from './test-cors/test-cors.component';


const routes: Routes = [
  { path: 'test-cors', component: TestCorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
