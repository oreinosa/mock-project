import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Theme } from '../theme';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {
  themes = [];
  active: Theme;
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.themes = this.themeService.getAvailableThemes();
    this.active = this.themeService.getActiveTheme();
  }

  setTheme(theme: Theme) {
    this.themeService.setActiveTheme(theme);
    this.active = this.themeService.getActiveTheme();
  }

}
