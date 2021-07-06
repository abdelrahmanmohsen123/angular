import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
// import { ShowItemsComponent } from '../show-items/show-items.component';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  allCats: any = []

  // @ViewChild(ShowItemsComponent, {static: true}) child?:ShowItemsComponent


  constructor(public _catService: CategoryService) { 
    this.getAllCats()
  }

  ngOnInit(): void {
  }

  getAllCats() {
    this._catService.displayAllCats().subscribe(
      res => {
        this.allCats = res /// why ???? res.cats not working
        // this._catService.globalVar = res.success
      }
    )
  }


}
