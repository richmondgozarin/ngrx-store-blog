import { Action } from '@ngrx/store';
import { Blog } from './../models/blog.model';

export const ADD_BLOG = '[BLOG] Add';
export const REMOVE_BLOG = '[BLOG] Remove';

export class AddBlog implements Action {
    readonly type = ADD_BLOG;

    constructor(public payload: Blog) {}
}

export class RemoveBlog implements Action {
    readonly type = REMOVE_BLOG;

    constructor(public payload: number) {}
}

export type Actions = AddBlog | RemoveBlog