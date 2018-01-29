import { Component, OnInit } from '@angular/core';
import { ImageService } from './service/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ImageService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private imagesService: ImageService
  ) {}
  
  title = 'app';

  imageToShow: any;

  isImageLoading: any;

createImageFromBlob(image: Blob) {
       let reader = new FileReader();
       reader.addEventListener("load", () => {
          this.imageToShow = reader.result;
       }, false);

       if (image) {
          reader.readAsDataURL(image);
       }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.imagesService.getPlot('/api/plot').subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
}
}
