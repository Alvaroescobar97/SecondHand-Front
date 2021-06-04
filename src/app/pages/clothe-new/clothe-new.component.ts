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

  array=new Array();

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
    console.log(this.createForm.value);
    if(this.createForm.valid){

      console.log(this.createForm.value);
      let {reference,size,price,description} = this.createForm.value;
      console.log("Holi");
      const res = await this.clotheService.createClothe(reference,size,price,description);
      console.log("Holi2",this.images);
      console.log(res);
      console.log(res.clotheSaved._id);
      if(res.clotheSaved._id){
        const upload =  await this.clotheService.upload(res.clotheSaved._id, this.images);
        console.log(upload);
      }
      
      this.router.navigate(['/clothesOnSale']);
    }
  }
  selectFiles(event:any){
    this.images = event.target.files;

  }
}
