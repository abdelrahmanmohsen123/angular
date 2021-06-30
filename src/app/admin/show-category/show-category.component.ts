import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  allCats: any = []

  constructor(private _catService: CategoryService) { 
    this.getAllCats()
  }

  ngOnInit(): void {
  }

  getAllCats() {
    this._catService.displayAllCats().subscribe(
      res => {
        this.allCats = res /// why ???? res.cats not working
      }
    )
  }


}
