import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageReloadService {

  constructor() { }
  private reloadSubject = new Subject<void>();

  reloadPage() {
    this.reloadSubject.next();
  }

  getReloadObservable() {
    return this.reloadSubject.asObservable();
  }
}
