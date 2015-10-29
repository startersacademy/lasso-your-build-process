#!/usr/bin/env bash
lasso style.css \
    --main main.js \
    --inject-into my-page.html \
    --url-prefix /cli/static \
    --development
