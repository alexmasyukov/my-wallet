export function random(max: number = 10): number {
  return Math.floor(Math.random() * max)
}

export function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName] // o[propertyName] is of type T[K]
}
