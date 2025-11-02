'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3c55e07996daa232df22064c98cf8ae0",
"version.json": "a47ea0cacdb973e44f3e58070eef62c5",
"index.html": "10c0e6a101870bddeaede1639c943c1b",
"/": "10c0e6a101870bddeaede1639c943c1b",
"main.dart.js": "ccb4c11224865e8008aa849921f5b154",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "941376023cffe354e1aea289babfa5c8",
".git/ORIG_HEAD": "60ca7e70dd01bdf58d62d5b50be8912d",
".git/config": "dd68248768270e1924cdfbed28c01117",
".git/objects/03/1660faaebdfce1fc186a38a0cc2c0c187a8159": "5001176da8efca45a2e45425ae2ababc",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/157ce28da784af2a25d376ceb26639db2911cd": "37a875cd9a150f77b041aa6c331f99cc",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/2144dfdfe5eaf06de6181581074454fe6f657b": "0f7be50fb3c72a7ffed0f2f3106db28f",
".git/objects/9e/dbb0c0f7281ba95ec22c4fb7179ddd525338c9": "8c24647e8cbf01b4fa302bd14b0d3469",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/db0169f27043eb4d0b4314505bd2f288f30d75": "89152e8c83707b76fe4a228feb5ad408",
".git/objects/35/c272f0e12804e797e252b22195214e4b01f56c": "36e928dcd16fa38ac70a9543f23f0c19",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/9b569999292c411d0b8acc5fb4d3395f079123": "6740a50e8b82552daa24e04e2195adeb",
".git/objects/9d/49171c17befa66a9f6dfbe077524ae0696238c": "09c536d996e1a9e6586ab53b5c6321ba",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a5/3b9e11b8781371fe926c461df3719845013bca": "d6c4eabf46e65319cae655880b1dfdf7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2dc1992be3a05b200db68304ce3d14091a0353": "9cf322b5ac813ab804406a2b813babc0",
".git/objects/ae/30f1afe3fd36206b26f24fe43d0b7f30df73a6": "9da81ccde9f5e2cf9746b2ecf24c5b82",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e558fb766350d28954ee0204c222b7398f81e": "2c070ff55195c07995a2ae343df2b9c7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4e/a34708d0a2663eb2bfffea4481c2da3ebf534e": "cf75c7fdf64f45f1450b1b4417e9f25f",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/11/25a4f78c3b5f1ade3315c1bd1bc0b20f559dd4": "a6bd6ed82f68868de647b0a745a0ef43",
".git/objects/7d/2cbd912f10367a4c6736e52b9906975d9e37fc": "707836bc5067fe44ace57a0de8709de4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/14976df627ae58d32a6bcaf97c1b0d319f4450": "68b891eac8f84c9c0b23c75bbe62bb5e",
".git/objects/19/8bce0086e9b9cc02e6d6d9e23123625b4661ea": "69a4d5f8c8f05343ad4368cdad1c87ba",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/44/eaf5288bc7b2060577374d397ef2808a63f499": "fc7caa179ed387b759b6a0667f42ff01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/94fd45d6d78883ee66b734ea02e0ee5b461e7d": "8a1e310ba9b73ae1f912fcdcdc6a9a69",
".git/objects/38/fa93d3f9b5f47993e9c479f2c9ec18110c5a7e": "6e85b61b5a54e1b943f0421b74c54a62",
".git/objects/6e/a9bd69d71a78cb11c9b2aff335f07d76d91a6d": "abac4b0098a62eac2ca06f159ff17863",
".git/objects/31/37b1e7c748adc40a031a23925a2e2e613390f9": "6c27c8f218bc4304ee9835a974133298",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/37/78125ed0b54405abbf4a2946d6cb07db0772f0": "c259e759633ff9ce9ae8cbe248f48773",
".git/objects/6c/a67ccbd7cd7c9f6c2e8cb29337b3de563b50f4": "f9637c1cb5ef74948248ea57d4c0d28f",
".git/objects/39/7b542b5c147c13dc4758c5ee89145e716e4fc2": "32d4616f8fe7347ca4e9dd43f65ed788",
".git/objects/52/1a1fb0db5ddb88e4019daf9407979872799bdb": "3325a9a97de70d7b1bf82458aa960ee9",
".git/objects/0f/4b46f874a8d643c597076a8ecc3fa7b424b909": "ce51ec51f9441ba0f901a4b5d003257a",
".git/objects/bf/c671075f91b08ff66020afb80d16fc79251fad": "26a5f3118a784aa5275a7e71f1a139bf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/af/0fa9711baad4c831331aed90542a36b3f9e683": "318c334707d5a20bc1aef1112da424a4",
".git/objects/af/ee1f78aa0e95fa9c8ceea6e2a98376f9984fab": "bee8834311d8a6876bdd5ecae564b068",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/f07bf4611f0af50b4195790b3b683821a624a1": "b085878ed7dc0da7a4d0cd58afdd37f1",
".git/objects/a6/605817d61449231595f46e75a0dfebc3ebc08e": "1ddc232190efeb4b9efb2dd76bfe157f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/ea4b208a4a628e2b7fe470d50a2148e292dab8": "b4bd9bce8828d1b1f3b4ad8234b3cd49",
".git/objects/a1/91f75453d6f4130977334c7d73901b4722b719": "0057ab70073d5ad42ebdcdda7583e25f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/fa/5d4d2c40c4329e92722efe38b65802c7d768e0": "f8a814cb8eb3c9d75d3c99ff16f70693",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/72f7723bee706c3f294e1ea7e0a7fb19d13583": "84fc8f8f99a431c44acf11c2ea4bf065",
".git/objects/f8/19e943b1cf2dac2520a477546d46e6e7a86ed5": "9b59f1034bfe821bfeb273d2179b1916",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c788e5c419e2a7de62e0abc48add94d6c97b2d": "b938c0b2a384569e2ee14cf203437db6",
".git/objects/1b/07e09746558ea9b84ced48f7f7ed396c53ac6f": "02ebbe268941044c695febe45a288755",
".git/objects/77/1446d0e5f2fab9f78e9b4449d332ac8e4216e3": "a4ea86832d6c85949b1c480c9afe38ca",
".git/objects/24/7b9af5a4f21cbc56ef861a596f675b3fd8afee": "efae3f11dc3770eb0c210d96996d79ee",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/ad3481e103ecbe6af5c7cbbd95abcab493fc06": "8c7af56e09b49a408bd497cf8991236a",
".git/objects/40/69a81ab9d001a56242c83c63b9df601ea0c80a": "c328457c15383e00849ff1b3adc171ce",
".git/objects/40/2cf612e02fbb0f9b1d6167d4899478c730c46f": "baaa72e3f66bd7a4cba9850d91764988",
".git/objects/78/232b192bc2f83b4235398ba126379b32e48ceb": "6e477b1998be91039e50cf9e091f01cc",
".git/objects/7a/5943d9e98d3780c18f0dca48741cf1461ce14e": "c811b4ff37050276778cce620ce022bd",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ab17ff7545df8f382eb445d07673c7b",
".git/logs/refs/heads/main": "ce0de532c010f3956af8be981a8f255f",
".git/logs/refs/remotes/origin/HEAD": "10a5034892f2a1a7bb80b115c50fd780",
".git/logs/refs/remotes/origin/main": "2b16dfa1d05e2091381dc543270d984d",
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
".git/refs/heads/main": "60ca7e70dd01bdf58d62d5b50be8912d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "60ca7e70dd01bdf58d62d5b50be8912d",
".git/index": "ed18269e89e613b4437d92cad16d99a8",
".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/FETCH_HEAD": "2f13e3348800d51564d78f2ce68f7862",
"assets/AssetManifest.json": "34daf575aa63eeab03fcdd0ea7e47ca8",
"assets/NOTICES": "7e0fdc81baa9ce189e30faacab3c38c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4f0514692202bd35ef2c373f877737de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46d008bc99159b6bb2ff66575cafe3f8",
"assets/fonts/MaterialIcons-Regular.otf": "361d86d89bba70d8b84035fd74283f0f",
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
