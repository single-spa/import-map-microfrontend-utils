export function microfrontendNameToFolderName(
  microfrontendName: string,
): string {
  return microfrontendName.replace(/@/g, "").replace(/\//, "-");
}
