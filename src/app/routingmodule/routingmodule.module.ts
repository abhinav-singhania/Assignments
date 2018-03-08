import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { CheckoutComponent } from '../checkout/checkout.component';
const routes:Routes=[{
  path:'',
  component:LandingpageComponent
},
{
  path:'checkout',
  component:CheckoutComponent
}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)
   
  ],
  exports:[RouterModule]
})
export class RoutingmoduleModule { }
