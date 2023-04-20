import { AbstractView } from '@custom-types/abstracts.js';

export class MainLeftView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `<section class="h-full w-2/3 flex flex-col flex-initial"></section>`;
  }
}
