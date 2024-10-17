# import-map-microfrontend-utils

Utility types and functions for import-map-microfrontend related projects

## Installation

```sh
npm i @single-spa/import-map-microfrontend-utils
```

## Usage

```ts
import { ImportMapMicrofrontendUtils } from "@single-spa/import-map-microfrontend-utils";

const utils = new ImportMapMicrofrontendUtils({
  baseOrigin: "https://cdn.example.com",
});

utils.getMicrofrontendURLPrefix("@org/navbar");
utils.getDependenciesURLPrefix();
utils.getDependenciesFolderName();
utils.getMFEsFolderName();
```
