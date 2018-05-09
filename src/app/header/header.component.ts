import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Http, Response} from "@angular/http";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>(); // export event to appComponent

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature) // set an event to export to appComponent
  // }

  // isCollapsed: boolean = false;
  //
  // collapsed(event: any): void {
  //   console.log(event);
  // }
  //
  // expanded(event: any): void {
  //   console.log(event);
  // }

  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
