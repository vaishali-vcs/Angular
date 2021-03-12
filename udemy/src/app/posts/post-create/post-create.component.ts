import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent
{
    constructor(private pservice: PostsService){}
    onAddPost(form: NgForm): void
    {
      if (form.invalid){ return; }
      this.pservice.addPost(form.value.title, form.value.content);
     }


}
