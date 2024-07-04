import { Component } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  mediaType = 'Desktop';

  constructor(private deviceService: DeviceDetectorService) {}

  get isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  get isTablet(): boolean {
    return this.deviceService.isTablet();
  }

  get isDesktop(): boolean {
    return this.deviceService.isDesktop();
  }
}
