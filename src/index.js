import requestPromise from 'request-promise';
import {
  range,
  jsonify,
  thenable,
  log
} from './utils';
import {
  concat
} from 'lodash';

const create = {
  apiUrl: areaCode => `http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=${areaCode}`,
  apiRequest: apiUrl => requestPromise(apiUrl)
};

const storeAreaCodes = range(1)(22);
const apiUrlList = storeAreaCodes.map(areaCode => create.apiUrl(areaCode));
const apiRequests = apiUrlList.map(apiUrl => create.apiRequest(apiUrl));

const storeTransformer = storeApiResponse => storeApiResponse.result.stores;
const storeNameFilter = store => Object.assign(
  {},
  {
    store_id: store.store_id,
    store_name: store.store_name,
    address: store.address
  }
);

Promise.all(apiRequests)
  .then(responses => thenable(responses.map(jsonify)))
  .then(jsons => thenable(jsons.map(storeTransformer)))
  .then(storesInEachArea => thenable(concat(...storesInEachArea)))
  .then(stores => stores.map(storeNameFilter))
  .then(log);