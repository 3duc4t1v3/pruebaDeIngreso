import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
  isOpen: boolean = false;

  closeMenu() {
    this.isOpen = false;
  }

  openMenu() {
    this.isOpen = true;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
