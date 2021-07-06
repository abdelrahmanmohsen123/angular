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
    {sizeType: "none", val: 'none'},
    {sizeType: "large", val: 'large'},
    {sizeType: "meduim", val: 'meduim'},
    {sizeType: "small", val: 'small'}
  ] 

  itemData = new FormGroup({ 
    cat_id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*")]),
    description: new FormControl('', [Validators.maxLength(200)]),
    itemImage: new FormControl(),
    size: new FormGroup({
      sizeType: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")])
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
   
    if(this.itemData.valid) {
      this._catService.addItemsForm(itemInfo).subscribe( 
        res => {
        this.result = res
        
      },
      
        () => { },
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
      )
      
    }
    
  }

  catNames() {
    this._catService.displayAllCats().subscribe(res => {
      //console.log(res.success)
      this.category = res.success
      // console.log(this.category.success.success[0].catName)
    })
  }

  // explan
  selectSize(event : any) {
    
    this.size.setValue(event.target.value, {
      onlySelf: true,
      
    })
    
  }

  

  // changeCity(e) {
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }
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

  get sizeType() {
    return this.itemData.get('sizeType')
  }

  get price() {
    return this.itemData.get('price')
  }


  get offer_item() {
    return this.itemData.get('offer_item')
  }

  get itemImage () {
    return this.itemData.get('itemImage')
  }
  
  
}

