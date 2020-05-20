const antiTestportalScript = document.createElement('script');
const securityBypass = document.createTextNode(`
    onCountdownFinished = () => {};
    document.hasFocus = () => true;
`);

antiTestportalScript.appendChild(securityBypass);
(document.head || document.documentElement).appendChild(antiTestportalScript);
