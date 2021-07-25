if(!(new RegExp("^(http://)|(https://)|(ftp://).*").test(url))){
  window.location.assign("http://"+url);
}else{
  window.location.assign(url);
}
