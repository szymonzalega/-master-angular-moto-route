import { Component, Input, OnInit } from '@angular/core';
import {Level, RouteType} from "../../route"

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent implements OnInit {

  constructor() { }

  @Input() level!: Level
  @Input() length!: number
  @Input() type!: RouteType

  ngOnInit(): void {
  }

}
