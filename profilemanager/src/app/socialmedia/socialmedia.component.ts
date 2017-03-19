import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  @Input() medias;
  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.medias));
  }

}
