[polyu-its-helper-bookmarklet](https://dirkarnez.github.io/polyu-its-helper-bookmarklet/dist)
==============================================================================================================
```js
Array.length > 1 ? n + (n - 1), odd number index


const serial = funcs =>
    funcs.reduce((promise, func) =>
        promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]))

serial([
    () => new Promise(res => {
        setTimeout(() => {
            console.log("1");
            res(1);
        }, 2000);
    }),
    () => new Promise(res => {
        setTimeout(() => {
            console.log("2");
            res(2);
        }, 2000);
    }),
]).then(a => {
    // a = [1, 2];
    debugger;
});
```
```js
(async () => {
  console.log(await Promise.resolve(3));
  console.log(await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]));
})();
```
### Notes
- Generate bookmark on web ui
