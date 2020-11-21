import Bypass from './bypass'

class Main {
  protected readonly bypass = new Bypass()

  constructor () {
    console.clear()
    console.log(
      '%canti-testportal by Lumm1t\n',
      'background: #222; color: #f00; font-size: 20px;',
      'https://github.com/Lumm1t/anti-testportal'
    )

    try {
      this.createScript()
    } catch (err) {
      console.error(err)
      return
    }
  }

  private createScript (): void {
    const script = document.createElement('script') as HTMLScriptElement

    script.setAttribute('type', 'text/javascript')
    script.innerHTML = `(${this.bypass.createBypass})();`

    document.body.appendChild<HTMLScriptElement>(script)
  }
}

export default new Main()
