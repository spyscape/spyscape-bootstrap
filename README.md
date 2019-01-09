# Installation

NPM:
`npm install spyscape/spyscape-bootstrap`

Gemfile:
`gem "spyscape-bootstrap", :git => "git@github.com:spyscape/spyscape-bootstrap.git"`

Include in your bundle:

```
// Important that spyscape/variables is imported before bootstrap
// in order to override bootstrap defaults.
@import 'spyscape/variables';
@import 'bootstrap';
@import 'spyscape/base';
```


# Development

```
gem install bundler
bundle install
npm install
npm run grunt
open index.html
npm run grunt:watch
```
