import { Component, Input, Output } from '@angular/core';
import { BookModel } from '../home-page.component';
import { EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() books: BookModel[]= [];
  @Output() addCard = new EventEmitter <BookModel>();
  addToCard(book: BookModel){
    this.addCard.emit(book);
  }
    showDescr(book: BookModel){
      console.log(book.image);
      return;
  }
}


