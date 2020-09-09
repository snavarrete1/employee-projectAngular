import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LayoutModule } from '@angular/cdk/layout';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { GoogleSigninDirective } from '../custom-directives/google-signin.directive';


const modules = [
  MatButtonModule,
  MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule,  
  MatListModule, 
  MatCardModule,
  MatFormFieldModule, 
  MatInputModule,
  LayoutModule,
  CommonModule,
  RouterModule

]

const components = [
  ShellComponent
]


@NgModule({
  declarations: [...components, GoogleSigninDirective],
  imports: [
   ...modules
  ],
  exports:[
   ...modules,
   ...components,
   GoogleSigninDirective
  ]
})
export class SharedModule { }
