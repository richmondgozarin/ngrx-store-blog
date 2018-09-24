import { Blog } from './models/blog.model';

export interface AppState {
    readonly blog: Blog[];
}
