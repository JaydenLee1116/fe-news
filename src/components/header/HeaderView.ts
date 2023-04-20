import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class HeaderView extends AbstractView {
  constructor() {
    super();
  }

  template(state: State) {
    return `<header class="h-1/6 bg-green-100 border border-green-500 text-3xl text-gray-500 grid place-content-center">Header</header>`;
  }
}
