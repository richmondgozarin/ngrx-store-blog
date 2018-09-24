import { Action } from '@ngrx/store'
import { Blog } from './../models/blog.model';
import * as BlogActions from './../actions/blog.actions';

const initialState: Blog = {
    title: 'Init Title',
    url: 'https://google.com'
}

export function reducer(state: Blog[] = [initialState], action: BlogActions.Actions) {
    switch(action.type) {
        case BlogActions.ADD_BLOG:
            return [...state, action.payload];
        
        case BlogActions.REMOVE_BLOG:
            state.splice(action.payload, 1);
            return state;
            
        default:
            return state;
    }
}