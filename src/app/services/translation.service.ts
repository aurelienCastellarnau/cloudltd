import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
    private language = new Subject<any>();

    sendLanguage(language: string) {
        this.language.next({ text: language });
    }

    clearQueue() {
        this.language.next();
    }

    getLanguage(): Observable<any> {
        return this.language.asObservable();
    }
}
