/**
 * Waits for the passed amount of ms before next request to prevent 429. Only needed when using CeX's API
 * @param ms
 */
export function waitBeforeNextRequest(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
