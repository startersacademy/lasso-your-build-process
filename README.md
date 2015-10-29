# Lasso Your Build Process

This application demonstrates how to use lasso.js to replace various parts of a
typical front end workflow. For more information see
https://github.com/lasso-js/lasso.

## Getting Started

Install dependencies:

`
npm install
npm install -g lasso
`

Start the server:

`
npm start
`

## Using the Command Line Interface Examples

For the `cli`, `modules`, and `json` examples you will need to use a command to
generate the assets. In the directory for each example, you will find a
`development.sh` and `production.sh` script. Run one of those scripts to
generate the assets.

See https://github.com/lasso-js/lasso-cli for more information about using
`lasso-cli`.

## Browsing the Examples

After starting the server and using the commands, open http://localhost:3000/.
Use the links to check out the examples.

## Browsing the Source

I suggest you look at the source in the following order:

- app.js

- src/pages/taglib/index.js

- src/pages/taglib/template.html

- src/pages/taglib/browser.json

- client/cli/my-page.html

- client/cli/style.css

- client/cli/main.js

- client/cli/development.sh

- client/modules/scripts/production.sh

- client/modules/my-page.html

- client/json/lasso-config.json

- client/json/my-page.browser.json

- client/json/scripts/development.sh
