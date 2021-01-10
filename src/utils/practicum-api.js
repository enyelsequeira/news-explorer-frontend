/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-promise-reject-errors */
class MainBackend {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  saveArticles({
    keyword, title, text, date, source, link, image,
  }) {
    return fetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(`error${res.statusText}`)));
  }

  getSavedArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
    }).then((res) => {
      console.log(res, 'from api');
      if (res.ok) {
        // console.log(res, 888);
        return res.json();
      }
      return Promise.reject(`Error! cardlist${res.status}${res.statusText}`);

      // res.ok
      //   ? res.json()
      //   :
    });
  }

  removeArticle(articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      console.log(res, 'this is from deleteing');
      (res.ok ? res.json() : Promise.reject(`error!${res.status}${res.statusText}`));
    });
  }
}

export default MainBackend;
