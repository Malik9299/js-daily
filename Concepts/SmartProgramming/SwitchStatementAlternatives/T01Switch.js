const extension = ".css";

let contentType;

switch (extension) {
  case ".css":
    contentType = "text/css";
    break;
  case ".js":
    contentType = "text/javascript";
    break;
  case ".json":
    contentType = "application/json";
    break;
  case ".jpg":
    contentType = "image/jpeg";
    break;
  case ".png":
    contentType = "image/png";
    break;
  case ".txt":
    contentType = "text/plain";
    break;
  default:
    contentType = "text/html";
}
// The code is huge and bulky
// The switch statement is usefull whe we study fundamentals
// The most experience developers try to avoid the switch statement when they can
