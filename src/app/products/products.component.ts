import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from './products';
import { Iproducts } from './products-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, Iproducts{
initProperty: string | undefined;

  ngOnInit(): void {
    this.initProperty = 'hi';
    console.log(this.initProperty);
  }

  id: string = '123';

  greeting(): void {
    alert('hello');
  };
  
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

firstValue ='';
secondValue = '';
output : any;

productInterfact : Iproduct = {
  id: 123,
  name: 'd',
  type: 'h'
};

performCalculation() {
  this.output =  Number(this.firstValue) + Number(this.secondValue);
};

showImageToggle() {
  this.imageToggle = !this.imageToggle;
}

}