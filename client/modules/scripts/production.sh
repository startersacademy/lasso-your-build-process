#!/usr/bin/env bash
lasso ../css/style.less \
    --main ../js/main.js \
    --name my-page \
    --inject-into ../my-page.html \
    --plugins lasso-less \
    --url-prefix /modules/static/production \
    --out ../static/production \
    --html false \
    --production
