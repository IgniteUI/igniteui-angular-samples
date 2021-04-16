/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const BIN_DATA = [
    { Name: 'Track 6', Icon: 'music' },
    { Name: 'Track 7', Icon: 'music' },
    { Name: 'Image 106', Icon: 'picture' },
    { Name: 'Image 107', Icon: 'picture' }
];

@Injectable()
export class DataService {
    public getData() {
        return of(BIN_DATA).pipe(delay(2000));
    }
}
