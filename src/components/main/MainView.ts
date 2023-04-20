import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class MainView extends AbstractView {
  constructor() {
    super();
  }

  template(state: State) {
    return `<main class="h-4/6 flex flex-row justify-end flex-initial"></main>`;
  }
}
