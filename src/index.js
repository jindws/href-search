function search(key,forsearch=location.search+'&'+location.hash.substring(2)){
    if(window.URLSearchParams){
      const start = forsearch.indexOf('?');
      if(start!==-1){
          forsearch = forsearch.substring(start)
      }
      const se = new URLSearchParams(forsearch);
      return se.get(key)||'';
    }else{
      const re = eval("/" + key + "\=([^&]*)/;");
      return re.exec(forsearch)?decodeURI(re.exec(forsearch)[1]):''
    }
}

export default search;
