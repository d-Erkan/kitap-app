import { Component } from '@angular/core';
import { booksData } from '../books.const';
import {MatTableModule} from '@angular/material/table';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { FiltreleComponent } from "./filtrele/filtrele.component";
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [MatTableModule, BookCardListComponent,FiltreleComponent, CardComponent]
})
export class HomePageComponent {
  books:BookModel[] | any = booksData;
  categories:string[]=["Tümü"];
  filteredBooks:BookModel[] | any= booksData ;
  cartList:BookModel[] = [];
  constructor(private _router:Router){}
  ngOnInit(){
    this.books.forEach((item:BookModel)=>{
      if(!this.categories.includes(item.category)){
        this.categories.push(item.category);
      }
    });
  }
  setBooksForCategories(event:string){
    if(event !="Tümü"){
      this.filteredBooks = this.books.filter((item:BookModel)=>
      item.category === event)
    }
    else{
      this.filteredBooks = this.books;
    }

  }

  filterBooks(event:string){
    if(event !="Tümü"){
      this.filteredBooks = this.books.filter((item:BookModel)=>
      item.category === event)
    }
    else{
      this.filteredBooks = this.books;
    }

  }

  goToCard(){
    this._router.navigateByUrl('/card');

  }
  addToCard(event:BookModel){
    this.cartList.push(event),
    console.log(this.cartList);
  }
}

export interface BookModel{
  name: string;
  author: string;
  year: string;
  image: string;
  category: string;
  rating: string;
  id: string;
}
