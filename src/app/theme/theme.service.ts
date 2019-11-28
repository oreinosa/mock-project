import { Injectable } from "@angular/core";
import { Theme, light, dark } from "./theme";
import { OverlayContainer } from '@angular/cdk/overlay';
// import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];
  constructor(private overlayContainer: OverlayContainer) {
    this.setActiveTheme(this.active);
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setActiveTheme(theme: Theme): void {
    document.querySelector("#container").className = theme.name;
    
    let classList = this.overlayContainer.getContainerElement().classList;
    if (classList.contains(this.active.name)) {
      classList.replace(this.active.name, theme.name);
    } else {
      classList.add(theme.name);
    }

    this.active = theme;
    // Object.keys(this.active.properties).forEach(property => {
    //   document.documentElement.style.setProperty(
    //     property,
    //     this.active.properties[property]
    //   );
    // });
  }
}