import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  itemData = new FormGroup({ 
    cat_id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    description: new FormControl(''),
    size: new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
    }) ,
    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
    price: new FormControl(''),
    
    offer_item: new FormGroup({
      is_offer: new FormControl(false),
      newPrice: new FormControl(''),
      desc: new FormControl('')
    }) 
    
  }) 
  constructor(private _catService: CategoryService) { }

  ngOnInit(): void {
  }

}
