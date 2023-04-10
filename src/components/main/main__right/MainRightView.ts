import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class MainRightView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="h-full w-1/3 bg-yellow-100 border border-yellow-500 flex-initial text-3xl text-gray-500 text-center"></section>`;
  }

  render(state: State) {
    const { title } = state;
    if (typeof title === 'string') {
      this.element.textContent = title;
    }
  }
}
