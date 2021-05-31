import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  constructor(private router: Router) { }

  addNewRoute() {
    this.router.navigate(['/add'])
  }

  ngOnInit(): void {
  }

}
