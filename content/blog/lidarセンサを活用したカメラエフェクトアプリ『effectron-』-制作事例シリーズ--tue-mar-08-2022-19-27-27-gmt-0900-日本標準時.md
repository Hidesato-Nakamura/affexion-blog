---
templateKey: blog-post
title: LiDARセンサを活用したカメラエフェクトアプリ『Effectron 』|制作事例シリーズ
description: 制作事例シリーズ。アフェクションが制作したアプリやコンテンツを紹介します。今回はLiDARセンサーを活用したカメラエフェクトアプリ『Effectron
  』です。
contributor: 開発部 マミミ
color: "#00ff00"
tags:
  - effectron
  - 制作事例
date: 2022-03-08T10:27:27.494Z
featuredimage: /static/images/uploads/effectron_top.png
---
![nn](https://firebasestorage.googleapis.com/v0/b/affexion-blog-image.appspot.com/o/effectron%2Feffectron_top.png?alt=media&token=2e1104ca-6d34-4509-816a-5fd805d188ed "effectron")

## 『Effectron』の概要
iPad Pro 2021から搭載されたLiDARセンサーを使い、取得した地形にエフェクトを描画することで3次元的なエフェクト演出ができます。
<iframe width="560" height="315" src="https://www.youtube.com/embed/zVonK6b82J8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

自宅を映画『TRON』の様なグリッドに覆われた空間にし、オフィスの廊下を洞窟にし探検することもできます。地形に描画するエフェクトは20種類から選択可能です。（ダウンロード: [App store『Effectron』](https://apps.apple.com/us/app/id1526438768)）

**掲載メディア**<br>
テッククランチ:<br>
[iOSアプリ開発者に訊く：LiDARで空間を演出するアプリ「Effectron」 （アフェクション）](https://jp.techcrunch.com/2021/06/07/effectron-dev/)

##  開発について<br>
### 開発環境
- macOS	10.15.6
- Xcode	11.6
- Unity	2020.1.0f1
- ARFoundation	4.0.2
- ARKit	3.5
- Universal RP	8.2.0
- iOS(iPad)	14(preview)
- Amazon Lightsail

### コアな機能<br>
- [LiDARセンサー](https://www.rohm.co.jp/electronics-basics/laser-diodes/ld_what10)を活用した地形メッシュの取得
- 取得した地形メッシュへのエフェクト描画
- 取得した地形メッシュのオクルージョン
- 人物シルエットの検出
- 人物のオクルージョン
- 人物シルエットへのエフェクトの描画
- 空間にパーティクル/オブジェクトの配置
- カメラの録画/写真アプリへの保存
- 課金システムの構築<br>
**躓いた箇所のTips**<br>
[【Unity】LiDAR+ARFoundation+ShaderGraphで地形メッシュのエフェクトを作る](https://qiita.com/AFX_Nakamura/items/957511f354382e51a944)

### 企画の意図<br>
#### LiDARの可能性<br>
ARアプリを使った際に、平面を検知するのに時間がかかったり、トラッキング不安定だったりとAR表示がうまくい経験が多くの方にあったかと思います。しかし、 [LiDARセンサー](https://www.rohm.co.jp/electronics-basics/laser-diodes/ld_what10)がiOS端末に搭載されたことにより画像認識以外の方法ににより空間情報の取得が可能となり、上記の問題が大きく改善されました。また、地形情報が取得できることにより、地形のオクルージョン(前後関係の矛盾を解消するマスク処理のようなもの)が可能となり、ARKitにこれまであった[ピープルオクルージョン](https://developer.apple.com/documentation/arkit/camera_lighting_and_effects/occluding_virtual_content_with_people)と組み合わせることで表現の幅が大きく広がりました。これらの機能を文字や言葉で表すことは難しいと感じ、多くの人に可能性を感じてもらいたく視覚的に分かるアプリを作りました。<br><br>

### 👾👾アフェクションから👾👾<br>
**株式会社アフェクションはARアプリをはじめ、インタラクティブコンテンツ、WEBアプリの企画・制作を行っております。ご相談ございましたらお気軽にご連絡ください。<br><br>メール: cgmotion@affexion.jp**

