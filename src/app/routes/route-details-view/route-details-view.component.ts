import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-details-view',
  templateUrl: './route-details-view.component.html',
  styleUrls: ['./route-details-view.component.scss']
})
export class RouteDetailsViewComponent implements OnInit {

  constructor() { }

  description = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
  url = "https://www.google.com/maps/embed?pb=!1m30!1m12!1m3!1d210988.48023073442!2d-118.56168533090532!3d34.28182889483642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m15!3e0!4m3!3m2!1d34.499136299999996!2d-118.46119909999999!4m5!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20Kalifornia%2C%20Stany%20Zjednoczone!3m2!1d34.0522342!2d-118.24368489999999!4m3!3m2!1d34.1929903!2d-118.6030926!5e0!3m2!1spl!2spl!4v1612904305921!5m2!1spl!2spl"
  // url = "https://www.google.com"

  ngOnInit(): void {
  }

}
