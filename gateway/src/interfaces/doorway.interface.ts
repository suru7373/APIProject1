import { Observable } from 'rxjs';

export interface DoorwayService {
  getMessage(data: {}): Observable<any>;
}