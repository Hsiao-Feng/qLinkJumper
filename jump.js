var urlArr = new RegExp("(^|&)pfurl=([^&]*)(&|$)","i");
var result = window.location.search.substr(1).match(urlArr);
var url = decodeURIComponent(result[2]);
if(!(new RegExp("^(http://)|(https://)|(ftp://).*").test(url))){
    url = "http://"+decodeURIComponent(result[2]);
}
window.location.assign(url);