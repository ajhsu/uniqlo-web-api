import requestPromise from 'request-promise';
import { concat } from 'lodash';
import { range, jsonify, thenable, log } from './utils';
import apiEndpoints from './api-endpoints';

const createStoreApi = (requestModule = requestPromise) => {
  return {
    getAllStores() {
      const storeTransformer = storeApiResponse =>
        storeApiResponse.result.stores;
      const storePropertyTransformer = store => {
        return {
          storeId: store.store_id,
          storeName: store.store_name,
          address: store.address
        };
      };

      const apiRequests = range(1)(22)
        .map(areaCode => apiEndpoints.getAreaStores(areaCode))
        .map(apiUrl => requestModule(apiUrl));

      return Promise.all(apiRequests)
        .then(responses => thenable(responses.map(jsonify)))
        .then(jsons => thenable(jsons.map(storeTransformer)))
        .then(storesInEachArea => thenable(concat(...storesInEachArea)))
        .then(stores => stores.map(storePropertyTransformer));
    }
  };
};

export default createStoreApi;
