import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q04-image',
  templateUrl: './q04-image.component.html',
  styleUrls: ['./q04-image.component.css']
})
export class Q04ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageUrl = 'https://picsum.photos/200/150?image=10';
  imageAlt = 'Sample Image';


  images = [
    { url: 'https://picsum.photos/200/150?image=10', label: 'Nature' },
    { url: 'https://picsum.photos/200/150?image=20', label: 'City' },
    { url: 'https://picsum.photos/200/150?image=30', label: 'Animals' },
  ];
  
  changeImage(url: string) {
    this.imageUrl = url;
  }
  
}
