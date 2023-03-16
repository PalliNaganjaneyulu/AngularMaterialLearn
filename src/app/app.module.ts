import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatbuttonToggleComponent } from './matbutton-toggle/matbutton-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { V8BadgesComponent } from './v8-badges/v8-badges.component';
import { V9SpinnersComponent } from './v9-spinners/v9-spinners.component';
import { V10NavbarOrToolBarComponent } from './v10-navbar-or-tool-bar/v10-navbar-or-tool-bar.component';
import { V11SideNavBarComponent } from './v11-side-nav-bar/v11-side-nav-bar.component';
import { V12MenusComponent } from './v12-menus/v12-menus.component';
import { ProfileComponent } from './profile/profile.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { V21autocompleteComponent } from './v21autocomplete/v21autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { V23datePickerComponent } from './v23date-picker/v23date-picker.component';
import { V24tooltipComponent } from './v24tooltip/v24tooltip.component';
import { V25snakebarComponent } from './v25snakebar/v25snakebar.component';
import { V26modelComponent } from './v26model/v26model.component';
import { V27tableComponent } from './v27table/v27table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { V32virtualScrollingComponent } from './v32virtual-scrolling/v32virtual-scrolling.component';
@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    MatbuttonToggleComponent,
    IconsComponent,
    V8BadgesComponent,
    V9SpinnersComponent,
    V10NavbarOrToolBarComponent,
    V11SideNavBarComponent,
    V12MenusComponent,
    ProfileComponent,
    TabsComponent,
    HeaderComponent,
    V21autocompleteComponent,
    V23datePickerComponent,
    V24tooltipComponent,
    V25snakebarComponent,
    V27tableComponent,
    V32virtualScrollingComponent,

  ],
  entryComponents:[V26modelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
