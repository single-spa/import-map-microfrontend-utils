import { describe, expect, it } from "@jest/globals";
import { microfrontendNameToFolderName } from "./import-map-microfrontend-utils";

describe(`microfrontendNameToFolderName`, () => {
  it(`can process unscoped packages`, () => {
    expect(microfrontendNameToFolderName("root-config")).toMatchSnapshot();
    expect(microfrontendNameToFolderName("navbar")).toMatchSnapshot();
    expect(microfrontendNameToFolderName("left_nav")).toMatchSnapshot();
  });

  it(`can process scoped packages`, () => {
    expect(microfrontendNameToFolderName("@org/root-config")).toMatchSnapshot();
    expect(microfrontendNameToFolderName("@org-name/navbar")).toMatchSnapshot();
    expect(
      microfrontendNameToFolderName("@org_name/left_nav"),
    ).toMatchSnapshot();
  });
});
