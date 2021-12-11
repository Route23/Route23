---
layout: ../../layouts/project.astro
title: 全てのSNS, サービスから特定のユーザー名を検索
client: Self
published_at: 2021-12-5
img: /assets/test.jpeg
description: |
  Don't abuse.
tags:
  - Cloud Shell
  - Sherlock
char: 1,040
---
きっかけは自分の使っているサービス毎にID名、ユーザー名に統一性がなかったので一度洗い出してしまおうとした所存です。  
やり方は以下です

## Sherlock

SherlockというOSSを今回は使います。  
[Sherlock](https://github.com/sherlock-project/sherlock)

## Google Cloud Shell
Google先生のCloud Shellを使って動かしていきます。  
[Google Cloud Shell](https://shell.cloud.google.com/?show=ide%2Cterminal)  
(環境構築いらんから鬼便利↑  

Google Cloud Shellは完全無料なので安心してください。  
GoogleアカウントでログインしたらVSCodeに似たエディターが出てくるので、  
その画面で下記のコマンドを実行してSherlockを使う準備をしましょう。  
<figure>
  <img
    src="/assets/blog/sherlock0.png"
    alt="sherlock0"
    title="sherlock0"
    style="
      width: 100%;
      height: auto;">
</figure>

```
# レポジトリからクローン
$ git clone https://github.com/sherlock-project/sherlock.git

# Sherlockに移動
$ cd sherlock

python3 -m pip install -r requirements.txt
```

Sherlockに移動したら下記コマンドを打ってください。  

```
$ python3 sherlock --timeout 1 <ユーザー名>
```

`--timeout 1`は時間がかかってる時に動かなくなる時があるので指定しています。  
実行すると以下のような結果が返ってきます。  

<figure>
  <img
    src="/assets/blog/sherlock1.png"
    alt="sherlock1"
    title="sherlock1"
    style="
      width: 100%;
      height: auto;">
</figure>

いたずら厳禁。

fin.