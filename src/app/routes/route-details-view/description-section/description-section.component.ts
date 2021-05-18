import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent implements OnInit {

  constructor() { }

  @Input() text: string | undefined

  ngOnInit(): void {
  }

}
