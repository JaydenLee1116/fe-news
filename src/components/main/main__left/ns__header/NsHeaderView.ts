import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsHeaderView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `<section class="px-2 w-full h-12 flex flex-row justify-between"></section>`;
  }
}
