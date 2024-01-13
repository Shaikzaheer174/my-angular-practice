import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
value1 = 1;
value2 = 2;
result = this.value1 + this.value2;
imageToggle: boolean = false;

@Input() name: string | undefined;

randomText = 'random text';
pink = 'pink';
myPath = 'assets/js.png'

 products = [
  {name: 'a', value: 'aa'},
  {name: 'b', value: 'bb'},
  {name: 'c', value: 'cc'},
  {name: 'd', value: 'dd'},
];

showImageToggle() {
  this.imageToggle = !this.imageToggle;
}

}