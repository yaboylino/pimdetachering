import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public email: string = 'info@pimdetachering.nl'

    public menu = [
        {name: 'header.menu.home', link: '/home'},
        {name: 'header.menu.method', link: '/werkwijze'},
        {name: 'header.menu.employers', link: '/opdrachtgevers'},
        {name: 'header.menu.contact', link: '/contact'},
    ]

}
