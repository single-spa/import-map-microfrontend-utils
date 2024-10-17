export class ImportMapMicrofrontendUtils {
  declare baseOrigin: string;

  constructor(init: Init) {
    if (init.baseOrigin.endsWith("/")) {
      throw Error(`baseOrigin must not end with slash`);
    }

    this.baseOrigin = init.baseOrigin;
  }

  getMicrofrontendURLPrefix(microfrontendName: string): string {
    return (
      this.baseOrigin +
      `/${this.getMFEsFolderName()}/` +
      microfrontendName.replace(/@/g, "").replace(/\//, "-") +
      "/"
    );
  }

  getDependenciesURLPrefix(): string {
    return this.baseOrigin + `/${this.getDependenciesFolderName()}/`;
  }

  getDependenciesFolderName() {
    return "deps";
  }

  getMFEsFolderName() {
    return "mfes";
  }
}

interface Init {
  baseOrigin: string;
}
