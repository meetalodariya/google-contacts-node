import axios, { Method } from "axios";

export default class Axios {
  constructor(
    public url: string,
    public method: Method,
    public body: object | null,
    public headers: object
  ) {
    this.url = url;
    this.method = method;
    this.body = body || null;
    this.headers = headers;
  }

  async send() {
    let res = await axios({
      method: this.method,
      data: this.body,
      url: this.url,
      headers: this.headers,
    });
    return res.data;
  }
}
