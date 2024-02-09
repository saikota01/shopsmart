import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  title:string = 'All';

  updatetitle(newTitle: string) {
    this.title = newTitle;
  }
}
