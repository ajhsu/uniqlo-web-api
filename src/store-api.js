import requestPromise from 'request-promise';
import {
  concat
} from 'lodash';
import {
  range,
  jsonify,
  thenable,
  log
} from './utils';
import apiEndpoints from './api-endpoints';

const createStoreApi = (requestModule = requestPromise) => {
  return {
    getAllStores() {
      const storeTransformer =
        storeApiResponse => storeApiResponse.result.stores;
      const storePropertyFilter =
        store => {
          return {
            store_id: store.store_id,
            store_name: store.store_name,
            address: store.address
          };
        };

      const apiRequests =
        range(1)(22)
          .map(areaCode => apiEndpoints.getAreaStores(areaCode))
          .map(apiUrl => requestModule(apiUrl));

      return Promise.all(apiRequests)
        .then(responses => thenable(responses.map(jsonify)))
        .then(jsons => thenable(jsons.map(storeTransformer)))
        .then(storesInEachArea => thenable(concat(...storesInEachArea)))
        .then(stores => stores.map(storePropertyFilter));
    }
  };
};

export default createStoreApi;