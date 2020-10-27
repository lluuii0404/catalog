class Storage {
  set = (key, value) => {
    return window.localStorage.setItem(key, JSON.stringify(value))
  }
  get = (key) => {
    try {
      const serializedState = window.localStorage.getItem(key)
      return serializedState === null ? null : JSON.parse(serializedState)
    } catch (err) {
      return null
    }
  }
  remove = (key) => {
    return window.localStorage.removeItem(key)
  }
}

const storage = new Storage()
export default storage
