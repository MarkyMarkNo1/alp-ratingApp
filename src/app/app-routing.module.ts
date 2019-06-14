import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentCreateComponent } from './content-create/content-create.component';

const routes: Routes = [
  { path: '', component: ContentListComponent},
  { path: 'content/:id', component: ContentDetailComponent},
  { path: 'create', component: ContentCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
