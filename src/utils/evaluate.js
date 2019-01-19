function evaluate(data, name) {
  if (data) {
    return data;
  } else {
    return `No ${name} found`;
  }
}

function evaluateImage(data) {
  if (data) {
    return data.thumbnail;
  } else {
    return 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
  }
}

export {evaluate, evaluateImage};
