import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'netflix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/data/netflix-data.json')
      .subscribe(resp => this.data = resp);
  }


  public delete( item ) {
    const index = this.data.mylist.indexOf(item);
    this.data.mylist.splice(index, 1);
  }

  public add( item ) {
    this.data.mylist.push(this.deepClone(item));
  }

  public deepClone( item ) {
    return JSON.parse(JSON.stringify(item));
  }
  
}
