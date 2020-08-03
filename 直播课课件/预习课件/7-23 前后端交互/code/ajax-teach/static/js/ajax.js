// options

const GET = "GET";
const defaultOptions = {
  method: GET,
};

let xhr;
let options;
export default function ajax(opts) {
  initOptions(opts);

  xhr = new XMLHttpRequest();
  xhr.open(options.method, getUrl());
  xhr.onload = handleLoad;
  xhr.send(getBody());
}

function initOptions(opts) {
  options = Object.assign({}, defaultOptions, opts);
  options.method = options.method.toUpperCase();
}

function getUrl() {
  if (isGetMethod()) {
    const queryString = objectToQueryString(options.data);
    return options.url + "?" + queryString;
  }

  return options.url;
}

function isGetMethod() {
  return options.method === GET;
}

function objectToQueryString(obj) {
  // queryString
  // data:{name:"h",age:20} -> name=h&age=20
  return Object.keys(obj)
    .reduce((result, key) => {
      const val = obj[key];
      return (result += key + "=" + val + "&");
    }, "")
    .slice(0, -1);
}

function handleLoad(e) {
  if (options.success && typeof options.success === "function") {
    options.success(JSON.parse(e.target.response));
  }
}

function getBody() {
  if (isGetMethod()) return null;

  xhr.setRequestHeader("content-type", "application/json");
  return JSON.stringify(options.data);
}
