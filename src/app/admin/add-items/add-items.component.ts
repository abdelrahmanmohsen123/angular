import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Items } from 'src/app/interfaces/items';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'] 
  
})
export class AddItemsComponent implements OnInit {
  category: any = []
  //offer: any = []
  isSubmited: Boolean = false
  msgCheck: String = ''
  result: any = {}

  size: any = [
    {name: "none", val: 'none'},
    {name: "large", val: 'large'},
    {name: "meduim", val: 'meduim'},
    {name: "small", val: 'small'}
  ] 

  itemData = new FormGroup({ 
    cat_id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    description: new FormControl('',[Validators.maxLength(200)]),

    size: new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required,Validators.pattern("^[0-9]+$")])
    }),

    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
    
    offer_item: new FormGroup({
      is_offer: new FormControl(false),
      newPrice: new FormControl('',[Validators.pattern("^[0-9]+$")]),
      desc: new FormControl('', [Validators.maxLength(200)])
    }) 
    
  }) 
  constructor(private _catService: CategoryService) { 
    this.catNames()
    //this.offerItemsStatus()
  }

  ngOnInit(): void {
  }

  addItem() {
    let itemInfo : Items = this.itemData.value
    this.isSubmited = true
    this._catService.addItemsForm(itemInfo).subscribe( res => {
      this.result = res
      // console.log(res)
    }),
    () => {

    }
    () => {
      if(this.result?.itemData != "") { 
        this.msgCheck= "done"
        this.itemData.reset()
        this.isSubmited = false 
        
      } 

      else {
        this.msgCheck = "error" 
        
      }
    }
  }

  catNames() {
    this._catService.displayAllCats().subscribe(res => {
      //console.log(res.success)
      this.category = res.success
      // console.log(this.category.success.success[0].catName)
    })
  }
  // offerItemsStatus() {
  //   this._catService.showAllItems().subscribe(res => {
  //     //console.log(res.success)
  //     this.offer = res.success
  //     this.offer.forEach((el:any)=> {
  //       el.offer_item.forEach((e:any) => {
  //         console.log(e.is_offer)
  //       })
  //     })
  //     //console.log(this.offer)
  //   })
  // }

  get cat_id() {
    return this.itemData.get('cat_id')
  }
  get name() {
    return this.itemData.get('name')
  }
  get description() {
    return this.itemData.get('description')
  }
  get DateFrom() {
    return this.itemData.get('DateFrom')
  }
  get DateTo() {
    return this.itemData.get('DateTo')
  }
  get sizeItem() {
    return this.itemData.get('size')
  }
  get offer_item() {
    return this.itemData.get('offer_item')
  }
  
  
}

