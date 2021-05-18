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

  ngOnInit(): void {
    this.safeUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
