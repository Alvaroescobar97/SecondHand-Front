import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-clothe-new',
  templateUrl: './clothe-new.component.html',
  styleUrls: ['./clothe-new.component.css']
})
export class ClotheNewComponent implements OnInit {

  createForm: FormGroup;

  images:any;

  color:any;

  selectedColors = new Array<string>();

  urls=new Array<any>();

  constructor(private clotheService: ClotheService, private router: Router) { 
    this.createForm = new FormGroup({
      reference: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    
    if(this.createForm.valid){

      console.log(this.createForm.value);
      let {reference,size,price,description} = this.createForm.value;
      const res = await this.clotheService.createClothe(reference,size,price,description,this.selectedColors);
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
