import { IProduct } from 'src/app/ViewModels/iproduct';
import { CompanyInfo } from './../../Shared/company-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  companyDetails: CompanyInfo;
  isServicesDisplayed: boolean;
  mainProducts: IProduct[];

  constructor() {
    this.isServicesDisplayed = true;
    let services = ['MArketing', 'Sales', 'Managmenent'];
    this.companyDetails = new CompanyInfo(
      'IT Company',
      'https://picsum.photos/seed/picsum/200/300',
      services,
      100000
    );
    this.companyDetails.establishDate =new  Date();

    this.mainProducts = [
      { ID: 1, Name: 'iphone 9', Quantity: 10, Price: 2000 },
      { ID: 2, Name: 'iphone 10', Quantity: 20, Price: 12000 },
      { ID: 3, Name: 'iphone xs', Quantity: 30, Price: 22000 },
      { ID: 36, Name: 'iphone xsf f s', Quantity:0, Price: 22000 },
      { ID: 4, Name: 'iphone s9', Quantity: 9, Price: 25000 },
      { ID: 5, Name: 'iphone x1maz0', Quantity: 2, Price: 14000 },
      { ID: 6, Name: 'iphone max xs', Quantity: 1, Price: 23000 },
    ];
  }


  toggleService() {
    this.isServicesDisplayed = !this.isServicesDisplayed;
  }

  ngOnInit(): void {
    console.log('In ngOnInit ... ')
  }

}
