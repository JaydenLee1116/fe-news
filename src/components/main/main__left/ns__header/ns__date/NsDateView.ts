import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsDateView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<p class="w-1/2 h-full text-right text-base/[3rem] font-medium text-gray-500"></p>`;
  }

  render(state: State) {
    const { date } = state;
    if (typeof date === 'string') {
      this.element.textContent = date;
    }
  }
}
