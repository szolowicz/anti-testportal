class Popup {
  constructor() {
    this.checkVersion();
  }

  private checkVersion(): void {
    const update = document.querySelector('#update');

    if (update === null) return;

    const manifestVersion = chrome.runtime.getManifest().version;
    const url =
      'https://raw.githubusercontent.com/Lumm1t/anti-testportal/master/public/manifest.json';

    /* eslint-disable @typescript-eslint/no-floating-promises */
    fetch(url)
      .then(async (response) => response.json())
      .then((data) => {
        const version: string = data.version;

        update.textContent =
          manifestVersion === version
            ? `up to date (${manifestVersion})`
            : `update available (${version})`;
      });
  }
}

export default new Popup();
