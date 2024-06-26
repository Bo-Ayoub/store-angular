import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {
  @Input() image :string="";
  @Input() price :string="";
  @Input() title :string="";

}
