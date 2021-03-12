import {Component, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent implements OnInit, OnDestroy{
posts: Post[] = [];
private postSub: Subscription;

constructor(public pservice: PostsService){ this.postSub = new Subscription(); }

ngOnInit(): void
{
  this.posts = this.pservice.getPosts();
  this.postSub = this.pservice.getPostUpdateListener().subscribe((posts: Post[]) => {
    this.posts = posts;
  });
}

ngOnDestroy(): void {
  this.postSub.unsubscribe();
}
}
