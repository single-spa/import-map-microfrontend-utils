import { describe, expect, it } from "@jest/globals";
import { ImportMapMicrofrontendUtils } from "./import-map-microfrontend-utils";

describe(`getMicrofrontendURLPrefix`, () => {
  it(`can process unscoped packages`, () => {
    const utils = new ImportMapMicrofrontendUtils({
      baseOrigin: "https://cdn.example.com",
    });
    expect(utils.getMicrofrontendURLPrefix("root-config")).toMatchSnapshot();
    expect(utils.getMicrofrontendURLPrefix("navbar")).toMatchSnapshot();
    expect(utils.getMicrofrontendURLPrefix("left_nav")).toMatchSnapshot();
  });

  it(`can process scoped packages`, () => {
    const utils = new ImportMapMicrofrontendUtils({
      baseOrigin: "https://cdn.example.com",
    });
    expect(
      utils.getMicrofrontendURLPrefix("@org/root-config"),
    ).toMatchSnapshot();
    expect(
      utils.getMicrofrontendURLPrefix("@org-name/navbar"),
    ).toMatchSnapshot();
    expect(
      utils.getMicrofrontendURLPrefix("@org_name/left_nav"),
    ).toMatchSnapshot();
  });
});

describe(`getDependenciesURLPrefix`, () => {
  it(`returns url with trailing slash`, () => {
    const utils = new ImportMapMicrofrontendUtils({
      baseOrigin: "https://cdn.example.com",
    });
    expect(utils.getDependenciesURLPrefix()).toMatchSnapshot();
  });
});
