export interface Items {
    cat_id: String
    name: String
    description: String
    itemImage: String
    size:[
        {
            name: String
            price: Number
        }
    ] 
    DateFrom: Date
    DateTo: Date
    price: Number
    offer_item:[
        {
            is_offer: Boolean
            newPrice: Number
            desc: String
        }
    ]
    
}
