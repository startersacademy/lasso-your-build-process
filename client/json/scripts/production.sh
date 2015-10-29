# same output as development.sh because they are using the same config
lasso ../my-page.browser.json \
    --name my-page \
    --inject-into ../my-page.html \
    --config ../lasso-config.json \
    --html false

