# PWA Ionic NG

## Change base URL in functional tests with Cypress

By default, the base Url value set in cypress.json file, if you want to override the value simply:

```
$> CYPRESS_baseUrl=https://staging.app.com cypress run
```