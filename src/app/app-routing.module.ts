import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RouteGuardLoginGuard } from './service/route-guard-login.guard';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent,canActivate:[RouteGuardLoginGuard]},
  {path:'home',component:HomeComponent, canActivate:[RouteGuardService]},
  {path:'bitcoin',component:BitcoinComponent, canActivate:[RouteGuardService]},
  {path:'info',loadChildren:'./module/module.module#InfoModule',canActivate:[RouteGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
