import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptionsArgs, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class RouterOptionsService extends BaseRequestOptions {
  
    merge(options: RequestOptionsArgs): RequestOptions {
        options.headers = new Headers(options.headers? options.headers: {});
        options.headers.set('X-Requested-With', 'XMLHttpRequest');
        return super.merge(options);
     }
  
} 

