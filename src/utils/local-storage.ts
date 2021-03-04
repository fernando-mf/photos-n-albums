import { isClient } from '@/utils/client'

function set(key: string, val: any) {
  if (isClient()) {
    localStorage.setItem(key, JSON.stringify(val))
  }
}

function get<T = any>(key: string): T | null {
  if (isClient()) {
    return JSON.parse(localStorage.getItem(key) ?? 'null') as T | null
  }

  return null
}

function remove(key: string) {
  if (isClient()) {
    localStorage.removeItem(key)
  }
}

export default {
  get,
  set,
  remove,
}
