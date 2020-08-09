const antiTestportalScript = document.createElement('script');
const securityBypass = document.createTextNode(`
  // Don't display warning about leaving the page.
  window['honestRespondentBlockade_popup'] = () => {};
  window.honestRespondentBlockade_popup.open = () => {};
  window['honestRespondentWarning_popup'] = () => {};
  window.honestRespondentWarning_popup.open = () => {};

  // Don't send number of page changes to test creator.
  updateCt = () => {};

  // If we changed page, remove blurs count.
  window.onblur = function() {
    eraseCookie('blurs');
  }

  // If time has elapsed, don't do anything.
  onCountdownFinished = () => {};
`);

antiTestportalScript.appendChild(securityBypass);
document.body.appendChild(antiTestportalScript);
