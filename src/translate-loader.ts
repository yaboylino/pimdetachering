import {TranslateLoader} from '@ngx-translate/core';
import {forkJoin, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class WebpackTranslateLoader implements TranslateLoader {

    public getTranslation(lang: string): Observable<{[key: string]: string}> {
        return forkJoin([
            from(import(`./i18n/${lang}.json`))
        ]).pipe(
            map((translationTrees) => {
                let translations = {};
                for (const translationTree of translationTrees) {
                    translations = Object.assign(translations, translationTree);
                }

                return translations;
            })
        );
    }
}
