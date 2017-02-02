# Installation

NPM:
`npm install spyscape/spyscape-bootstrap`

Gemfile:
`...`

Include in your bundle:

```
// Important that spyscape/variables is imported before bootstrap
// in order to override bootstrap defaults.
@import 'spyscape/variables';
@import 'bootstrap';
@import 'spyscape/base';
```

Include the webfonts:

```
<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
```

# Development

```
gem install bundler
bundle install
npm install
grunt
open index.html
grunt watch
```
