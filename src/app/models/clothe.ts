export class Clothe {

    _id:string;
    reference:string;
    description:string;
    price:any;
    size:string;
    color:Array<string>;
    images:Array<string>;
    seller:any;

    constructor(_id='',reference='',description='',price='',size='',color=[],images=[],seller=''){
        this._id=_id;
        this.reference=reference;
        this.description=description;
        this.price=price;
        this.size=size;
        this.color=color;
        this.images=images;
        this.seller=seller;
    }
}