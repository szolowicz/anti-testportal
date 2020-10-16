import bypass from './bypass';

console.clear();
console.log(
  '%canti-testportal by Lumm1t\n',
  'background: #222; color: #f00; font-size: 20px;',
  'https://github.com/Lumm1t/anti-testportal'
);

const script = document.createElement('script') as HTMLScriptElement;
script.setAttribute('type', 'text/javascript');
script.innerHTML = `(${bypass})();`; // TODO: Change IIFE to something more intelligent (lol)
document.body.appendChild(script) as HTMLScriptElement;
