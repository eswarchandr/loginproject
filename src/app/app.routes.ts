import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConformationComponent } from './conformation/conformation.component';
import { SurveyComponent } from './survey/survey.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
{path:'',redirectTo:'/login',pathMatch:"full"},
{path:'home',component:HomeComponent},
{path:'list',component:ListComponent},
{path:'checkout',component:CheckoutComponent},
{path:'payment',component:PaymentComponent},
{path:'conformation',component:ConformationComponent},
{path:'survey',component:SurveyComponent}
];

