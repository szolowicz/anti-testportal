declare const Lumm1t: ReferenceError;

export default class Bypass {
  constructor() {
    try {
      this.getFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  public getFunctions(): string {
    const antiBlur = this.antiBlur.toString();

    return antiBlur.slice(antiBlur.indexOf('{') + 1, antiBlur.lastIndexOf('}'));
  }

  private antiBlur(): void {
    // Remove ability to read focus value.
    Object.defineProperty(document, 'hasFocus', {
      get: (): ReferenceError => Lumm1t,
    });

    // Lumm1t is not defined, ignore all errors.
    window.addEventListener('error', (): boolean => true);
  }
}
