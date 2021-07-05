import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  allItems: any = []
  constructor(private _catService: CategoryService) { 
    this.getAllItems()
  }

  ngOnInit(): void {
  }

  getAllItems(){
    this._catService.showAllItems().subscribe(res => {
      this.allItems = res.success
      //console.log(this.allItems[0].offer_item[0].is_offer)
    })
  }

}
