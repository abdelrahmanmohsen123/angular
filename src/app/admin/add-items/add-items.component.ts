import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from 'src/app/interfaces/items';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'] 
  
})
export class AddItemsComponent implements OnInit {
  category: any = []
  size: any = [
    {name: "none", val: 'none'},
    {name: "large", val: 'large'},
    {name: "meduim", val: 'meduim'},
    {name: "small", val: 'small'}
  ] 

  itemData = new FormGroup({ 
    cat_id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    description: new FormControl(''),

    size: new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
    }),

    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
    price: new FormControl(''),
    
    offer_item: new FormGroup({
      is_offer: new FormControl(false),
      newPrice: new FormControl(''),
      desc: new FormControl('')
    }) 
    
  }) 
  constructor(private _catService: CategoryService) { 
    this.catNames()
  }

  ngOnInit(): void {
  }

  addItem() {
    let itemInfo : Items = this.itemData.value

    this._catService.addItemsForm(itemInfo).subscribe( res => {
      // console.log(res)
    }),
    () => {}
    () => {}
  }

  catNames() {
    this._catService.displayAllCats().subscribe(res => {
      console.log(res.success)
      this.category = res.success
      // console.log(this.category.success.success[0].catName)
    })
  }

}

