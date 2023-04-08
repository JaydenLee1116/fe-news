import { State } from '@utils/types';
import { Model } from '@utils/interfaces';

export class FooterModel implements Model {
  private _state: State;
  constructor() {
    this._state = {};
  }

  setState(newState: State) {
    this._state = { ...this._state, ...newState };
  }

  get state() {
    return this._state;
  }
}
