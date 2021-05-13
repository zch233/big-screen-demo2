#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@gitee.com:z-null/big-screen-demo.git &&
git push -uf origin master:gh-pages &&
cd -;