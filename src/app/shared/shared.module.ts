import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { UnauthPageComponent } from './components/unauth-page/unauth-page.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    NavigationBarComponent,
    UnauthPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NavigationBarComponent
  ]
})
export class SharedModule { }
