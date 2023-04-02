export default class localStorage {
  static get(key: string) {
    const dataStr = window.localStorage.getItem(key)
    if (!dataStr) return {}

    try {
      return JSON.parse(dataStr)
    } catch {
      return {}
    }
  }
  static set(key: string, value: any) {
    try {
      const dataStr = JSON.stringify(value)
      window.localStorage.setItem(key, dataStr)
      return true
    } catch {
      return false
    }
  }
}
