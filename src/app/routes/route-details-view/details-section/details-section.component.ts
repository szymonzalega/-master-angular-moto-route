import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent implements OnInit {

  constructor() { }

  name = "Nazwa"
  value = 12

  ngOnInit(): void {
  }

}
