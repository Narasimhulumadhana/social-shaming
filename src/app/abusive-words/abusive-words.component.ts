import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-abusive-words',
  templateUrl: './abusive-words.component.html',
  styleUrls: ['./abusive-words.component.scss']
})
export class AbusiveWordsComponent implements OnInit {

  word:any;
  words:any[]=[];
  constructor(private postsService:PostsService) { }

  ngOnInit() {
   this.getWords();
  }

  addWord() {
    if (this.word != '') {
    this.postsService.addWord(this.word).subscribe((data) => {
      if (data) {
        this.getWords();
        this.word = '';
      }
    });
  }
  }

  private getWords() {
    this.postsService.getAbusiveWord().subscribe((data:any[])=>{
      this.words=data;
    })
  }
}
