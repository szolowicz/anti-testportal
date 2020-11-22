import Bypass from './bypass';
import {
  getQuestionElement,
  getQuestionGoogleQueryURL,
  modifyQuestionToHref,
} from './contentModifiers';

class Main {
  protected readonly bypass = new Bypass();

  constructor() {
    console.clear();
    console.log(
      '%canti-testportal by Lumm1t\n',
      'background: #222; color: #f00; font-size: 20px;',
      'https://github.com/Lumm1t/anti-testportal'
    );

    try {
      this.createScript();
    } catch (err) {
      console.error(err);
      return;
    }
  }

  private createScript(): void {
    const script = document.createElement('script');

    script.setAttribute('type', 'text/javascript');
    script.innerHTML = this.bypass.getFunctions();

    document.body.appendChild<HTMLScriptElement>(script);

    const question = getQuestionElement();
    const googleQuery = getQuestionGoogleQueryURL(question.innerHTML);
    modifyQuestionToHref(question, googleQuery);
  }
}

export default new Main();
