import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsIssueView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 bg-slate-50 border border-gray-100 flex flex-row justify-start items-center">
                                         <div class="mx-2 w-14 text-sm font-bold">연합뉴스</div>
                                         <div id="article__title-container" class="w-fit truncate">
                                           <p id="article__title" class="mx-2 w-auto text-sm font-medium text-gray-500 truncate"></p>
                                         </div>
                                       </div>`;
  }

  render(state: State) {
    const { articleTitles } = state;
    let issueIndex = 0;
    setInterval(() => {
      if (issueIndex === (articleTitles as string[]).length) {
        issueIndex = 0;
      }
      ($('#article__title', this.element) as HTMLParagraphElement).innerText = (
        articleTitles as string[]
      )[issueIndex];
      issueIndex++;
    }, 1500);
  }
}
