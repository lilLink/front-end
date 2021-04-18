import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "../models/company.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class CompanyService {
  
    constructor(private http: HttpClient) { }
  
    private companyUrl = 'http://localhost:8080';
  
    public findAll() {
      console.log("[find all companys]");
      return this.http.get<Company[]>(this.companyUrl + "/company", httpOptions);
    }
  
    public deleteById(company : Company) {
      console.log("[delete company]");
      return this.http.delete(this.companyUrl + "/company/delete/" + company.companyId, httpOptions);
    }
  
    public insert(company : Company) {
      console.log("[create company]");
      return this.http.post<Company>(this.companyUrl + "/company/add", company, httpOptions);
    }
  
    public update(company : Company) {
      console.log("[update company]");
      return this.http.put<Company>(this.companyUrl + "/company/add/" + company.companyId, company, httpOptions);
    }

    public findById(companyId: string) {
        console.log("[find by id]");
        return this.http.get<Company>(this.companyUrl + "/company/" + companyId, httpOptions);
      }
    
  
  }