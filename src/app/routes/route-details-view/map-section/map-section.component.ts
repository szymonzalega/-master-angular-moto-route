import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit {


  constructor(private sanitizer: DomSanitizer) {

  }

  @Input()
  url!: string;
  safeUrl!: SafeResourceUrl;

  createSafeUrl(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnChanges() {
    this.createSafeUrl(this.url)

  }

  ngOnInit(): void {
    this.createSafeUrl(this.url)
  }

}
