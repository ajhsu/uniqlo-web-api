import test from 'tape';
import createStoreApi from '../src/store-api';
import { createOfflineRequestPromise } from './offline-request-promise';

test('Store API', t => {

  const expected = [
    {
      store_id: 10400056,
      store_name: 'CITYLINK南港店',
      address: '11561 台北市南港區忠孝東路七段369號3FCityLink南港店C1棟3樓'
    },
    {
      store_id: 10400029,
      store_name: 'CITYLINK松山店',
      address: '10566 台北市信義區松山路11號CITY LINK松山車站2F(松山火車站內)'
    },
    {
      store_id: 10400064,
      store_name: '台北京站時尚廣場店',
      address: '10351 台北市大同區承德路一段一號京站時尚廣場B1 Q小路'
    },
    {
      store_id: 10400041,
      store_name: '台北誠品站前店',
      address: '10041 台北市中正區忠孝西路一段49號B1'
    },
    {
      store_id: 10400006,
      store_name: '台北車站館前店',
      address: '10047 台北市中正區館前路12號B1~3F'
    },
    {
      store_id: 10400004,
      store_name: '太平洋SOGO天母店',
      address: '11155 台北市士林區中山北路六段77號太平洋SOGO百貨天母店4F'
    },
    {
      store_id: 10400031,
      store_name: '微風南京店',
      address: '10550 台北市松山區南京東路三段337號微風南京B1'
    },
    {
      store_id: 10400005,
      store_name: '微風廣場店',
      address: '10556 台北市松山區復興南路一段39號微風廣場4F'
    },
    {
      store_id: 10400003,
      store_name: '新光三越南西店',
      address: '10444 台北市中山區南京西路15號新光三越南西三館B1'
    },
    {
      store_id: 10400002,
      store_name: '明曜百貨旗艦店',
      address: '10686 台北市大安區忠孝東路四段200號明曜百貨1-3F'
    },
    {
      store_id: 10400046,
      store_name: '景美瀚星店',
      address: '11669 台北市文山區景興路188號瀚星百貨1F'
    },
    {
      store_id: 10400063,
      store_name: '欣欣百貨店',
      address: '10447 台北市中山區林森北路247號欣欣百貨1F、2F'
    },
    {
      store_id: 10400001,
      store_name: '統一時代百貨台北店',
      address: '11065 台北市信義區忠孝東路五段8號統一時代百貨台北店B1'
    },
    {
      store_id: 10400007,
      store_name: '美麗華店',
      address: '10466 台北市中山區敬業三路20號美麗華百樂園4F'
    },
    {
      store_id: 10400008,
      store_name: '西門店',
      address: '10842 台北市萬華區漢中街52號B2-4F'
    },
    {
      store_id: 10400010,
      store_name: '台中中友百貨店',
      address: '40446 台中市北區三民路三段161號台中中友百貨B1-B2F'
    },
    {
      store_id: 10400016,
      store_name: '台中勤美誠品綠園道店',
      address: '40360 台中市西區公益路68號勤美誠品綠園道B2'
    },
    {
      store_id: 10400023,
      store_name: '台中大魯閣新時代購物中心店',
      address: '40144 台中市東區復興路四段186號大魯閣新時代購物中心店3F'
    },
    {
      store_id: 10400051,
      store_name: '台中崇德路店',
      address: '40673 台中市北屯區崇德路三段406號1F'
    },
    {
      store_id: 10400057,
      store_name: '太平中山路店',
      address: '41171 台中市太平區中山路四段19號'
    },
    {
      store_id: 10400032,
      store_name: '太平洋百貨豐原店',
      address: '42043 台中市豐原區復興路2號太平洋百貨豐原店3F'
    },
    {
      store_id: 10400012,
      store_name: '新光三越台中中港店',
      address: '40756 台中市西屯區台灣大道三段301號新光三越台中中港店11F'
    },
    {
      store_id: 10400052,
      store_name: '沙鹿光華時尚廣場店',
      address: '43341 台中市沙鹿區鹿寮里21鄰光華路308號'
    },
    {
      store_id: 10400027,
      store_name: '基隆信一店',
      address: '20145 基隆市信義區信一路177號B1'
    },
    {
      store_id: 10400054,
      store_name: '南紡購物中心',
      address: '70155 台南市東區中華東路一段366號南紡購物中心3F'
    },
    {
      store_id: 10400038,
      store_name: '台南德安百貨店',
      address: '70167 台南市東區中華東路三段360號台南德安百貨2F'
    },
    {
      store_id: 10400060,
      store_name: '台南文賢路店',
      address: '70451 台南市北區文賢路996號'
    },
    {
      store_id: 10400020,
      store_name: '新光三越台南中山店',
      address: '70043 台南市中西區中山路162號新光三越台南中山店7F'
    },
    {
      store_id: 10400021,
      store_name: '新光三越台南新天地店',
      address: '70051 台南市中西區西門路一段658號新光三越台南新天地店5F'
    },
    {
      store_id: 10400030,
      store_name: '新光三越左營店',
      address: '81361 高雄市左營區高鐵路115號新光三越高雄左營店彩虹市集2F'
    },
    {
      store_id: 10400055,
      store_name: '新光三越高雄三多店',
      address: '80655 高雄市前鎮區三多三路213號新光三越高雄三多店7F'
    },
    {
      store_id: 10400017,
      store_name: '統一時代百貨高雄店',
      address: '80661 高雄市前鎮區中華五路789號統一時代百貨高雄店6F'
    },
    {
      store_id: 10400015,
      store_name: '高雄漢神百貨巨蛋購物廣場店',
      address: '81358  高雄市左營區博愛二路777號高雄漢神巨蛋購物廣場4F'
    },
    {
      store_id: 10400014,
      store_name: '高雄漢神百貨本店',
      address: '80146 高雄市前金區成功一路266‐1號高雄漢神百貨B2'
    },
    {
      store_id: 10400013,
      store_name: 'Global Mall  新北中和店',
      address: '23546 新北市中和區中山路三段122號Global Mall  新北中和店2F'
    },
    {
      store_id: 10400058,
      store_name: 'JC PARK新莊店',
      address: '24248 新北市新莊區幸福路738號1F'
    },
    {
      store_id: 10400062,
      store_name: 'Mitsui林口商場店',
      address: '24448 新北市林口區文化三路一段356號1F'
    },
    {
      store_id: 10400009,
      store_name: '徐匯廣場店',
      address: '24753 新北市蘆洲區中山一路8號徐匯廣場2F'
    },
    {
      store_id: 10400040,
      store_name: '新莊中正路店',
      address: '24243 新北市新莊區中正路52號'
    },
    {
      store_id: 10400045,
      store_name: '板橋大遠百店',
      address: '22041 新北市板橋區新站路28號板橋大遠百3F'
    },
    {
      store_id: 10400018,
      store_name: '淡水大都會廣場店',
      address: '25151 新北市淡水區中山路8號淡水大都會廣場2F'
    },
    {
      store_id: 10400059,
      store_name: '蘆洲長榮路店',
      address: '24765 新北市蘆洲區長榮路253號'
    },
    {
      store_id: 10400044,
      store_name: '雙和比漾廣場店',
      address: '23444 新北市永和區中山路一段238號比漾廣場B1'
    },
    {
      store_id: 10400042,
      store_name: '宜蘭新月廣場店',
      address: '26049 宜蘭縣宜蘭市民權路二段38巷6號宜蘭新月廣場2F'
    },
    {
      store_id: 10400061,
      store_name: '中壢中華路店',
      address: '32068 桃園市中壢區中華路一段699號'
    },
    {
      store_id: 10400047,
      store_name: '中壢大江購物中心店',
      address: '32061 桃園縣中壢市中園路二段501號中壢大江國際購物中心3F'
    },
    {
      store_id: 10400025,
      store_name: '太平洋SOGO中壢店',
      address: '32085 桃園縣中壢市元化路357號太平洋SOGO百貨中壢店6F'
    },
    {
      store_id: 10400022,
      store_name: '桃園台茂購物中心店',
      address: '33859 桃園縣蘆竹區南崁路一段112號桃園台茂購物中心B2'
    },
    {
      store_id: 10400039,
      store_name: '桃園春日路店',
      address: '33051 桃園縣桃園市春日路1501號'
    },
    {
      store_id: 10400050,
      store_name: '楊梅中山北路店',
      address: '32653 桃園縣楊梅市中山北路二段345號1F'
    },
    {
      store_id: 10400026,
      store_name: '遠東百貨桃園店',
      address: '33041 桃園市桃園區中正路20號遠東百貨桃園店B1'
    },
    {
      store_id: 10400024,
      store_name: '嘉義耐斯廣場時尚百貨',
      address: '60080 嘉義市東區忠孝路600號嘉義耐斯廣場時尚百貨2F'
    },
    {
      store_id: 10400033,
      store_name: '家樂福苗栗店',
      address: '36055 苗栗縣苗栗市國華路599號家樂福苗栗店1F'
    },
    {
      store_id: 10400049,
      store_name: '苗栗尚順購物中心店',
      address: '35157 苗栗縣頭份鎮東庄里中央路105號尚順購物中心2F'
    },
    {
      store_id: 10400034,
      store_name: '家樂福南投店',
      address: '54057 南投縣南投市三和三路21號家樂福南投店1F'
    },
    {
      store_id: 10400048,
      store_name: '員林大潤發店',
      address: '51345 彰化縣埔心鄬瓦南村中山路319號大潤發1F'
    },
    {
      store_id: 10400053,
      store_name: '彰化中央路店',
      address: '50056 彰化縣彰化市中央路222號1F'
    },
    {
      store_id: 10400043,
      store_name: '太平洋SOGO新竹店',
      address: '30043 新竹市東區民族路2號太平洋SOGO新竹店2F'
    },
    {
      store_id: 10400011,
      store_name: '新竹遠東巨城購物中心店',
      address: '30041 新竹市東區中央路229號新竹遠東巨城購物中心B1F'
    },
    {
      store_id: 10400035,
      store_name: '家樂福斗六店',
      address: '雲林縣斗六市雲林路二段297號家樂福斗六店1F'
    },
    {
      store_id: 10400028,
      store_name: 'Global Mall  屏東市店',
      address: '90041 屏東縣屏東市仁愛路90號Global Mall  屏東市店3F'
    },
    {
      store_id: 10400036,
      store_name: '遠東百貨花蓮店',
      address: '97051 花蓮縣花蓮市和平路581號遠東百貨花蓮店B1'
    },
    {
      store_id: 10400037,
      store_name: '台東秀泰廣場店',
      address: '95044 台東縣台東市新生路93號台東秀泰廣場1F'
    }
  ];
  
  t.plan(1);

  const offlineRequestPromise = createOfflineRequestPromise({ dirname: './api-response-snapshots' });
  createStoreApi(offlineRequestPromise).getAllStores()
    .then(result => {
      t.deepEqual(
        result,
        expected,
        'storeApi.getAllStores() return expected values.'
      );
    });
});