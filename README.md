# notification-ui
An app for showing the capabilities of Cloud Foundry. This is the UI component.

## Installation
1. Install [notification-api](https://github.com/mkretz/notification-api)
2. Clone the repo
```
git clone https://github.com/mkretz/notification-ui.git
cd notification-ui
```
3. Install dependencies
```
npm install
```
4. Run the Webpack build
```
npm run build:prd
```
5. Adapt the environment variable `APP_CONFIG` in `manifest.yml` to point to the base URL of [notification-api](https://github.com/mkretz/notification-api)

4. If required, adapt the `name` attribute in `manifest.yml` to change the app's name.

6. Push the app
```
cf push
```
