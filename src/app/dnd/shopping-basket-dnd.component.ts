import { Component } from '@angular/core';

@Component({
    selector: 'shoping-basket-dnd',
    template: `
<h4>Drag-and-Drop - Shopping basket</h4>
<div class="row">

    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available products</div>
            <div class="panel-body">
                <div *ngFor="let product of availableProducts" class="panel panel-default"
                    dnd-draggable [dragEnabled]="product.quantity>0" [dragData]="product" (onDragSuccess)="orderedProduct($event)" [dropZones]="['demo1']">
                    <div class="panel-body">
                        <div [hidden]="product.quantity===0">{{product.name}} - \${{product.cost}}<br>(available: {{product.quantity}})</div>
                        <div [hidden]="product.quantity>0"><del>{{product.name}}</del><br>(NOT available)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable (onDropSuccess)="addToBasket($event)" [dropZones]="['demo1']" class="panel panel-info">
            <div class="panel-heading">Shopping Basket<br>(to pay: \${{totalCost()}})</div>
            <div class="panel-body">
                <div *ngFor="let product of shoppingBasket" class="panel panel-default">
                    <div class="panel-body">
                    {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: \${{product.cost * product.quantity}})
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class ShoppingBasketDndComponent {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    constructor() {
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }

    addToBasket($event: any) {
        let newProduct: Product = $event.dragData;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort((a: Product, b: Product) => {
            return a.name.localeCompare(b.name);
        });
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
}