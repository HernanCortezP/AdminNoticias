import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Componentes/navigation/navigation.component';
import { NoticeFormComponent } from './Componentes/notice-form/notice-form.component';
import { NoticeListComponent } from './Componentes/notice-list/notice-list.component';
import {NoticesService} from './services/notices.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoticeFormComponent,
    NoticeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NoticesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
