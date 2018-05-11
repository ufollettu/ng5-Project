import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDirective} from "./dropdown.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {
}
