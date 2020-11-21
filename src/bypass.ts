declare const Lumm1t: undefined;

export default class Bypass {
  constructor () {
    try {
      this.getFunctions();
    } catch (err) {
      console.error(err);
      return;
    }
  }

  public getFunctions (): string {
    const antiBlur = this.antiBlur.toString();
    const bypassFunction = antiBlur.slice(antiBlur.indexOf('{') + 1, antiBlur.lastIndexOf('}'));

    return bypassFunction;
  }

  private antiBlur (): void {
    // Remove ability to read focus value.
    Object.defineProperty(document, 'hasFocus', {
      get: (): ReferenceError => Lumm1t
    });

    // Lumm1t is not defined, ignore all errors.
    window.onerror = (): boolean => true;
  }
}
