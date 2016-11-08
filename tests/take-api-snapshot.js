const fs = require('fs');
const path = require('path');
const wget = require('wgetjs');
const config = {
  snapshotFolder: 'api-response-snapshots'
};

const apiSnapshotList = [
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=1',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=2',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=3',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=4',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=5',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=6',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=7',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=8',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=9',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=10',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=11',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=12',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=13',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=14',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=15',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=16',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=17',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=18',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=19',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=20',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=21',
  'http://store.fastretailing.com/api/tw/uniqlo/200/getStoreList.json?limit=100&r=storelocator&area1_code=22'
];

// Create folder if not exists
const dest = path.resolve(
  __dirname,
  config.snapshotFolder
);
if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest);
}

// Do API snapshot
apiSnapshotList.map(url => {
  wget({
    url,
    dest: path.resolve(
      __dirname,
      config.snapshotFolder,
      encodeURIComponent(url) + '.json'
    )
  });
});