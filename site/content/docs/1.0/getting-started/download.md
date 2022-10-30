---
layout: docs
title: Download
description: Download ndb-uikit to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **ndb-uikit v{{< param current_version >}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{< docsref "/getting-started/contents#css-files" >}}))
- Compiled and minified JavaScript plugins (see [JS files comparison]({{< docsref "/getting-started/contents#js-files" >}}))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

<a href="{{< param "download.dist" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download ndb-uikit');">Download</a>

## Source files

Compile ndb-uikit with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) for compiling Sass source files into CSS files
- [Autoprefixer](https://10.0.224.36:8080/postcss/autoprefixer) for CSS vendor prefixing

Should you require our full set of [build tools]({{< docsref "/getting-started/contribute#tooling-setup" >}}), they are included for developing ndb-uikit and its docs, but they're likely unsuitable for your own purposes.

<a href="{{< param "download.source" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## Examples

If you want to download and examine our [examples]({{< docsref "/examples" >}}), you can grab the already built examples:

<a href="{{< param "download.dist_examples" >}}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Examples');">Download Examples</a>

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver cached version of ndb-uikit's compiled CSS and JS to your project.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

If you're using our compiled JavaScript and prefer to include Popper separately, add Popper before our JS, via a CDN preferably.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

## Package managers

Pull in ndb-uikit's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, ndb-uikit will **require a [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) and [Autoprefixer](https://10.0.224.36:8080/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install ndb-uikit in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/ndb-uikit):

```sh
npm install ndb-uikit@{{< param "current_version" >}}
```

`const ndb-uikit = require('ndb-uikit')` or `import ndb-uikit from 'ndb-uikit'` will load all of ndb-uikit's plugins onto a `ndb-uikit` object.
The `ndb-uikit` module itself exports all of our plugins. You can manually load ndb-uikit's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

ndb-uikit's `package.json` contains some additional metadata under the following keys:

- `sass` - path to ndb-uikit's main [Sass](https://sass-lang.com/) source file
- `style` - path to ndb-uikit's non-minified CSS that's been precompiled using the default settings (no customization)

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

### yarn

Install ndb-uikit in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/ndb-uikit):

```sh
yarn add ndb-uikit@{{< param "current_version" >}}
```

### RubyGems

Install ndb-uikit in your Ruby apps using [Bundler](https://bundler.io/) (**recommended**) and [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html):

```ruby
gem 'ndb-uikit', '~> {{< param current_ruby_version >}}'
```

Alternatively, if you're not using Bundler, you can install the gem by running this command:

```sh
gem install ndb-uikit -v {{< param current_ruby_version >}}
```

[See the gem's README](https://10.0.224.36:8080/twbs/ndb-uikit-rubygem/blob/master/README.md) for further details.

### Composer

You can also install and manage ndb-uikit's Sass and JavaScript using [Composer](https://getcomposer.org/):

```sh
composer require twbs/ndb-uikit:{{< param current_version >}}
```

### NuGet

If you develop in .NET Framework, you can also install and manage ndb-uikit's [CSS](https://www.nuget.org/packages/ndb-uikit/) or [Sass](https://www.nuget.org/packages/ndb-uikit.sass/) and JavaScript using [NuGet](https://www.nuget.org/). Newer projects should use [libman](https://docs.microsoft.com/en-us/aspnet/core/client-side/libman/) or another method as NuGet is designed for compiled code, not frontend assets.

```powershell
Install-Package ndb-uikit
```

```powershell
Install-Package ndb-uikit.sass
```
