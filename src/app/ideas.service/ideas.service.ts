import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Idea } from '../Idea';

@Injectable()

export class IdeasService {
  ideas: FirebaseListObservable<Idea[]>;
  
  constructor(private _af: AngularFire) {
  }

  getIdeas() {
    this.ideas = this._af.database.list('/ideas') as FirebaseListObservable<Idea[]>;
    return this.ideas;
  }

  addIdea(newIdea) {
    this.ideas = this._af.database.list('/ideas') as FirebaseListObservable<Idea[]>;
    this.ideas.push(newIdea);
  }

}


