export function getScreenWidth() {
  if (typeof window !== `undefined`) {
    return window.innerWidth;
  }
}

export function isPortrait() {
  if (typeof window !== `undefined`) {
    if (window.innerHeight > window.innerWidth) {
      return true;
    }
    return false;
  }
}

export function isWideScreen() {
  if (typeof window !== `undefined`) {
    const Width = window.innerWidth;
    const mediaQueryL = 1024;

    return windowWidth >= mediaQueryL;
  }
}

export function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}
