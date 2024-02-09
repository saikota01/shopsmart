import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.css',
    imports: [MenuComponent]
})
export class WishlistComponent {

}
