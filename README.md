# paypayapi

## Overview

Sample Application for PayPay API.


## Pre-requisite

- Create account in [PayPay Developer Dashboard](https://miniapps.paypay.ne.jp/account/signup), and register your app.

- Follow [this page](https://qiita.com/h-takauma/items/d031acc8e7a425da9a68), and retrieve your credentials:

  - API key

  - Secret

  - Merchant ID


## How to test payment via this application

- Get app(once).

  - `$ git clone https://github.com/dotnsf/paypayapi.git`

- Edit settings.js with your API Key, Secret, and Merchant ID which are retrieved above.

  - Edit productionMode too, **only if this is production mode**.

- Install libraries(once).

  - `$ npm install`

- Run this app.

  - `$ node app`

- Open **PayPay** app with developer sandbox mode.

  - Open **PayPay** app in your smartphone.

    - If you already logged into PayPay, then logout once. And reopen app.

  - Tap upper-left **PayPay** logo **7** times.

  - You can select `login as developer mode`.

  - Select test user in your [PayPay Developer Dashboard](https://miniapps.paypay.ne.jp/dashboard/home), and log in as that user.

  - When asked for 4 digit code, input **1234**.

- Browse app.

  - Open `http://localhost:8080` with your browser.

- Create QRCode

  - Input amount(JPY) and description, and click `支払い` button.

  - You will see QRCode of PayPay.

- Complete your payment with developer sandbox mode.

  - Scan QRCode above in your PayPay app with sandbox mode.

  - Complete your payment.

  - Check user's account valance in your PayPay Developer Dashboard.


## References

https://github.com/paypay/paypayopa-sdk-node

https://www.paypay.ne.jp/opa/doc/v1.0/dynamicqrcode

https://miniapps.paypay.ne.jp/products/docs

https://qiita.com/h-takauma/items/d031acc8e7a425da9a68


## Copyright

2020 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
