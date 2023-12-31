'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f33815ff2beef1631abb38ad298b4c1c",
"index.html": "919bd96e89c678765e65bc9cd5463773",
"/": "919bd96e89c678765e65bc9cd5463773",
"main.dart.js": "acec2cb518ea0e6d8de4f0b9c577b841",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e0dd27b48de67968b3a169e92629220",
".git/config": "8a11e9cc80bbf0c78b69a09172a21481",
".git/objects/61/b053cd05ec00fc1d7079f8f1ebdfd46140eccc": "a0d885d17881959689a3ab978b46e98e",
".git/objects/92/fd9aa87008215106743a0d9763d7fe93c0d895": "0e2cd7812aeaacf5b925c53b2ae5c0f7",
".git/objects/0c/92f5fdf8421ce2474466e3cbfe547f252b5b5d": "aac4707f667d4c23d8344b0807fc2f68",
".git/objects/57/592d66eec8cdfde3dde61265cb3d3ec60ffe2f": "9e4494eb064e4c80093264bac8bbcb74",
".git/objects/6f/48283237d4dc26d7ca6883aa467e8642c49dc3": "caa7b329009b93f6796cd400ea996d1f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/9a5ff2b747dcc60df4adad52b85223df2ca57b": "47ccdf50f633daeff13b6882bf1674d5",
".git/objects/9b/dce24d77806b6440070833b2bff5abdcbeca03": "ef75d4e6d975edf345c564379e4d4808",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/5f/02ec1dc55ed2f93bfebd9d1a8307b46f55a00a": "9fe088404de5a95440182c889665b58e",
".git/objects/33/288b8f5d4861d2d2c6798abdc16cc2e001532d": "12e9b6eb66f90d307ee1a7d3c70c1a95",
".git/objects/9c/df66e29b9c9aac24949383e32042c2545d3954": "92fea3b7201b7dc0462384d4b20aed67",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d1/ab35789e55b852f1ac65d0583090d4422d1fe2": "0688e45b45f8afa6492e95c53ac2c9e8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ca/74a8bd3ee0cbefb402ec55eb68b272a481a781": "f23df7ab020bf18fded427625a3381a6",
".git/objects/fe/76d9c0354820c52913bc8556625a92094f7a19": "cdab00a26ba8f6326bced02603327dbf",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/4fc3df424397c17d8427fcbde2def64fea3739": "3619c96767cb104f57ade66346147b19",
".git/objects/45/fc8a008829f8f87f6fbcf1c1d8fa1bb23e0b6b": "2a28021038274d28b4c40de6770bb951",
".git/objects/73/b45f95b479b3e70fdf6eec8556aaa9afa4143d": "13d1cc67916bb879468f5c76e862fb2f",
".git/objects/80/470a288ee0de68d839ecf122e0316976b7ea1f": "a7e80a11b86cf99189aa8a51d0c84930",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/345e8c99f08efd847fed1909716466ceb4b156": "5008c9ab52e108df5238190a78387898",
".git/objects/07/ef34281222a06559a1bda98f2c75d1b8ee3a2e": "9f6498e0ee03750593ab9fc5b4b31634",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/56223c0f9d02aa53dbeee173a53526992743f8": "ec5d3b6451a5932feabbbaa6043bad09",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/5294c0f3bd030893e7cfb18bf471c5622d3d1c": "d704399a7963943d199b466202665351",
".git/objects/6c/a2f87296cb4b7fce7bad8b13f1a66f1e36e73f": "aee66b893557a4905a09a37c76c3c5a2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a7/a0444f197be53648ef79013617abc19c72ccb4": "34acb7bc614bb3934b1787e590bf60fd",
".git/objects/d5/06939b6efa83c77857bf500d00a1a67bdc8d5f": "4e28659064782a6ed111cc6caa1c8646",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/658943172882f7d2fdfeaa650ed70e9106f6f4": "5d1b641de6e05f24bebf7d42a1acb84d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0e3bbcc6c29caa5a5663ddef0e676e6d72d5be": "24f02cafbebf0c2349930f647287dfab",
".git/objects/a1/1781a09bb40409335b49cfb6b8ab0d272d1df8": "2e872b28faeaa73d73d4cc750846cce7",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/f9/92fe4ec3d18a6bffb3af7cc4eddfcb6e136cdd": "73abe596d40ed4dd6dcb820d2576d0c7",
".git/objects/f7/cc9e4eb4f885d6e578e20b79630d8523b9b18f": "6955a8a11dffa06c580de51159fd5977",
".git/objects/e8/b2f9a216244b444e19155483105c79bfa4f19c": "37ed344350676cc0ac10549022aeb487",
".git/objects/fa/8517090b7aa98b915f5f8b416d0e8d73f90517": "7c73c7a5e1ef3bdaa7157f73d113d816",
".git/objects/f6/94de9eadc89392f1b6f7a3da12e4bb4a99132e": "d2d46412311317528cec7f4970ce8466",
".git/objects/e9/a2d81e578eea785bed26d096578154ace67174": "f863374df649d794f330f1b7f8e4e0dc",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/7bc7b7c39fa8827d3522b6991aa3e8833982ba": "725b97d7f1adaf50f8d435afd32d03f3",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/bdaee651078831729afeab85ed6718c98667a6": "2bf35a0a7c19fde80acf4c28c4abceaf",
".git/objects/1d/bbd7fbd81eba25c78eb9c1ddc114b27a106ea8": "5022783d2a1e879c616aa27cdab58ee0",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/07e071af6ce12c686642834c322f2fe3bca0c0": "e735166b4db2fe9320e1c2b29db2dfd8",
".git/objects/13/93e4cb8aa5e14f49df3fb278535c9d8018ffb4": "a7c37ea64ac715ee6c0af15692344cce",
".git/objects/7a/53211bf1efec53113160a63742bff47eeb4ff2": "77e3f9ea2bbbb159fd3c23b7bf7e9169",
".git/objects/8e/9038e2758f6d9aca3a3363682dbc4c13ecce1c": "a2f42e313896669ad6e8d0d9051a9f6c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e11f1bb7b562a7c282b162a88571eab6",
".git/logs/refs/heads/master": "7b4f018139992fabe8f8d119014fd4a4",
".git/logs/refs/heads/main": "754f27e9fd71bb611b44d47fe371cbd0",
".git/logs/refs/remotes/origin/master": "909366699b82065d30c1e1f5e7c88f24",
".git/logs/refs/remotes/origin/main": "24bb17862e9ae79c08030efd4038baef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/master": "1adf973d3021fceb076ca3509ac557b9",
".git/refs/heads/main": "41f4606b966f039a427faf0539080506",
".git/refs/remotes/origin/master": "1adf973d3021fceb076ca3509ac557b9",
".git/refs/remotes/origin/main": "41f4606b966f039a427faf0539080506",
".git/index": "4bb9c355116ea2b1ba19c2935a3c79fb",
".git/COMMIT_EDITMSG": "547e4655386b2c1426b562c1502b6139",
".git/FETCH_HEAD": "230b9e7a873dc2c61e8ffe07dc668971",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "376cdb13d0e61af7c46723530f253ed4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/fonts/MaterialIcons-Regular.otf": "52fc34a70b225832e47b13c384bc9b3e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
