import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Blog } from './../models/blog.model';
import { AppState } from './../app.state';
import * as BlogActions from './../actions/blog.actions';


@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

    blogs$: Observable<Blog[]>;

    constructor(private store: Store<AppState>) {
        this.blogs$ = store.select('blog');
    }

    deleteBlog(index) {
        this.store.dispatch(new BlogActions.RemoveBlog(index));
    }

    ngOnInit() {
    }

}
