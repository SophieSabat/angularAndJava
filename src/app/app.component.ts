import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  car = {model: '', id: ''
  };
  cars: any[];
  constructor(private httpClient: HttpClient) {
  }
  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/cars';

  save(myForm: any): void {
    console.log(this.car);
    this.httpClient.post<any>(this._url + '/save', this.car)
      .subscribe(value => console.log(value));
  }

  ngOnInit(): void {
    this.httpClient.get<any[]>(this._url)
      .subscribe(value => this.cars = value);
  }

  delete(id): void {
    console.log(this.car);
    this.httpClient.delete<any>(this._url + '/delete/' + id)
      .subscribe(value => console.log(value));
  }
}
