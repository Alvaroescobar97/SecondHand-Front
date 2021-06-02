import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClotheEditComponent } from './pages/clothe-edit/clothe-edit.component';
import { ClotheNewComponent } from './pages/clothe-new/clothe-new.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingupComponent},
  {path: 'clothesOnSale', component: SalesComponent},
  {path: 'clothesOnSale/new', component: ClotheNewComponent},
  {path: 'clothesOnSale/edit/:id', component: ClotheEditComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
