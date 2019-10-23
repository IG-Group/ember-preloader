# ember-preloader

*You put your preloader in, you take your preloader out, You put your preloader in, and you shake it all about...*

This addon allows you to render files directly in to the index.html on the initial build, then removes them from the DOM once your app has loaded. Useful for adding a preloading screen before the initial app is downloaded.

## Install
```
ember install ember-preloader
```

## Usage

The addon leverages the `contentFor` helper. In your app's **ember-cli-build.js** define your options hash, either using the existing `contentFor` hooks or your own:

```js
var app = new EmberApp(defaults, {
  preloader: {
    head: 'preload.css',
    body: 'preload.html'
    'custom-hook': 'preload.js',
    'custom-hook2': 'preload2.js'
  }
});
```

If you've used custom hooks, add them to your **index.html** file:

```hbs
{{content-for 'custom-hook'}}
{{content-for 'custom-hook2'}}
```

Finally, import the mixin into your application route:

```js
import PreloaderMixin from 'ember-preloader/mixins/preloader';
export default Route.extend(PreloaderMixin, {});
```

## Example

ember-cli-build.js:

```js
var app = new EmberApp(defaults, {
  preloader: {
    head: 'preload.css',
    body: 'preload.html',
    'body-footer': 'preload.js',
  }
});
```

Output:
```html
<style data-preloader>
  ... preload.css content ...
</style>

...

<div data-preloader>
  ... preload.html content ...
</div>

...

<script data-preloader>
  ... preload.js content ... 
</script>
```

## Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).
