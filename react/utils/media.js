var path =
  document.location.origin == "http://localhost:8080"
    ? "../public/static/"
    : "../static/";

function get_media_path(resource) {
  const fp = path + resource;
  return fp;
}
var media = {
  mediaPath: function(resource) {
    return get_media_path(resource);
  }
};

module.exports = media;
