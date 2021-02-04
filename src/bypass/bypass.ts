declare const Lumm1t: ReferenceError;
declare let logToServer;

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
    const antiLog = this.antiLog.toString();

    const antiBlurScript = antiBlur.slice(
      antiBlur.indexOf('{') + 1,
      antiBlur.lastIndexOf('}')
    );

    const antiLogScript = antiLog.slice(
      antiLog.indexOf('{') + 1,
      antiLog.lastIndexOf('}')
    );

    return `${antiBlurScript};${antiLogScript}`;
  }

  private antiBlur(): void {
    // Remove ability to read focus value.
    Object.defineProperty(document, 'hasFocus', {
      get: (): ReferenceError => Lumm1t,
    });

    // Lumm1t is not defined, ignore all errors.
    window.addEventListener('error', (): boolean => true);
  }

  private antiLog(): void {
    logToServer = (): boolean => false;
  }
}
