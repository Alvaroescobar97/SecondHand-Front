import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HeaderComponent } from './components/header/header.component';
import { ClotheComponent } from './components/clothe/clothe.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ClotheNewComponent } from './pages/clothe-new/clothe-new.component';
import { ClotheEditComponent } from './pages/clothe-edit/clothe-edit.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ClotheDetailComponent } from './components/clothe-detail/clothe-detail.component';
import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    SingupComponent,
    HeaderComponent,
    ClotheComponent,
    SalesComponent,
    ClotheNewComponent,
    ClotheEditComponent,
    ChatComponent,
    ClotheDetailComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
