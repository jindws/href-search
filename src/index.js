function search(key){
    const re = eval("/" + key + "\=([^&]*)/;");
    const forsearch = location.search+'&'+location.hash.substring(2);
    return  re.exec(forsearch)?decodeURI(re.exec(forsearch)[1]):''
}

export default search;
