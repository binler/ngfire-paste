import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [
  NavbarComponent,
  FooterComponent,
  NotFoundComponent,
  LoaderComponent
];

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
