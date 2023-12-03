import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public menu = [
        {name: 'header.menu.home', link: '/home'},
        {name: 'header.menu.method', link: '/werkwijze'},
        {name: 'header.menu.employers', link: '/opdrachtgevers'},
        {name: 'header.menu.contact', link: '/contact'},
    ]

}
