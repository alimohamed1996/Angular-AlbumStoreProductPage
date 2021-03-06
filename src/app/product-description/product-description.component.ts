import { Album } from "../album";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"],
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) {}
  //prettier-ignore
  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe(response => this.albumInfo = response);
  }
}
