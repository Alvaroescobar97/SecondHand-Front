import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Clothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/services/clothe.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})
export class ClotheComponent implements OnInit {

  @Input() clothe = new Clothe;
  @Input() owner = false;
  @Output() deleted = new EventEmitter<boolean>();
  images = new Array();

  constructor(private clotheService:ClotheService,private router : Router) { }

  ngOnInit(): void {
    this.getClotheImages();
  }

  async getClotheImages(){
    const res = await this.clotheService.getImages(this.clothe._id);
    if(res){
      
      this.images=res.array;
      console.log(this.images);
    }
  }
  
  deleteClothe(){
    Swal.fire({
      title: 'Are you sure you want to delete this Clothe?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await this.clotheService.deleteClothe(this.clothe._id);
        if(res){
          this.deleted.emit(true);
Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        
        }
        
      }
    })
  }

}
