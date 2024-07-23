const extension = "/";

const extensionObj = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain",
};
// console.log(extensionObj[extension] || "text/html");

const map = new Map();
map.set(".css", "text/css");
map.set(".json", "application/json");
console.log(map.get(extension) || "text/html");
