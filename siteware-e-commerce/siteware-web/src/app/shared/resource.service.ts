import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Resource } from './resource';
import { Serializeble } from 'src/app/shared/interfaces/serializeble.interface';

export class ResourceService<T extends Resource> {
constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private serializer: Serializeble) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  list(): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`)
      .pipe(map((data: any) => this.convertData(data)));
  }

  delete(id: string) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  private convertData(data): T[] {
    return data.map((item:object) => this.serializer.fromJson(item));
  }
}
