/**
 * Function that scrolls an element into the visible area of the browser window.
 *
 * @param selector - A string containing one or more selectors to match. This string must be a valid CSS selector string.
 * @param smooth - Determines whether scrolling animates smoothly or is instant. Defaults to true.
 */

export function scrollTo(selector: string, smooth = true) {
  if (!selector || typeof selector !== 'string') {
    throw new Error('Please provide a valid CSS selector string');
  }

  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start',
      inline: 'nearest',
    });
  }
}
