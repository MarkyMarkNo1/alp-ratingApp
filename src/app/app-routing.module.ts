import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentCreateComponent } from './content-create/content-create.component';
import { ContentEditComponent } from './content-edit/content-edit.component';

const routes: Routes = [
  // { path: '', component: ContentListComponent},
  { path: 'content/:id', component: ContentDetailComponent},
  {
    path: '',
    component: ContentListComponent,
    children: [
      // { path: '', pathMatch: 'full' },
      { path: 'create', component: ContentCreateComponent },
      { path: 'edit/:id', component: ContentEditComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
