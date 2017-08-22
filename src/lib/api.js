class Api {
  static headers() {
    return {
      Accept: 'application/json',
      ContentType: 'application/json',
      dataType: 'json',
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const options = Object.assign({ method: verb },
      params ? { body: JSON.stringify(params) }
      : null,
    );
    options.headers = Api.headers();
    return fetch(route, options).then(resp => resp.json());
  }
}

export default Api;
