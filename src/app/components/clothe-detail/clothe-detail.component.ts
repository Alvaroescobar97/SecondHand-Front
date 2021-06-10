import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Clothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.css']
})
export class ClotheDetailComponent implements OnInit {

  clothe = new Clothe();

  items: GalleryItem[];

  imageData: any;

  arrayImages = new Array<any>();

  constructor(public gallery: Gallery, public lightbox: Lightbox, private clotheService: ClotheService,private rutaActiva: ActivatedRoute) {
    this.items = new Array<GalleryItem>();
  }

  ngOnInit(): void {
    this.getById();
    this.getClotheImages();
    
    /** Basic Gallery Example */

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

  }

  async getClotheImages(){
    const res = await this.clotheService.getImages(this.rutaActiva.snapshot.params.id);
    if(res){
      
      for (let i = 0; i < res.array.length; i++) {
        let element = {srcUrl:"",previewUrl:""};
        element.srcUrl = 'data:image/jpeg;base64,'+ res.array[i];
        element.previewUrl =  'data:image/jpeg;base64,'+res.array[i];
        this.arrayImages.push(element);
      }
      this.imageData = this.arrayImages;
      // Creat gallery items
    this.items = this.imageData.map((item: any) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    }
  }

  async getById(){
    const res = await this.clotheService.getClotheById(this.rutaActiva.snapshot.params.id);
    if(res){
      this.clothe = res;
      console.log(this.clothe);
    }
    
  }

}

