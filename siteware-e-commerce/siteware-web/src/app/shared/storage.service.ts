import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _storage:LocalStorage) {

  }

  save(key:string, value:object){
    return this._storage.setItem(key, value);
  }

  find(key:string){
    return this._storage.getItem(key);
  }

  remove(key:string){
    return this._storage.removeItem(key);
  }
}
