
export function readTime(number){
    return  Math.round(number/250);
}

export function removeHtml(string){
    return string.replace( /(<([^>]+)>)/ig, '');
}

export function wordsLimit(string,length){
    const regex = new RegExp("^(.{" + length + "}[^\s]*).*");
    return string.replace(regex, "$1");
}