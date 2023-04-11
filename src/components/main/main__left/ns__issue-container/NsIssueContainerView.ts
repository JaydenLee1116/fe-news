import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsIssueContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="w-full h-12 flex flex-row justify-between gap-x-2"></section>`;
  }

  render(state: State) {
    return;
  }
}
