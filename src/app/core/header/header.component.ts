import {Component, OnInit} from '@angular/core';

import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>(); // export event to appComponent

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature) // set an event to export to appComponent
  // }
  //
  // isCollapsed: boolean = false;
  //
  // collapsed(event: any): void {
  //   console.log(event);
  // }
  //
  // expanded(event: any): void {
  //   console.log(event);
  // }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
