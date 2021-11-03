# PingDom
My own lightweight version of pingdom (service monitoring)

# Installation and usage

* Login to [https://ofird11.editorx.io/pingdom](https://ofird11.editorx.io/pingdom)
* Add a new service (service name must be unique and **without spaces/ special characters**)
* copy your API key
* In your project `npm install @ofirdagan/pingdom`
* In your code:
```js
import {monitor} from '@ofirdagan/pingdom';
monitor(serviceName, apiKey);
```
