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

  constructor(private clotheService: ClotheService, private router: Router) { 
    this.createForm = new FormGroup({
      reference: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    if(this.createForm.valid){
      console.log(this.createForm.value);
      let {reference,size,price,description} = this.createForm.value;
      const res = await this.clotheService.createClothe(reference,size,price,description);
      console.log(res);
      this.router.navigate(['/clothesOnSale']);
    }
  }
}
