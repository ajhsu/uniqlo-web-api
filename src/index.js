import createStoreApi from './store-api';

createStoreApi().getAllStores()
  .then(stores => {
    console.log(stores);
  });