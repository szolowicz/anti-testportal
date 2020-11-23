// Thanks, https://github.com/gbaranski

export const getQuestionGoogleQueryURL = (query: string): string =>
  `https://google.com/search?q=${query}`;

export const getQuestionElement = (): Element => {
  return document?.querySelector(
    '#questionForm > div > div.question-container > div.question_essence > p'
  );
};

export const modifyQuestionToHref = (question: Element, href: string): void => {
  question.innerHTML = `<a href="${encodeURI(href)}" target="__blank">${
    question.innerHTML
  }</a>`;
};
