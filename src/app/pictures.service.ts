import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { MessageService } from './message.service';
import { Picture } from './models/picture';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PicturesService {

  private picturesUrl = 'api/pictures';  // URL to web api

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  /** GET pictures from the server */
  getPictures (): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.picturesUrl)
      .pipe(
        tap(_ => this.log('fetched pictures')),
        catchError(this.handleError<Picture[]>('getPictures', []))
      );
  }

  /** GET picture by id. Return `undefined` when id not found */
  getPictureNo404<Data>(id: number): Observable<Picture> {
    const url = `${this.picturesUrl}/?id=${id}`;
    return this.http.get<Picture[]>(url)
      .pipe(
        map(pictures => pictures[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} picture id=${id}`);
        }),
        catchError(this.handleError<Picture>(`getPicture id=${id}`))
      );
  }

  /** GET picture by id. Will 404 if id not found */
  getPicture(id: number): Observable<Picture> {
    const url = `${this.picturesUrl}/${id}`;
    return this.http.get<Picture>(url).pipe(
      tap(_ => this.log(`fetched picture id=${id}`)),
      catchError(this.handleError<Picture>(`getPicture id=${id}`))
    );
  }

  /* GET pictures whose name contains search term */
  searchPictures(term: string): Observable<Picture[]> {
    if (!term.trim()) {
      // if not search term, return empty picture array.
      return of([]);
    }
    return this.http.get<Picture[]>(`${this.picturesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found pictures matching "${term}"`)),
      catchError(this.handleError<Picture[]>('searchPictures', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new picture to the server */
  addPicture (picture: Picture): Observable<Picture> {
    return this.http.post<Picture>(this.picturesUrl, picture, httpOptions).pipe(
      tap((newPicture: Picture) => this.log(`added picture w/ id=${newPicture.id}`)),
      catchError(this.handleError<Picture>('addPicture'))
    );
  }

  /** DELETE: delete the picture from the server */
  deletePicture (picture: Picture | number): Observable<Picture> {
    const id = typeof picture === 'number' ? picture : picture.id;
    const url = `${this.picturesUrl}/${id}`;

    return this.http.delete<Picture>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted picture id=${id}`)),
      catchError(this.handleError<Picture>('deletePicture'))
    );
  }

  /** PUT: update the picture on the server */
  updatePicture (picture: Picture): Observable<any> {
    return this.http.put(this.picturesUrl, picture, httpOptions).pipe(
      tap(_ => this.log(`updated picture id=${picture.id}`)),
      catchError(this.handleError<any>('updatePicture'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PictureService message with the MessageService */
  private log(message: string) {
    console.log(message);
    // this.messageService.add(`PictureService: ${message}`);
  }
}
