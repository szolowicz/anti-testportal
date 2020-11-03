declare let Lumm1t: undefined, startTime: number;

export default () => {
  // Remove ability to read focus value.
  Object.defineProperty(document, 'hasFocus', {
    get: (): ReferenceError => Lumm1t
  });

  // Lumm1t is not defined, ignore all errors.
  window.onerror = (): boolean => true;

  // Set (almost) unlimited time for each question.
  startTime = Date.parse('January 1, 2070 00:00:00 UTC') as number;
};
