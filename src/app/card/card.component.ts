import { Component } from '@angular/core';

import { BookModel } from '../home-page/home-page.component';
import { booksData } from '../books.const';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card:BookModel[] = [];
  ngOnInit(){
    this.card.push(booksData[0]);
    this.card.push(booksData[1]);
  }

}
