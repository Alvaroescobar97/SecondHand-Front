import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-clothe-edit',
  templateUrl: './clothe-edit.component.html',
  styleUrls: ['./clothe-edit.component.css']
})
export class ClotheEditComponent implements OnInit {

  editForm: FormGroup;

  images:any;

  getImages:any;

  clothe = new Clothe();

  color:any;

  selectedColors = new Array<string>();

  urls=new Array<any>();

  constructor(private clotheService: ClotheService, private router: Router, private rutaActiva: ActivatedRoute) { 
    this.editForm = new FormGroup({
      reference: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl('')
    }); 
  }

  ngOnInit(): void {
    this.getById();
  }
   
  async getById(){
    const res = await this.clotheService.getClotheById(this.rutaActiva.snapshot.params.id);
    this.clothe = res;
    this.editForm.get('reference')?.setValue(this.clothe.reference);
    this.editForm.get('size')?.setValue(this.clothe.size);
    this.editForm.get('price')?.setValue(this.clothe.price.$numberDecimal);
    this.editForm.get('description')?.setValue(this.clothe.description);
    this.getImages = this.clothe.images;
    console.log(this.getImages);
    if(this.getImages){
      const res = await this.clotheService.getImages(this.clothe._id);
      this.getImages = res.array;
      console.log(this.getImages);
    }
    console.log(this.clothe);
    this.selectedColors = this.clothe.color;
  }

  async onSubmit(){
    
    if(this.editForm.valid){

      console.log(this.editForm.value);
      let {reference,size,price,description} = this.editForm.value;
      const res = await this.clotheService.updateClothe(this.rutaActiva.snapshot.params.id,reference,size,price,description,this.selectedColors);
      if(res.clotheSaved._id && this.images){
        const upload =  await this.clotheService.upload(res.clotheSaved._id, this.images);
        console.log(upload);
      }
      
      this.router.navigate(['/clothesOnSale']);
    }
  }

  async selectFiles(event:any){
    this.images = event.target.files;
    console.log(this.images);
    this.urls.length=0;
    for (let i = 0; i < this.images.length; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(this.images[i]);
      reader.onload = (events: any) => {
        this.urls.push(events.target.result);

      };
    }
  }

  addColor(){
    if(this.color !== undefined){
      this.selectedColors.push(this.color);
    }
  }

  deleteColor(i:any){
    this.selectedColors.splice(i,1);
  }
}
