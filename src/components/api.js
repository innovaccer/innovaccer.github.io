/* eslint-disable no-underscore-dangle */

import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';

// `async` wrapper to configure `localforage` and instantiate
// `axios` with `axios-cache-adapter`
async function configure() {
  // Register the custom `memoryDriver` to `localforage`
  await localforage.defineDriver(memoryDriver);

  // Create `localforage` instance
  const forageStore = localforage.createInstance({
    // List of drivers used
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      memoryDriver._driver,
    ],
    // Prefix all storage keys to prevent conflicts
    name: 'my-cache',
  });

  // Create `axios` instance with pre-configured `axios-cache-adapter`
  // using a `localforage` store
  return setup({
    baseURL: 'https://api.github.com/',
    cache: {
      maxAge: 24 * 60 * 60 * 1000, // its not a day long, but it is 24hrs
      store: forageStore,
      exclude: { query: false },
      key: req => req.url + JSON.stringify(req.params),
    },
  });
}

export default configure;
// use it as follow
// factory()
//   .then(api => {
//     return api.get('orgs/innovaccer/repos');
//   })
