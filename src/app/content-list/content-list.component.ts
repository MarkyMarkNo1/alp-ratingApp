import { Component, OnInit, Output } from '@angular/core';
import { Picture } from '../models/picture';
import { PicturesService } from '../pictures.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, mergeMap, switchMap, takeUntil, delay, startWith } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})

export class ContentListComponent implements OnInit {

  pictures$: Observable<Picture[]>;
  private terms$ = new Subject<string>();
  isCreateWindowActive: boolean;

  constructor(private picturesService: PicturesService, private route: Router) { }

  ngOnInit() {

    this.pictures$ = this.picturesService.getPictures();
    this.isCreateWindowActive = this.route.url == '/create' ? true : false;

    this.pictures$ = this.terms$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      startWith(''),
      switchMap(term => this.picturesService.searchPictures(term)));
  }


  toggleCreate() {
    if (this.route.url != '/create') {

      this.route.navigate(['/create']);
      this.isCreateWindowActive = true;

    } else {

      this.route.navigate(['/']);
      this.isCreateWindowActive = false;

    }
  }

}
