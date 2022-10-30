---
layout: docs
title: Contents
description: Discover what's included in ndb-uikit, including our precompiled and source code flavors.
group: getting-started
toc: true
---

## Precompiled ndb-uikit

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
ndb-uikit/
├── css/
│   ├── ndb-uikit-grid.css
│   ├── ndb-uikit-grid.css.map
│   ├── ndb-uikit-grid.min.css
│   ├── ndb-uikit-grid.min.css.map
│   ├── ndb-uikit-grid.rtl.css
│   ├── ndb-uikit-grid.rtl.css.map
│   ├── ndb-uikit-grid.rtl.min.css
│   ├── ndb-uikit-grid.rtl.min.css.map
│   ├── ndb-uikit-reboot.css
│   ├── ndb-uikit-reboot.css.map
│   ├── ndb-uikit-reboot.min.css
│   ├── ndb-uikit-reboot.min.css.map
│   ├── ndb-uikit-reboot.rtl.css
│   ├── ndb-uikit-reboot.rtl.css.map
│   ├── ndb-uikit-reboot.rtl.min.css
│   ├── ndb-uikit-reboot.rtl.min.css.map
│   ├── ndb-uikit-utilities.css
│   ├── ndb-uikit-utilities.css.map
│   ├── ndb-uikit-utilities.min.css
│   ├── ndb-uikit-utilities.min.css.map
│   ├── ndb-uikit-utilities.rtl.css
│   ├── ndb-uikit-utilities.rtl.css.map
│   ├── ndb-uikit-utilities.rtl.min.css
│   ├── ndb-uikit-utilities.rtl.min.css.map
│   ├── ndb-uikit.css
│   ├── ndb-uikit.css.map
│   ├── ndb-uikit.min.css
│   ├── ndb-uikit.min.css.map
│   ├── ndb-uikit.rtl.css
│   ├── ndb-uikit.rtl.css.map
│   ├── ndb-uikit.rtl.min.css
│   └── ndb-uikit.rtl.min.css.map
└── js/
    ├── ndb-uikit.bundle.js
    ├── ndb-uikit.bundle.js.map
    ├── ndb-uikit.bundle.min.js
    ├── ndb-uikit.bundle.min.js.map
    ├── ndb-uikit.esm.js
    ├── ndb-uikit.esm.js.map
    ├── ndb-uikit.esm.min.js
    ├── ndb-uikit.esm.min.js.map
    ├── ndb-uikit.js
    ├── ndb-uikit.js.map
    ├── ndb-uikit.min.js
    └── ndb-uikit.min.js.map
```

This is the most basic form of ndb-uikit: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`ndb-uikit.*`), as well as compiled and minified CSS and JS (`ndb-uikit.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`ndb-uikit.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`ndb-uikit.bundle.js` and minified `ndb-uikit.bundle.min.js`) include [Popper](https://popper.js.org/).

## CSS files

ndb-uikit includes a handful of options for including some or all of our compiled CSS.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `ndb-uikit.css`<br> `ndb-uikit.min.css`<br> `ndb-uikit.rtl.css`<br> `ndb-uikit.rtl.min.css` | Included | Included | Included | Included |
| `ndb-uikit-grid.css`<br> `ndb-uikit-grid.rtl.css`<br> `ndb-uikit-grid.min.css`<br> `ndb-uikit-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `ndb-uikit-utilities.css`<br> `ndb-uikit-utilities.rtl.css`<br> `ndb-uikit-utilities.min.css`<br> `ndb-uikit-utilities.rtl.min.css` | — | — | — | Included |
| `ndb-uikit-reboot.css`<br> `ndb-uikit-reboot.rtl.css`<br> `ndb-uikit-reboot.min.css`<br> `ndb-uikit-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

## JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| JS Files | Popper |
| --- | --- |
| `ndb-uikit.bundle.js`<br> `ndb-uikit.bundle.min.js`<br> | Included |
| `ndb-uikit.js`<br> `ndb-uikit.min.js`<br> | – |
{{< /bs-table >}}

## ndb-uikit source code

The ndb-uikit source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
ndb-uikit/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of ndb-uikit usage. Beyond that, any other included file provides support for packages, license information, and development.
