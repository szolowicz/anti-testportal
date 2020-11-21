declare const Lumm1t: undefined;

export default class Bypass {
  public createBypass(): void {
    // Remove ability to read focus value.
    Object.defineProperty(document, 'hasFocus', {
      get: (): ReferenceError => Lumm1t
    });

    // Lumm1t is not defined, ignore all errors.
    window.onerror = (): boolean => true;
  }
}