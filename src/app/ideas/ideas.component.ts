import { Component, OnInit} from '@angular/core';
import {IdeasService} from '../ideas.service/ideas.service';
import {Idea} from '../Idea';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  providers: [IdeasService]
})

export class IdeasComponent implements OnInit { 
 
ideas: Idea[];

  constructor (private _ideasService:IdeasService) {

  }

ngOnInit(){
  this._ideasService.getIdeas().subscribe(ideas => {
     this.ideas=ideas;
  })

}


}
