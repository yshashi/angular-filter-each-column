import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './app.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  listData = [
    {
      productName: 'Apple',
      productCategory: 'Fruits',
      freshness: 'Brand New',
      description: 'This is Apple',
      price: '100',
      comment: 'Use before 60 Days',
      date: '2022-01-21T18:30:00.000Z',
      id: 1,
    },
    {
      productName: 'Mango',
      productCategory: 'Dish',
      freshness: 'New',
      description: 'This is mango',
      price: '1030',
      comment: 'Use before 30 Days',
      date: '2022-01-21T18:30:00.000Z',
      id: 2,
    },
    {
      productName: 'Grapes',
      productCategory: 'Vegetable',
      freshness: 'Brand New',
      description: 'This is Grapes',
      price: '130',
      comment: 'Use before 260 Days',
      date: '2022-01-21T18:30:00.000Z',
      id: 3,
    },
  ];
  filterData: any;

  ngOnInit(): void {
    this.filterData = this.listData;
  }
  filter(event: Event, colName: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterData = this.listData.filter((a: any) => {
      return a[colName].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
    });
  }
}
