
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { radixCross1 } from '@ng-icons/radix-icons';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective, BrnSheetCloseDirective } from '@spartan-ng/ui-sheet-brain';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/ui-sheet-helm';

@Component({
  selector: 'menu-bar',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    BrnSheetCloseDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ radixCross1 })],
  template: `
    <hlm-sheet side="right">
      <button class="md:hidden p-1 rounded-lg hover:bg-gray-200" brnSheetTrigger>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
      <hlm-sheet-content *brnSheetContent="let ctx">
        <hlm-sheet-header>
          <h3 hlmSheetTitle>Menu :)</h3>
          <p hlmSheetDescription>Navigate using the below links.</p>
        </hlm-sheet-header>
        <!-- Menu items -->
        <div class="flex flex-col gap-6 text-base items-center m-8">
        <!-- browse products -->
          <button brnSheetClose (click)="navigateTo('/categories/all')" class="flex items-center gap-2 px-2.5 py-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            Browse
          </button>
          <!-- orders -->
          <button brnSheetClose (click)="navigateTo('/orders')" class="flex items-center gap-2 px-2.5 py-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
              </svg>
            </span>
            Orders
          </button>
          <!-- Wishlist -->
          <button brnSheetClose (click)="navigateTo('/wishlist')" class="flex items-center gap-2 px-2.5 py-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398" />
              </svg>
            </span>
            Wishlist
          </button>
          <!-- Cart -->
          <button brnSheetClose (click)="navigateTo('/')" class="flex items-center gap-2 px-2.5 py-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </span>
            Cart
          </button>

          <!-- profile -->
          <button brnSheetClose (click)="navigateTo('/profile')" class="flex items-center gap-2 px-2.5 py-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </span>
            Profile
          </button>
        </div>
      </hlm-sheet-content>
    </hlm-sheet>
  `,
})
export class MenuComponent {

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}