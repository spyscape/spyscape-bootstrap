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

# Releasing a new version

1. As part of your PR, bump the version in `package.json`, following semantic versioning.
2. After the PR gets merged, pull `master` and run `git tag -a "NEW_VERSION_NUMBER" -m "NEW_VERSION_NUMBER"`, where `NEW_VERSION_NUMBER` is the version you bumped to in `package.json`.
3. `git push --tags`

# Including `spyscape-bootstrap` in your project

Install it by referencing the tag (rather than the commit SHA), eg. `npm install spyscape/spyscape-bootstrap#1.2.2`

# Spyscape legacy font deprecation

As of Feb 2019, the original Spyscape fonts have been deprecated in favour of the new font,
"Spyscape Two". All spyscape-bootstrap font variables have been switched over to use the
new font, so upgrading to the new version should be relatively painless.

If for some reason, usage of the new font causes issues, the legacy fonts are still available
using the same variable names as before, prepended with `$LEGACY_`, eg. `$LEGACY_display-font-family`.
Once all instances of the font usage have been upgraded, these fonts will be removed.
