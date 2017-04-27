function search(key,forsearch=location.search+'&'+location.hash.substring(2)){
    const re = eval("/" + key + "\=([^&]*)/;");
    // const forsearch = location.search+'&'+location.hash.substring(2);
    return  re.exec(forsearch)?decodeURI(re.exec(forsearch)[1]):''
}

export default search;
