import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoticeListComponent} from './Componentes/notice-list/notice-list.component';
import {NoticeFormComponent} from './Componentes/notice-form/notice-form.component'
const routes: Routes = [
  { 
    path: '',
   redirectTo: '/noticias',
   pathMatch: 'full'
  },
  { path: 'noticias',
  component: NoticeListComponent
 },
 { 
  path: 'noticias/add',
 component: NoticeFormComponent
 
},
{ 
  path: 'noticias/edit/:id',
 component: NoticeFormComponent
 
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
