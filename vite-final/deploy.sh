#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://weiting632.github.io
# git push -f git@github.com:weiting632/weiting632.github.io.git main

# 如果你要部署在 https://weiting632.github.io/vite-deploy-work6
git push -f https://github.com/weiting632/vite-deploy-4.git main:gh-pages