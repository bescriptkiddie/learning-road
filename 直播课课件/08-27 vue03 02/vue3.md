- reactive(target)
- => 
- createReactiveObject(target)
- =>

```js
const observed = new Proxy(
    target,
    collectionTypes.has(target.constructor) ? collectionHandlers : baseHandlers
)
```



```js
baseHandlers => {

​	createGetter() {

​			return get() {
  			// dep.depend()
				track();			
​     }

​	}
  
  createSetter() {
    return set() {
      // dep.notify()
      trigger();
    }
  }

}

// Vue2 通过 $watch() => get()
// Vue3 通过 effect() => get()

```

