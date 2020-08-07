const defaultOptions = {
  method: "get",
};

let options;
export default (opts) => {
  options = mergeOptions(opts);

  const xhr = new XMLHttpRequest();
  xhr.open(options.method, getUrl());
  xhr.onload = handleLoad

  if (!isGetMethod()) xhr.setRequestHeader("content-type", "application/json");
  xhr.send(getBody());
};

function handleLoad (e) {
    options.success(JSON.parse(e.target.response));
}

function getBody() {
  if (isGetMethod()) {
    return null;
  } else {
    return JSON.stringify(options.data);
  }
}

function getUrl() {
  // get
  if (isGetMethod()) {
    const querystring = objToQuerystring(options.data);
    return options.url + "?" + querystring;
  } else {
    // post
    return options.url;
  }
}

function isGetMethod() {
  return options.method === "get";
}


function mergeOptions(opts) {
  return Object.assign({}, defaultOptions, opts);
}

function objToQuerystring(obj) {
  // {name:"xiaohong",age:10}
  // url?name=xiaohong&age=10

  let result = "";

  for (const key in obj) {
    const val = obj[key];
    result += key + "=" + val + "&";
  }

  result = result.slice(0, -1);
  return result;
}
