import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Picture, Comment } from './models/picture';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pictures = [
      {
        id: 11,
        title: 'Picture 11 title goes here',
        imageUrl: '/picture-11.jpg',
        description: 'Picture 11 description goes here',
        rate: 3,
        authorName: 'Picture 11 author name goes here',
        comments: [{
          id: 1,
          fromName: 'bob',
          comment: 'a comment'
        }]
      },
      {
        id: 12,
        title: 'Picture 12 title goes here',
        imageUrl: '/picture-12.jpg',
        description: 'Picture 12 description goes here',
        rate: 4,
        authorName: 'Picture 12 author name goes here',
        comments: []
      },
      {
        id: 11,
        title: 'Picture 13 title goes here',
        imageUrl: '/picture-13.jpg',
        description: 'Picture 13 description goes here',
        rate: 1,
        authorName: 'Picture 13 author name goes here',
        comments: []
      },
      {
        id: 11,
        title: 'Picture 14 title goes here',
        imageUrl: '/picture-14.jpg',
        description: 'Picture 14 description goes here',
        rate: 5,
        authorName: 'Picture 14 author name goes here',
        comments: []
      },
      {
        id: 11,
        title: 'Picture 15 title goes here',
        imageUrl: '/picture-15.jpg',
        description: 'Picture 15 description goes here',
        rate: 2,
        authorName: 'Picture 15 author name goes here',
        comments: []
      },
    ];
    return {pictures};
  }

  // Overrides the genId method to ensure that a picture always has an id.
  // If the pictures array is empty,
  // the method below returns the initial number (11).
  // if the pictures array is not empty, the method below returns the highest
  // picture id + 1.
  genId(pictures: Picture[]): number {
    return pictures.length > 0 ? Math.max(...pictures.map(picture => picture.id)) + 1 : 11;
  }
}
