import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
public slides = [];
@ViewChild('mainslides', {static: true}) slide: IonSlides;
  constructor() {}

  ngOnInit(){
    this.slides = [
      {
        title:'Music is life itself',
        img:'music is life',
        desc:'Music, once admitted to the soul, becomes a sort of spirit, and never dies.',
      },
      {
        title:'Music acts like a magic key',
        img:'language we speak',
        desc:'Music expresses that which cannot be put into words and that which cannot remain silent',
      },
      {
        title:'Where words fail, music speaks.',
        img:'imagination',
        desc:'How is it that music can, without words, evoke our laughter, our fears, our highest aspirations?',
      },];
  }
  goBack(){
this.slide.slidePrev();
  }
  skipBtn(){

  }
  fabNext(){
this.slide.slideNext();
  }
}
