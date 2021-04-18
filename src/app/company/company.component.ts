import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies!: Company[];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.findAll()
      .subscribe( data => {
        this.companies = data;
      });
  };

  deleteById(company: Company): void {
    this.companyService.deleteById(company)
      .subscribe( data => {
        this.companies = this.companies.filter(p => p !== company);
      })
  };
}
