import { Component, Input, OnInit } from '@angular/core';
import Route from '../../route';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  constructor() { }

  @Input() route: Route | any

  ngOnInit(): void {
  }

}
