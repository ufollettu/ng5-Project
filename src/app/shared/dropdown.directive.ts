import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]' // attach without brackets to the element you want to use
})
export class DropdownDirective {

  //Syntax: @HostBinding({hostPropertyName?: string}) --->@HostBinding({class.open: string})
  @HostBinding('class.open') // append the class 'open'
  isOpen = false;            // if isOpen is true (default is false, dropdown is closed)

  @HostListener('click') toggleOpen() { // toggle new class on click button
    this.isOpen = !this.isOpen; // change the value of isOpen to use as toggle
    // console.log(this.isOpen);
  }
}
