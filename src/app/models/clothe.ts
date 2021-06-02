export class Clothe {

    _id:string;
    reference:string;
    description:string;
    price:any;
    size:string;
    color:Array<string>;

    constructor(_id='',reference='',description='',price='',size='',color=[]){
        this._id=_id;
        this.reference=reference;
        this.description=description;
        this.price=price;
        this.size=size;
        this.color=color;

    }
}