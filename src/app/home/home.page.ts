import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  photos = [];

  constructor(private phosService: PhotosService) {}

  ngOnInit(){
    this.phosService.getphotos()
      .subscribe(data => {
        console.log(data)
        this.photos = data;
      })
  }

}
