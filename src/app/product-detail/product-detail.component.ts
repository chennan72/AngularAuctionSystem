import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  public comments: Comment[];

  public newRating = 5;
  public newComment = '';

  public isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {

  }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params.productId;
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProduct(productId);
    this.comments = [
      new Comment(1, 1, '2019-07-02 20:06:35', 'Nan Chen', 4, 'Nice smart-phone!'),
      new Comment(2, 2, '2019-11-08 20:56:30', 'Chou-Chun Yin', 5, 'Excellent!'),
      new Comment(3, 3, '2019-10-28 12:45:05', 'Ta-Yu Chien', 3, 'Too expensive!'),
      new Comment(4, 4, '2019-08-07 08:00:51', 'Chun-Cheng Lu', 3, 'The system is really sloooow!'),
      new Comment(5, 5, '2019-11-11 11:17:03', 'Wei-Chi Chen', 2, 'The most awful phone I\'v ever used!'),
      new Comment(6, 6, '2019-11-19 16:32:21', 'Yen-Chih Tsou', 4, 'Far beyond my expectation!')
    ];
    console.log(this.comments.length);
  }

  addComment() {
    // const comment = new Comment(0, this.product.id, new Date().toISOString(), 'Annoymous', this.newRating, this.newComment);
    const comment = new Comment(0, 1, new Date().toISOString(), 'Annoymous', this.newRating, this.newComment);
    this.comments.unshift(comment);
    // const sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    // this.product.rating = sum / this.comments.length;
    this.newComment = '';
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
