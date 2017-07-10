import { Video } from './video';

export interface VideosResponse {
    docs: Video[];
    total: Number;
    limit: Number;
    page:String;
    pages:Number;
}
