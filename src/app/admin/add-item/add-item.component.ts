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
  stausOffer: Boolean = true
  textBtn : String = `Show Offer`
  msgCheck: String = ''
  result: any = {}

  constructor(private _catService: CategoryService, private fb: FormBuilder) {
    this.catNames()
  }

  itemData : FormGroup = this.fb.group({
    cat_id: ['',[Validators.required]],
    name: ['',[Validators.required , Validators.minLength(3) , Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*")]],
    offer_item: this.fb.array([
      this.storeOffers()
    ])
  })

  storeOffers() {
    return this.fb.group({
      is_offer: [false],
      newPrice: ['', Validators.pattern("^[0-9]+$")],
      desc: ['', Validators.maxLength(200)]
    }) 
  }

  ngOnInit(): void {}

  catNames() {
    this._catService.displayAllCats().subscribe(res => {
      this.category = res.success
    })
  }

  addOfferOnItem() {
    this.offer_item.push(this.storeOffers())
  }

  changeStatusOffer(even : any) {
    this.stausOffer = !this.stausOffer
    even.target.textContent == 'Show Offer' ? 
      even.target.textContent = 'Hidden Offer' : 
      even.target.textContent = 'Show Offer'
  }

  removeOffer(i : Required<number>) {
    this.offer_item.removeAt(i)
  }

  addItem() {
    // this.itemData.value
    this.isSubmited = true
    let itemInfo = new FormData()
    let vals: any = this.itemData.get('offer_item')?.value as FormArray

    itemInfo.append('cat_id', this.itemData.get('cat_id')?.value)
    itemInfo.append('name', this.itemData.get('name')?.value)

    vals.forEach((ele: any, i : Number) => {
      for (let j in ele) {
        itemInfo.append(`offer_item.${i}.${j}`, ele[j])
      }
    })

    if(this.itemData.valid) {
      this._catService.addItemsForm(itemInfo).subscribe(
        res => {
          console.log(res.success)
        },
        () => {},
        () => {
          if(this.result?.itemData != "") { 
            this.msgCheck= "done"
            this.itemData.reset()
            this.isSubmited = false 
            
          } 
          else this.msgCheck = "error" 
        }
      )
    }
    
  }

  get cat_id() {
    return this.itemData.get('cat_id')
  }

  get name() {
    return this.itemData.get('name')
  }

  get offer_item() {
    return this.itemData.get('offer_item') as FormArray
  }

}
