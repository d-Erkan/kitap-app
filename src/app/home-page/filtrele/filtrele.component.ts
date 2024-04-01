import { BookModel } from './../home-page.component';
import { Component, EventEmitter, Input,Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SelectFormExampleComponent } from '../select-form-example/select-form-example.component';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-filtrele',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule,SelectFormExampleComponent, MatMenuModule],
  templateUrl: './filtrele.component.html',
  styleUrl: './filtrele.component.scss'
})
export class FiltreleComponent {
  // books:BookModel[] | any = booksData;
  // categories:string[]=[
  //   "Fiction",
  //   "Fantastic",
  //   "Romance",
  //   "Biography",
  //   "Comedy",
  //   "History"
  // ];
  constructor(private router: Router) { }
  handleCategory(eventSent: string){
    this.selectedCategory.emit(eventSent);
  }

  goToCard(){
    this.router.navigateByUrl('/card');
  }
  @Input() categories: string[] = [];
  @Output() selectedCategory= new EventEmitter<string>();
}
