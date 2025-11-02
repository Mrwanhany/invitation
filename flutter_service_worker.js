'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "13fabaa3ea2de8dcfc6bd8af839fb8e1",
"version.json": "a47ea0cacdb973e44f3e58070eef62c5",
"index.html": "7ca3f733a6ef2e32bf1716db41f2521e",
"/": "7ca3f733a6ef2e32bf1716db41f2521e",
"main.dart.js": "a3ad14860fbd7a185472c8c392e60b4f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/couple.png": "83049c744546cb041854f8badec726f9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "941376023cffe354e1aea289babfa5c8",
".git/ORIG_HEAD": "7f19459786a590392f40408402abc354",
".git/config": "808971d6a6207ca0c7b8cc4a35cea949",
".git/objects/61/979a3dfac5923bb83cc577c874a4f5be31c286": "2789db9a527d6f71138b9104895bceb3",
".git/objects/95/a0d6a606e40f6d3492d932c0610e796c9fc05f": "7a52268abc0cbdb344928c3c42b7d37f",
".git/objects/59/9e864d8c9a2b98f87c43819c1bfa6f28dccbba": "289116891eb3a1ddbd9f607dac9807f3",
".git/objects/0c/faf008f125157a40d07d8807b5ca8309323aff": "25e281864edb6afe98aff4ef40217b6d",
".git/objects/50/41be4712b32fc20da7232a8b33eccafc588311": "2db24f6eb344608d47b242fb88269c57",
".git/objects/57/1ea1e5ff344b1a1cca2136d17e6b5a454aa88e": "bc8a64bc5c836fbf3cfa9bf400648693",
".git/objects/3b/b7fa4a9fc9b744faa7c868f3436c035c6e65b4": "8605ef80a6eaf0f52a71b7da6db5c9f5",
".git/objects/03/1660faaebdfce1fc186a38a0cc2c0c187a8159": "5001176da8efca45a2e45425ae2ababc",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/157ce28da784af2a25d376ceb26639db2911cd": "37a875cd9a150f77b041aa6c331f99cc",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/2144dfdfe5eaf06de6181581074454fe6f657b": "0f7be50fb3c72a7ffed0f2f3106db28f",
".git/objects/9e/dbb0c0f7281ba95ec22c4fb7179ddd525338c9": "8c24647e8cbf01b4fa302bd14b0d3469",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/db0169f27043eb4d0b4314505bd2f288f30d75": "89152e8c83707b76fe4a228feb5ad408",
".git/objects/32/f4939f6935e30c541b7f253fc4129b13fa8879": "b5251d29451f56c6ead2a286e8a09772",
".git/objects/35/c272f0e12804e797e252b22195214e4b01f56c": "36e928dcd16fa38ac70a9543f23f0c19",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/3b4617bcf0bbc21c72ec9b825270dd4423a121": "f27a25e0af941b28bbba5499309183c4",
".git/objects/58/9b569999292c411d0b8acc5fb4d3395f079123": "6740a50e8b82552daa24e04e2195adeb",
".git/objects/60/48726a61f9d5c3096a48606b9a4446bbffaf96": "b0acebdecd44b7cda18ec5954ff8df7c",
".git/objects/9d/49171c17befa66a9f6dfbe077524ae0696238c": "09c536d996e1a9e6586ab53b5c6321ba",
".git/objects/9c/c003e87fbea1486b1c1def81e32498cc9132e5": "f793c024e76ced2d66dd3b4008ed2cb0",
".git/objects/02/e93b9a7ec3933a6e69dc6ee16410b49048dab7": "acfef1408890bc387ce21a811f0f60da",
".git/objects/a4/ac6d6c57220040a16b2ff69dae0a653a7fdbf5": "1957403f23ba65738fa142865d8e9ca9",
".git/objects/d9/12c29451460729ef6d7da131016c8f55d51c79": "5e6b449bea87b35c8ac287333dea8c0e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/da/8aa2f7bd8f8fa3b3695debd5a2ea246efae9dd": "1427f6629156730911741fe1c58470f9",
".git/objects/a5/3b9e11b8781371fe926c461df3719845013bca": "d6c4eabf46e65319cae655880b1dfdf7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2dc1992be3a05b200db68304ce3d14091a0353": "9cf322b5ac813ab804406a2b813babc0",
".git/objects/ae/30f1afe3fd36206b26f24fe43d0b7f30df73a6": "9da81ccde9f5e2cf9746b2ecf24c5b82",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e2/f361bc8d60ad2f8e14cb65f68adb3a087b5b87": "cca30e2f4e65254546e6b53ed4e7a7be",
".git/objects/f3/6fb2bf5218a8720f565ac5c2a6b989ab51d736": "e9c13a7ce60472a6cd79f6946081338b",
".git/objects/f3/a3198a3ad4a8b368a196adac01d920ce378823": "6b89df65405e16c496a4c8ff766e7f6d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c77de4f9ed825a9f4e0557289c659a273cd7c9": "5fdbbd372ffa39fc2fa20b094d57e061",
".git/objects/ee/0e558fb766350d28954ee0204c222b7398f81e": "2c070ff55195c07995a2ae343df2b9c7",
".git/objects/ee/a9e7e116b70092e429ee9fc2381b7e25029dbf": "2562c39749d7478c4844eddd31e68536",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/4ee0b16f8d304db9fd6dd07bf91c73d69d43cc": "3fa344529dc93a618e65d7c3a7f91ea0",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/e4/40942f92ad45b8e65284b46377998fa0061723": "88ea1d29c605ab722822903dd97f059e",
".git/objects/e4/31bd58d045f7cec5621f19c440a51278988e71": "0f0b125cd70aee26838c0f95401f39b1",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4e/a34708d0a2663eb2bfffea4481c2da3ebf534e": "cf75c7fdf64f45f1450b1b4417e9f25f",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/11/25a4f78c3b5f1ade3315c1bd1bc0b20f559dd4": "a6bd6ed82f68868de647b0a745a0ef43",
".git/objects/7d/2cbd912f10367a4c6736e52b9906975d9e37fc": "707836bc5067fe44ace57a0de8709de4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/1a/172c060aba2338c406ec49b8358a1720f2aea0": "0cef7bf5a6a6b0c5a01b43cc00c3c187",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/14976df627ae58d32a6bcaf97c1b0d319f4450": "68b891eac8f84c9c0b23c75bbe62bb5e",
".git/objects/19/ec1f452d47990f2702c5c9c11feb989b133be9": "fa44bd38707b834862bf8772bc38e2b9",
".git/objects/19/8bce0086e9b9cc02e6d6d9e23123625b4661ea": "69a4d5f8c8f05343ad4368cdad1c87ba",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/81/d64d42f7a3c59ddcc69c943b37dcf66ebfe7cf": "38489995ae9dbca625c760e590d36e11",
".git/objects/44/366c5f5595068c4f06b975fc35eb8b214b2583": "bf7ee32f488b4671031d396ff2c92a9b",
".git/objects/44/eaf5288bc7b2060577374d397ef2808a63f499": "fc7caa179ed387b759b6a0667f42ff01",
".git/objects/2a/4c74c03f4033671afd69f5350e272b04b61d74": "396775843da4256582d892c96ebbc558",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/94fd45d6d78883ee66b734ea02e0ee5b461e7d": "8a1e310ba9b73ae1f912fcdcdc6a9a69",
".git/objects/38/fa93d3f9b5f47993e9c479f2c9ec18110c5a7e": "6e85b61b5a54e1b943f0421b74c54a62",
".git/objects/38/65ab4877ce22ec23192ec58ec55d4200d9d852": "96c59462493f2631b821d28763da8b60",
".git/objects/00/3e08b20633d9b74665c90d97102b57fec8179f": "6b8a9ed9997f414f7d1e3913286011b5",
".git/objects/00/2f25b1fc6658ff970f72d65e5cb06887622601": "3d251cdecb1e3ed9f7a2e21c612e6d6a",
".git/objects/6e/a9bd69d71a78cb11c9b2aff335f07d76d91a6d": "abac4b0098a62eac2ca06f159ff17863",
".git/objects/36/ddc53e3d1173256d894656d5efc4a2d055bb99": "f7b61930f827a4cfd1883f3d968f11d4",
".git/objects/5c/5ac6c9cb6a2da28ed2bc798f58fbfb22c83f9c": "20f3ff6d171689da161835f8612780fc",
".git/objects/5c/f1c119c58860cf91eb2151be5c37b43f74423d": "2193dd4b5e5276ef1d491f781aab79ed",
".git/objects/09/9d65d2c0ba90ae1356a9285c58329e8410d83f": "c52f67dd95d8d6d6a55f00b9ada454de",
".git/objects/5d/06977f617578a8d7f7143b6149b9f1e7c03c88": "efa70a2d917e983a411e51c9c4258894",
".git/objects/31/37b1e7c748adc40a031a23925a2e2e613390f9": "6c27c8f218bc4304ee9835a974133298",
".git/objects/91/8b79b0423e92e63c33f58c9469ed50246a13de": "a863c622e3f1fe583699610edf3eb518",
".git/objects/62/a449b5792a2556c83b1950a6b3b6009e339940": "aff4a2228366a64345394126031bff3e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/5e/7cf83f162a8404c108315639e2f0e542c62002": "7f365b5e544ed3bdf1f1761f26a45988",
".git/objects/37/78125ed0b54405abbf4a2946d6cb07db0772f0": "c259e759633ff9ce9ae8cbe248f48773",
".git/objects/6c/a67ccbd7cd7c9f6c2e8cb29337b3de563b50f4": "f9637c1cb5ef74948248ea57d4c0d28f",
".git/objects/39/7b542b5c147c13dc4758c5ee89145e716e4fc2": "32d4616f8fe7347ca4e9dd43f65ed788",
".git/objects/52/1a1fb0db5ddb88e4019daf9407979872799bdb": "3325a9a97de70d7b1bf82458aa960ee9",
".git/objects/55/387ff3c4b5fa0dc0b2959465b082ef8e3aa5ed": "aa3ccc475c6c34a203d54c386c433f56",
".git/objects/55/a657cafde4092ebadba0f4fe7ea8e9fffd943c": "fc9f2626e2106a4ac3621811a5d1f280",
".git/objects/0f/f23bcc3f3e1a222e3752eedca2f5b0a6c63dea": "df39303a6b1bee28587137d48170931c",
".git/objects/0f/4b46f874a8d643c597076a8ecc3fa7b424b909": "ce51ec51f9441ba0f901a4b5d003257a",
".git/objects/bf/c671075f91b08ff66020afb80d16fc79251fad": "26a5f3118a784aa5275a7e71f1a139bf",
".git/objects/d3/83b08ec13f597f73ee0f247e939c8ff2505889": "557ba48ec920a1499da722cae29e7783",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/476ee1110cbaeefc7bdce0e532c28988bd6204": "761b05d0cdc13ac513e0271fac16d9d5",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d2/e488deb601c4abc965664aebfb4b3d7556e6a2": "8158001a5d86e24d770cc8a6a18ce5ec",
".git/objects/af/0fa9711baad4c831331aed90542a36b3f9e683": "318c334707d5a20bc1aef1112da424a4",
".git/objects/af/3c2db8bc1ae9169d25614804ecde87d7e9c14f": "746c63d7da3b688de5e5c250164e780b",
".git/objects/af/ee1f78aa0e95fa9c8ceea6e2a98376f9984fab": "bee8834311d8a6876bdd5ecae564b068",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/87a49a9563f3e178b294e885c3636c1fc41c1b": "32b30f75c98e62ce9ea6468bfabf3163",
".git/objects/de/d5bf7780afc78e7ba092a5ec459503b2b44ec6": "979fd3ff15e403fe09f25cddee7e3101",
".git/objects/a6/f07bf4611f0af50b4195790b3b683821a624a1": "b085878ed7dc0da7a4d0cd58afdd37f1",
".git/objects/a6/605817d61449231595f46e75a0dfebc3ebc08e": "1ddc232190efeb4b9efb2dd76bfe157f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/cf89b50cfe924cf1b4190cab8760bc9886a24c": "52c18a66783a3e170ee8242d93016074",
".git/objects/a1/ea4b208a4a628e2b7fe470d50a2148e292dab8": "b4bd9bce8828d1b1f3b4ad8234b3cd49",
".git/objects/a1/91f75453d6f4130977334c7d73901b4722b719": "0057ab70073d5ad42ebdcdda7583e25f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f9/7c5c923f9657556d4293a75d34e93944e028bc": "34adcb98479c44f988f65865bc3d7f64",
".git/objects/f0/38d6bf447a57d4326a2a9fa8f71281b7d2a751": "4ecae006be66f2f8777c6ff4ccc117d7",
".git/objects/f7/40030eafb80297f301921888fee4bfdc404bba": "f368cfa73b1686dd7b40fd08f2cc16da",
".git/objects/fa/5d4d2c40c4329e92722efe38b65802c7d768e0": "f8a814cb8eb3c9d75d3c99ff16f70693",
".git/objects/fa/ead1c915c18318f27703a3b6c1a7f5e05ebd2a": "6966acbd450c044e59c3f8f1dce6083e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/72f7723bee706c3f294e1ea7e0a7fb19d13583": "84fc8f8f99a431c44acf11c2ea4bf065",
".git/objects/f8/19e943b1cf2dac2520a477546d46e6e7a86ed5": "9b59f1034bfe821bfeb273d2179b1916",
".git/objects/ce/0b7d8bed5dd2c9e403b9c5a019be3d69e6ba62": "e2da49db8a895e3240110064660ccdea",
".git/objects/ce/4a54d84265f781fa01430369a3becf6e091227": "98017f31099edc97a48ff23eeaa9394e",
".git/objects/ce/0858ddc98b6cf46fda836fb6e05f9bcf994df3": "0f34c1841f2cdcefa5a695dc4fa77d68",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c788e5c419e2a7de62e0abc48add94d6c97b2d": "b938c0b2a384569e2ee14cf203437db6",
".git/objects/2c/e42cdc66f7b78f629050bbabd79086d35eaaa6": "077ec399ef85274c5ef8a8ce65795183",
".git/objects/79/077c8f8f711b32002e9ee027a852b0f0173dfa": "7d7bfe9d17da80e2591b665d4519ec7f",
".git/objects/1b/07e09746558ea9b84ced48f7f7ed396c53ac6f": "02ebbe268941044c695febe45a288755",
".git/objects/77/1446d0e5f2fab9f78e9b4449d332ac8e4216e3": "a4ea86832d6c85949b1c480c9afe38ca",
".git/objects/1e/6b2fbb8346bf76ab9dbfa791dfc5307852b6de": "974c8e8879628c6c43541dc9ac4f47f4",
".git/objects/24/7b9af5a4f21cbc56ef861a596f675b3fd8afee": "efae3f11dc3770eb0c210d96996d79ee",
".git/objects/23/9122dd4782a1144c3ea9da0c111111cef3f9f0": "39db4800ba1bab60f18b848714ab810c",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/ad3481e103ecbe6af5c7cbbd95abcab493fc06": "8c7af56e09b49a408bd497cf8991236a",
".git/objects/1d/1a2133ccd939857581187171a6969dfcdb76ec": "4f4aa5acaa961b65f2ccad7262f82e94",
".git/objects/76/72f2bb29ea61eb927ce611cc2bc65326f9892d": "7741bae08ade39675619f71b60fbfd14",
".git/objects/82/28965426540a5dab347218e9fb894172812695": "5388de81713797663a3075d887f45a03",
".git/objects/40/69a81ab9d001a56242c83c63b9df601ea0c80a": "c328457c15383e00849ff1b3adc171ce",
".git/objects/40/ea91e0eb718bfc97a96e4c291ba46d14562379": "33769940f417386de80c47d1f5ab6d6b",
".git/objects/40/2cf612e02fbb0f9b1d6167d4899478c730c46f": "baaa72e3f66bd7a4cba9850d91764988",
".git/objects/78/232b192bc2f83b4235398ba126379b32e48ceb": "6e477b1998be91039e50cf9e091f01cc",
".git/objects/7a/5943d9e98d3780c18f0dca48741cf1461ce14e": "c811b4ff37050276778cce620ce022bd",
".git/objects/7a/ce3e696e768d6509182563688a365d62bfe768": "73e848eeaa6ac36e45b423182a5aa02d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/350e4861bb3637bbcd0706765ee72cbc7bab73": "31e373469ab543257d0e5e65ddc5908e",
".git/objects/25/e572fb2f81a4103829c1fe546c03d962bfe181": "97e31bffcd283edb17906e14ce9edbe4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "522f908929b29c417100cdcf0fab9ea0",
".git/logs/refs/heads/main": "0bc8ae87c78bf46d79925294b868af62",
".git/logs/refs/remotes/origin/HEAD": "10a5034892f2a1a7bb80b115c50fd780",
".git/logs/refs/remotes/origin/main": "0e581c317eac7f06bda39e06962258ce",
".git/logs/refs/stash": "c909992c7353699b13b940a529b23d35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7f19459786a590392f40408402abc354",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7f19459786a590392f40408402abc354",
".git/refs/stash": "8ac2aad89d301b2583f39ad4c576ac7e",
".git/index": "b2bd77a529bf23172edf7ae3f8ca498d",
".git/COMMIT_EDITMSG": "ade31a28b1c7b052f5592a7e5b5ea4d5",
".git/FETCH_HEAD": "fce3534ba170ded8f011820afa8f4ccc",
"assets/AssetManifest.json": "34daf575aa63eeab03fcdd0ea7e47ca8",
"assets/NOTICES": "7e0fdc81baa9ce189e30faacab3c38c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4f0514692202bd35ef2c373f877737de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46d008bc99159b6bb2ff66575cafe3f8",
"assets/fonts/MaterialIcons-Regular.otf": "15402ad9a99617cc8f7a7b4d264e3693",
"assets/assets/images/our_image.JPG": "519dda16c8919b7b01df5c7879aec3f7",
"assets/assets/images/couple.png": "83049c744546cb041854f8badec726f9",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
