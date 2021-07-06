export interface Items {
    cat_id: any
    name: String
    description: String
    itemImage: String
    size:[
        {
            sizeType: String
            price: Number
        }
    ],
    DateFrom: Date
    DateTo: Date
    offer_item:[
        {
            is_offer: Boolean
            newPrice: Number
            desc: String
        }
    ]
    
}
