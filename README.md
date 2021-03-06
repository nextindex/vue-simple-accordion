# vue-simple-accordion

[![npm version](https://badge.fury.io/js/%40nextindex%2Fvue-simple-accordion.svg)](https://badge.fury.io/js/%40nextindex%2Fvue-simple-accordion) [![GitHub version](https://badge.fury.io/gh/nextindex%2Fvue-simple-accordion.svg)](https://badge.fury.io/gh/nextindex%2Fvue-simple-accordion) [![Build Status](https://travis-ci.org/nextindex/vue-simple-accordion.svg?branch=master)](https://travis-ci.org/nextindex/vue-simple-accordion) [![codecov](https://codecov.io/gh/nextindex/vue-simple-accordion/branch/master/graph/badge.svg)](https://codecov.io/gh/nextindex/vue-simple-accordion)


> Accordion component in vue

To be as flexible as possible, it contains only Accordion Items. You have to wrap it in a container and add your own styling.
Title and content will be set over slots, to provide a maximum flexebility for the accordion content.

## Install

`npm i @nextindex/vue-simple-accordion`

## Usage

```javascript
import AccordionItem from 'vue-simple-accordion'

export default {
  components: {
    AccordionItem
  }
}
```

## Templates & Slots

```html
<accordion-item variant="Accordion__item--small">
    <div slot="title">Hello</div>
    <div slot="icon"> <svg> .... </svg> </div>
    <div slot="content">
      <p>I am a hidden content</p>
    </div>
</accordion-item>
```

In addition you can use the `variant` prop to pass additional classes.

## Styling

Only a very basic styling is included. So you can style it yourself to match your style.
Some preset stylings will be included later.


### BEM Styles

```scss
.Accordion__item {}
.Accordion__heading {}
  .Accordion__title {}
  .Accordion__icon {
    &.is-open {}
  }
.Accordion__content {
  &.is-open {}
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
