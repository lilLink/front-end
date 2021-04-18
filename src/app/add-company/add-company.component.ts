import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company: Company = new Company();

  constructor() { }

  ngOnInit(): void {
  }

}
