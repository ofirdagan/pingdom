# PingDom
My own lightweight version of pingdom (service monitoring)

# Installation and usage

* Login to [https://ofird11.editorx.io/pingdom](https://ofird11.editorx.io/pingdom)
* Add a new service (service name must be unique and **without spaces/ special characters**)
* In your project `npm install @ofirdagan/pingdom`
* In your code:
```js
import {init} from '@ofirdagan/pingdom';
init(serviceName);
```
