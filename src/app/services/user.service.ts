import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userName: string = '';

  constructor() {}

  public get userName(): string {
    return this._userName;
  }

  public set userName(name: string) {
    this._userName = name;
  }
}
