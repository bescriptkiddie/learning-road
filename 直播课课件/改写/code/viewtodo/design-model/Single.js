class Singles {
  constructor(name) {
    this.name = name
  }
}

let instance
export default function (...arg) {
  console.log(...arg)
  if (instance) {
    return instance
  }
  instance = new Singles(...arg)
  return instance
}
