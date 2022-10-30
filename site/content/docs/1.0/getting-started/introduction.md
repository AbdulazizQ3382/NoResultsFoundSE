---
layout: docs
title: Get started with ndb-uikit
description: ndb-uikit is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
group: getting-started
aliases:
  - "/docs/1.0/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Quick start

Get started by including ndb-uikit's production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this [ndb-uikit CodePen demo](https://codepen.io/team/ndb-uikit/pen/qBamdLj).

<br>

1. **Create a new `index.html` file in your project root.** Include the `<meta name="viewport">` tag as well for [proper responsive behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) in mobile devices.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>ndb-uikit demo</title>
     </head>
     <body>
       <h1>Hello, world!</h1>
     </body>
   </html>
   ```

2. **Include ndb-uikit's CSS and JS.** Place the `<link>` tag in the `<head>` for our CSS, and the `<script>` tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing `</body>`. Learn more about our [CDN links](#cdn-links).

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>ndb-uikit demo</title>
       <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
     </head>
     <body>
       <h1>Hello, world!</h1>
       <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
     </body>
   </html>
   ```

   You can also include [Popper](https://popper.js.org/) and our JS separately. If you don't plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.



3. **Hello, world!** Open the page in your browser of choice to see your ndb-uikitped page. Now you can start building with ndb-uikit by creating your own [layout]({{< docsref "/layout/grid" >}}), adding dozens of [components]({{< docsref "/components/buttons" >}}), and utilizing [our official examples]({{< docsref "/examples" >}}).


## Next steps

- Read a bit more about some [important global environment settings](#important-globals) that ndb-uikit utilizes.

- Read about what's included in ndb-uikit in our [contents section]({{< docsref "/getting-started/contents#precompiled-ndb-uikit" >}}) and the list of [components that require JavaScript](#js-components) below.

- Need a little more power? Consider building with ndb-uikit by [including the source files via package manager]({{< docsref "/getting-started/download#package-managers" >}}).

- Looking to use ndb-uikit as a module with `<script type="module">`? Please refer to our [using ndb-uikit as a module]({{< docsref "/getting-started/javascript#using-ndb-uikit-as-a-module" >}}) section.

## JS components

Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you're at all unsure about the general page structure, keep reading for an example page template.

<details>
<summary class="text-primary mb-3">Show components requiring JavaScript</summary>
{{< markdown >}}
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse and Offcanvas plugins to implement responsive behaviors
- Navs with the Tab plugin for toggling content panes
- Offcanvases for displaying, positioning, and scroll behavior
- Scrollspy for scroll behavior and navigation updates
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/))
{{< /markdown >}}
</details>

## Important globals

ndb-uikit employs a handful of important global styles and settings, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

ndb-uikit requires the use of the HTML5 doctype. Without it, you'll see some funky and incomplete styling.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

ndb-uikit is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the [quick start](#quick-start).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
