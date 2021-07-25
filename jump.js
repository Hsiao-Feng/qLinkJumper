let urlArr = new RegExp("(^|&)pfurl=([^&]*)(&|$)","i");
let result = window.location.search.substr(1).match(urlArr);
let TargetUrl = decodeURIComponent(result[2]);
if(!(new RegExp("^(http://)|(https://)|(ftp://).*").test(TargetUrl))){
    TargetUrl = "http://"+decodeURIComponent(result[2]);
}
window.location.assign(TargetUrl);
