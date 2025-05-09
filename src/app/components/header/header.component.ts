import { Component , inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent ,  RouterLink],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
                  <button class="text-xl" routerLink="/">My Store</button>
                  <app-primary-button  [label]="'Cart (' + cartService.cart().length + ')'" (btnClicked)="showButtonClicked()"
                     routerLink="/cart"
                  />
              </div>
            `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showButtonClicked() {
    console.log("Button clicked!");
  }

  cartService = inject(CartService)



}
