import {mergeApplicationConfig, ApplicationConfig, LOCALE_ID, importProvidersFrom} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import localeNl from '@angular/common/locales/nl';
import localeNlExtra from '@angular/common/locales/extra/nl';
import {registerLocaleData} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {WebpackTranslateLoader} from "../translate-loader";
import {HttpClient} from "@angular/common/http";

registerLocaleData(localeNl, 'nl-NL', localeNlExtra);
export function createWebpackTranslateLoader(): TranslateLoader {
    return new WebpackTranslateLoader();
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
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

export const config = mergeApplicationConfig(appConfig, serverConfig);
