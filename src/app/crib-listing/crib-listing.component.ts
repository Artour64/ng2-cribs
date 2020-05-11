import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/operators';
//import { map, filter, switchMap } from 'rxjs/operators';
//import { cribs } from './../data/cribs';
import { Crib } from '../crib';
import { CribsService } from '../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  //cribs: Array<Crib> = cribs;
  cribs: Array<Crib>;
  error: string;

  constructor(
    private http: HttpClient,
    private cribsService: CribsService
  ) { }

  ngOnInit(): void {
    //this.http.get('data/cribs.json')
    //.pipe(map(res => res.json()))//depreciatd. json by default for angular 4.3+ (according to stack overflow)
    this.cribsService.getAllCribs()
    .subscribe(
      data => this.cribs=data as Array<Crib>,
      error => this.error=error.statusText
    );

    
  }

}
