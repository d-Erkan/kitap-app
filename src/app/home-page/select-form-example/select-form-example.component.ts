import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
interface Rating {
  index: number;
  value: string;
}

@Component({
  selector: 'app-select-form-example',
  standalone: true,
  imports: [MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './select-form-example.component.html',
  styleUrl: './select-form-example.component.scss'
})
export class SelectFormExampleComponent {
  selectedValue: string="";
  constructor(private _router: Router) {}
  rating: Rating[] = [
    {index: 0, value: 'book rating'},
    {index: 1, value: 'book name - alphabetically'},
    {index: 2, value: 'year of publication'},
  ];

  goToLogin(){
    this._router.navigateByUrl('/login');
  }
}
