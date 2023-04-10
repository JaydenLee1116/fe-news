import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { MainLeftModel } from '@components/main/main__left/MainLeftModel.js';
import { MainLeftView } from '@components/main/main__left/MainLeftView.js';
import { NsHeaderComponent } from '@components/main/main__left/ns__header/NsHeaderComponent.js';
import { NsNavbarComponent } from '@components/main/main__left/ns__navbar/NsNavbarComponent.js';

export class MainLeftComponent implements Component {
  private _model: MainLeftModel;
  private _view: MainLeftView;
  constructor(props?: Props) {
    this._model = new MainLeftModel();
    this._view = new MainLeftView();

    const nsHeader = new NsHeaderComponent();
    const nsNavbar = new NsNavbarComponent();
    nsHeader.attachTo(this);
    nsNavbar.attachTo(this);
  }

  get element() {
    return this._view.element;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }
}
