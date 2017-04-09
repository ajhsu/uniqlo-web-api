const apiEndpoints = {
  getAreaStores: areaCode =>
    `http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=${areaCode}`
};

export default apiEndpoints;
