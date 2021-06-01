export class Clothe {

    reference:string;
    description:string;
    price:any;
    size:string;
    color:Array<string>;

    constructor(reference='',description='',price='',size='',color=[]){
        this.reference=reference;
        this.description=description;
        this.price=price;
        this.size=size;
        this.color=color;

    }
}