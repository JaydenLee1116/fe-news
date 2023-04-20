import { Article, State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';
import {
  PRESS_CONTAINER_PAGE_END,
  PRESS_CONTAINER_ITEM_COUNT,
  PRESS_CONTAINER_PAGE_START,
} from '@src/constants/constants.js';

export class NsPressContainerView extends AbstractView {
  constructor() {
    super();
  }

  template() {
    return `<section id="press-container" class="p-3 h-full flex flex-row justify-between items-center relative">
              <button id="btn-prev" class="absolute left-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                <img src="/public/images/symbols/chevron-left.svg" alt="chevron-left" class="h-6 w-6"/>
              </button>
              <ul id="ns__grid-container" class="grid grid-cols-6 grid-rows-4 w-full h-full gap-px bg-gray-200 border border-gray-200">
              </ul>                                      
              <button id="btn-next" class="absolute right-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                <img src="/public/images/symbols/chevron-right.svg" alt="chevron-right" class="h-6 w-6"/>
              </button>
            </section>`;
  }

  render(state: State) {
    this.addGridItems(state);
    this.addGridButtonEvent(state);
    this.toggleGridButton(state);
  }

  addGridItems(state: State) {
    const { articles, page } = state;
    const imgSources = (articles as Article[]).map(
      (article) => article.mediaInfo.imgSrc,
    );
    ($('#ns__grid-container', this.element) as HTMLUListElement).innerHTML =
      imgSources
        .slice(
          +page * PRESS_CONTAINER_ITEM_COUNT,
          (+page + 1) * PRESS_CONTAINER_ITEM_COUNT,
        )
        .reduce((acc, cur) => {
          return (
            acc +
            `<li class="grid place-content-center bg-white hover:bg-gray-100">
               <img class="h-5" src="${cur}" alt="${cur}">
               <button id="subscribe-btn" class="px-2 py-px border border-gray-200 bg-gray-100 text-xs text-gray-400 rounded-3xl hidden">+ 구독하기</button>
             </li>`
          );
        }, '');
  }

  addGridButtonEvent(state: State) {
    const { handleToPrev, handleToNext } = state;
    this.setEvent('#btn-prev', 'click', handleToPrev as EventListener);
    this.setEvent('#btn-next', 'click', handleToNext as EventListener);
  }

  toggleGridButton(state: State) {
    // 추후 코드 리팩토링
    const { page } = state;
    ($('#btn-prev', this.element) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    ($('#btn-next', this.element) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    if (page === PRESS_CONTAINER_PAGE_START) {
      ($('#btn-prev', this.element) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
    if (page === PRESS_CONTAINER_PAGE_END - 1) {
      ($('#btn-next', this.element) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
  }
}
