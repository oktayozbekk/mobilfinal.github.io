'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b9d779299b9b8df580850f5e82397e44",
".git/config": "11dff61f678b27fdb7a3be38059aa7bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "579d8731eb8e8107c8f1954760d94676",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90d72001a0817e3f53ce3e10074b115f",
".git/logs/refs/heads/main": "2a45af3ef6e84be55a15754c66252d79",
".git/logs/refs/remotes/origin/main": "c4ccbe7f4acc3e71f02c371547e211a9",
".git/objects/02/f526093c569731b10c12a0e8b394fb2a88dd6e": "f1c6899b48149c14c72dca5b8647ff05",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/05/29ca6b55bf033e4391196bd4351554f04e9b29": "4a83b78e82c34c9483aa7e2fa60e7ee5",
".git/objects/05/622aad281078bc8d2f814306790ba26488ab76": "c241094bc6723b0ab8324a2cc9406169",
".git/objects/12/49501145a791ba287616cfea8da56de3149157": "dfba1aa8a10b82325f06591a194bb370",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1a/999b0085c15a0815e43c0a2a46dbf943609f24": "8f54c88eca1eb332a26138d1d46c9ff5",
".git/objects/1b/cfb708844300eb56c01f8b62f8d38e6396d6a4": "b405b202d8e424f772fa0ca1bb536c24",
".git/objects/28/cfd298238d2f6bd2c6a140ac66eaf194581f18": "768dd36a861fcc8bc939e152d654f3ce",
".git/objects/29/78a45ae041342323584fe61665abbd896ff46e": "1e340ef5ca188ba36f18ab1edf5c4a1c",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2f/d4ad9f0b40fb54470e771016a9ea33892d27d2": "3e447a0281317011d157eeaa121860c5",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/053489980013f665b3f466260f495f1f989698": "ea920ce755b99992e64664394fe35973",
".git/objects/3a/69e0dc4ec71877336100ed79097ed35abe8191": "e08f8454b1cbfff7899e0a0921a6ed5b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/33e8a9b21688ae73a8d47c80710faf1afe2ed7": "5264b06d45bd1eeea44c609f8bfa9766",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/e8bd66b58af08fadc863724865584d61f8545a": "737f76801d7bd39c1eedeff789d6184d",
".git/objects/4f/be50062a17fd4dfd9cc443c6478121fe5b0b09": "d8a2733b224496991f3bb4024b7a0884",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/60/85b7257d884c3a5ec93bf0a7775d62386808ad": "d43a5341fb819a951bfc5d75bed3d326",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/ab32ef33aff3d6c007971e097a4b385d90b6be": "ddb6987f6d2fca40156d6984b94cc1ff",
".git/objects/71/804c016f7ea734ab528264641dc5b61cc03172": "b99b1b87a70941cf761309a9eee44720",
".git/objects/72/7b13f1eac9b8bf69ecb04a079d296f696170bf": "5cbb471c034aab2182253b75284c1ab7",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/4d9e0198344fabe9dadf10effd820c75abbec1": "f41a949cca0ed23f35b81add18f1ee45",
".git/objects/79/a78ee2e3bef8c6b86fbbda398f86ce6bce70cd": "3c195735c3ce30b95e8279bdddaa2729",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/94b1d2fad78c7985b7d38ec2ce0194c2c6386b": "b03b4a2c2a1caf7e7b2722c0568d7c9a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0737fa699e5e5384f629bbec6b1047e96a5d5f": "9d6073ae7badce0de2d60b56944e0a71",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8024dadad1922b47a5e990a961f2f29c085565": "980cb2993f7b22ac94d328646714b383",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e033a61aaece5a70ac76b5653408928eaf9a34": "421157eb5aa677ae94eaa36e4246ba1d",
".git/objects/c4/0b55d428d2c642168c7dfb17cf6e717909d3da": "3d7bad781167aaf4b90b4515753cdfd0",
".git/objects/c4/d579a018b5f6b9620f5f5e8ef5f006ba24374b": "135d4a9f9f9f7cb9747c7fb8b3e7a59a",
".git/objects/d0/d22f2662dacdb0d99dcfd9c9de4ab34526a104": "b41c2da0049b8e39019a9dc69813fd7b",
".git/objects/d2/13876580624ea2c5cdacc20736fc3268627a7b": "a4f5dacee477e8a0990b458f1c353b65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5eb55dfdc250e95eb7e54d2a9abc097d50698d": "81c5fed6305c91fef8af0e536005cc70",
".git/objects/d8/1dcff4e02d7cddfe36803bf1613b6777409163": "b9db7f1dd8f36d3de3e7d40bb1c6e31d",
".git/objects/dd/209afa7b29d1ffdb246e819e0d56b907fdc7ba": "bfd730e05ffa4d61451fb92f6393dda4",
".git/objects/e1/f398a73f4e8b5e31f61749e5b7e651cb9de54f": "6a59cff59755958f9a037bea13ca05f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/fb09220a46a483e3bf394f788efdad38e7fb51": "2077ff5dcae494c71f0bdc7c8c68a0c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ec83e10a99d362b89c29c6acbf9b4a866d59e4": "4dc373e79dc02f25ccc0fb3b537b2e0e",
".git/objects/f2/265b49011a37d919a453be91bd313c32d85da7": "680a30d228f14a2a4e419aec882262d0",
".git/objects/fd/736e81d5886b55ce41b7dffeba2197ec50d938": "ebbeb8fd6cef5f5b20c6e882e6e32668",
".git/refs/heads/main": "6af1abddc5b7e9c9455c505981dadde1",
".git/refs/remotes/origin/main": "6af1abddc5b7e9c9455c505981dadde1",
"assets/AssetManifest.json": "af4dd3422320c91fd3c5bba13841dd93",
"assets/Assets/Fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/Assets/Images/Saly.png": "7c33a49667d6fb96e6012c5f5497c7ec",
"assets/FontManifest.json": "3be8df4df4cb2636cff2642caff14b12",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4ee930000b66004fe3af3ce87bc08ef1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11c97355e480756a83bc5f9d142a392b",
"/": "11c97355e480756a83bc5f9d142a392b",
"main.dart.js": "0b2b80a6e86c15f5725912f86e095455",
"manifest.json": "e2acbd50b9bfcc1bdc9fdccfc8c97674",
"version.json": "8803966c66c2f62dd84f0000c7c832af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
