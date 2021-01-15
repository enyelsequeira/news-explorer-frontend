/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable prefer-promise-reject-errors */
import { APIAUTH, WEEKSAGO } from './utils';

class NewsApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._today = new Date();
  }

  _getLastWeek() {
    this._lastWeek = new Date(new Date().getTime() - WEEKSAGO);
    return this._lastWeek;
  }

  _getTodayDisplay() {
    const day = this._today.getDate();
    const month = this._today.getMonth() + 1;
    const year = this._today.getFullYear();
    this._todayDisplay = `${year}-${month}-${day}`;
    return this._todayDisplay;
  }

  _getLastWeekDisplay() {
    this._lastWeek = this._getLastWeek();
    const lastWeekYear = this._lastWeek.getFullYear();
    const lastWeekMonth = this._lastWeek.getMonth() + 1;
    const lastWeekDay = this._lastWeek.getDate();
    this._lastWeekDisplay = `${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}`;
    return this._lastWeekDisplay;
  }

  async getArticles(keyword) {
    return fetch(`${this._baseUrl}/v2/everything?q=${keyword}&from=${this._getLastWeekDisplay()}&to=${this._getTodayDisplay()}&pageSize=100&apiKey=${APIAUTH}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Error!${res.status}${res.statusText}`)))
      .then((res) => res.articles);
  }
}

// ? these are the same i dont know what you want
// https://nomoreparties.co/news/v2/everything?q=js=time&from=NaN-NaN-NaN&to=2021-1-13&pageSize
// everything?q=js&from=NaN-NaN-NaN&to=2021-1-12

const newsApi = new NewsApi('https://nomoreparties.co/news');

export default newsApi;
