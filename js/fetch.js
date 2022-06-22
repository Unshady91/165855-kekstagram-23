import { getPreviews } from './previews.js';
import { fetchComments } from './set-comment.js';

function fetchData() {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        const {
          statusText,
          status,
        } = response;
        throw new Error(`${status} - ${statusText}`);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      getPreviews(data);
      fetchComments(data);
    });
}

export { fetchData };
