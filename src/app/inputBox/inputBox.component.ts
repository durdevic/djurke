import { Component } from '@angular/core';
import { IdeasService } from '../ideas.service/ideas.service';
import {Idea} from '../Idea';

@Component({
  selector: 'input-box',
  templateUrl: 'inputBox.component.html',
  providers: [IdeasService]
})

export class InputBoxComponent {

  ideas: Idea[];

  constructor(private _ideasService:IdeasService) {
    
  }

  addIdea(i: string) {

    var created_at = new Date().toString();

    var newIdea = {
      i: i,
      created_at: created_at
    }

    console.log(newIdea);
    this._ideasService.addIdea(newIdea);
  }

}


