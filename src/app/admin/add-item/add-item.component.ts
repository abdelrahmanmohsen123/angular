import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  category: any = []
  isSubmited: Boolean = false
  msgCheck: String = ''
  result: any = {}

  
  

  constructor(private _catService: CategoryService, private fb: FormBuilder) {
    this.catNames()
  }

  itemData = this.fb.group({
    cat_id: ['',[Validators.required]],

    offer_item: this.fb.array([
      this.storeOffers()
    ])

  })

  ngOnInit(): void {
  }

  catNames() {
    this._catService.displayAllCats().subscribe(res => {
      this.category = res.success
    })
  }

  storeOffers(): FormGroup {
    return this.fb.group({
      is_offer: (true),
      newPrice: new FormControl('',[Validators.pattern("^[0-9]+$")]),
      desc: new FormControl('', [Validators.maxLength(200)])
    }) 
  }

  addItem() {
    let itemInfo = new FormData()
    itemInfo.append('cat_id', this.itemData.get('cat_id')?.value)

    // FormArray = FormGroup.get('offer_item') as FormArray
    // itemInfo.append('offer_item', this.itemData.get('offer_item')? as FormArray) 
  }

}
