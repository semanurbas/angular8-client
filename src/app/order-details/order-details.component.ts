
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: [OrderService]
})
export class OrderDetailsComponent implements OnInit {

  id: number;
  order: Order;

  constructor(private route: ActivatedRoute,private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {
    this.order = new Order();

    this.id = this.route.snapshot.params['id'];
    
    this.orderService.getOrder(this.id)
      .subscribe(data => {
        console.log(data)
        this.order = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['orders']);
  }
}
