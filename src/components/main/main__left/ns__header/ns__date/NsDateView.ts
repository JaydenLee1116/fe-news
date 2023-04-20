import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';
import { getKrDate } from '@utils/date.js';

export class NsDateView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `<p class="w-1/2 h-full text-right text-base/[3rem] font-medium text-gray-500">${getKrDate(
      'ko-KR',
      new Date(),
    )}</p>`;
  }
}
