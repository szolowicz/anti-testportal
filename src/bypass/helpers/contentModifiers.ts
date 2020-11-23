// Thanks, https://github.com/gbaranski

export const getQuestionGoogleQueryURL = (query: string): string =>
  `https://google.com/search?q=${query}`;

export const getQuestionElement = (): Element => {
  return document?.querySelector(
    '#questionForm > div > div.question-container > div.question_essence > p'
  );
};

const doesContainHTMLTags = (str: string): boolean => {
  const re = RegExp(/(<([^>]+)>)/i);
  return re.test(str);
};

export const modifyQuestionToHref = (question: Element, href: string): void => {
  if (doesContainHTMLTags(question.innerHTML)) return;
  question.innerHTML = `<a href="${encodeURI(href)}" target="__blank">${
    question.innerHTML
  }</a>`;
};
