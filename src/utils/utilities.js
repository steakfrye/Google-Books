function lookFor(data, name) {
  if (data) {
    if (Array.isArray(data)) {
      return data.join(', ');
    } else {
      return data;
    }
  } else {
    return `No ${name} found`;
  }
}

function lookForImage(data) {
  if (data) {
    return data.thumbnail;
  } else {
    return 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
  }
}

export {lookFor, lookForImage};
