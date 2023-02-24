import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/modelProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practicando Angular';
  http = inject(HttpClient);
  products:Product[] =[]

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data
      })
  }
}
