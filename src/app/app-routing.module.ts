import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TabsComponent } from './tabs/tabs.component';
import { V21autocompleteComponent } from './v21autocomplete/v21autocomplete.component';
import { V23datePickerComponent } from './v23date-picker/v23date-picker.component';
import { V24tooltipComponent } from './v24tooltip/v24tooltip.component';
import { V25snakebarComponent } from './v25snakebar/v25snakebar.component';
import { V27tableComponent } from './v27table/v27table.component';
import { V32virtualScrollingComponent } from './v32virtual-scrolling/v32virtual-scrolling.component';

const routes: Routes = [
  {path:"profile", component:ProfileComponent},
  {path:"tabs", component:TabsComponent},
  {path:"autocomplete", component:V21autocompleteComponent},
  {path:'datepicker', component:V23datePickerComponent},
  {path:"tooltip", component:V24tooltipComponent},
  {path:"snakbar", component:V25snakebarComponent},
  {path:'table', component:V27tableComponent},
  {path:'vscroll', component:V32virtualScrollingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
