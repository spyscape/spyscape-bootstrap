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
grunt
open index.html
grunt watch
```

# Spyscape legacy font deprecation

As of Feb 2019, the original Spyscape fonts have been deprecated in favour of the new font,
"Spyscape Two". All spyscape-bootstrap font variables have been switched over to use the 
new font, so upgrading to the new version should be relatively painless.

If for some reason, usage of the new font causes issues, the legacy fonts are still available 
using the same variable names as before, prepended with `$LEGACY_`, eg. `$LEGACY_display-font-family`. 
Once all instances of the font usage have been upgraded, these fonts will be removed.
