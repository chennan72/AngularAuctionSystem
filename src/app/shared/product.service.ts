import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private comments: Comment[] = [
    new Comment(1, 1, '2019-07-02 20:06:35', 'Nan Chen', 4, 'Nice smart-phone!'),
    new Comment(2, 2, '2019-11-08 20:56:30', 'Chou-Chun Yin', 5, 'Excellent!'),
    new Comment(3, 3, '2019-10-28 12:45:05', 'Ta-Yu Chien', 3, 'Too expensive!'),
    new Comment(4, 4, '2019-08-07 08:00:51', 'Chun-Cheng Lu', 3, 'The system is really sloooow!'),
    new Comment(5, 5, '2019-11-11 11:17:03', 'Wei-Chi Chen', 2, 'The most awful phone I\'v ever used!'),
    new Comment(6, 6, '2019-11-19 16:32:21', 'Yen-Chih Tsou', 4, 'Far beyond my expectation!')
  ];

  constructor(private http: HttpClient) {
  }

  getAllCategories(): string[] {
    return ['Apple', 'iPhone', 'Samsung', 'Samsung Galaxy'];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<any>('/api/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<any>('/api/products' + id);
  }

  getCommentsForProduct(id: number): Comment[] {
    const ans: Comment[] = this.comments.filter((comment: Comment) => comment.productId === id);
    return ans;
  }
}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public category: Array<string>) {
  }
}

export class Comment {

  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
