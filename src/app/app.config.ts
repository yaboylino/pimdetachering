import {ApplicationConfig, importProvidersFrom, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';
import localeNl from '@angular/common/locales/nl';
import localeNlExtra from '@angular/common/locales/extra/nl';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {WebpackTranslateLoader} from "../translate-loader";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeNl, 'nl-NL', localeNlExtra);
export function createWebpackTranslateLoader(): TranslateLoader {
    return new WebpackTranslateLoader();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(),
        {
            provide: LOCALE_ID,
            useValue: 'nl-NL'
        },
        importProvidersFrom(
            TranslateModule.forRoot({
                defaultLanguage: 'nl',
                loader: {
                    provide: TranslateLoader,
                    useFactory: createWebpackTranslateLoader,
                    deps: [HttpClient],
                },
            })
        ),
    ]
};
