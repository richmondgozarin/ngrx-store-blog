import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Blog } from './../models/blog.model';
import * as BlogActions from './../actions/blog.actions';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    addBlog(title, url) {
        if (!title) return;
        if (!url) return;
        this.store.dispatch(new BlogActions.AddBlog({title: title, url: url}));
    }

    ngOnInit() {
    }

}
