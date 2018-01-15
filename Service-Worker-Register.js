// How to register for Service Workers Notes for Grow
// With Google Scholarship

Public > Js Main

IndexController.Js

Mainly a constructor for every page load

1. PostsView- which helps us update the post on the page
	ToastView- help us display error messages

2. openSocket() method -Opens a web socket -

Service Worker

-Javascript file intercepts requests as the browser makes them.
-Sits between you and network request
-cannot access the DOM but can control pages
-connects to cache
-returns a promise
Scopes
-can provide a scope with specific url but cannot be a shallower url with scope urls. Can control urls

Registering Service Worker

1. Example:

navigator.serviceWorker.register('/sw.js').then(function(reg) {
	console.log(‘Yay!’);
}).catch(function(err) {
	console.log(‘Boo!’);
});

After .then(function(reg) ………… returned promise so you get callbacks for success (Yay) or failures (Boo)

2. You can also provide a scope inside the block. For Example:

navigator.serviceWorker.register(‘/sw.js’, {
	scope: ‘/my-app/‘
});

3. To write code in a simple feature detect for Service Worker For Example:

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}

if the browser doesn't support service workers, navigator.serviceWorker will be undefined, which is a faulty value.
So older browsers will skip everything within the if statements and avoid trying to call functions that aren't defined
