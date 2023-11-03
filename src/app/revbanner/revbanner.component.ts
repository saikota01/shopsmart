import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revbanner',
  templateUrl: './revbanner.component.html',
  styleUrls: ['./revbanner.component.css']
})
export class RevbannerComponent {
  @Input() title:any;
  @Input() text:any;
  @Input() img:any;
}
