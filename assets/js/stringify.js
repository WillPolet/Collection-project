export const stringify = (a) => {
    a = a.trim()
    var strArray = a.split(" ");
    for (let i = 0 ; i < strArray.length ; i ++){
        if (strArray[i] == strArray[i+1]){
            delete strArray[i]
        }
        if (strArray[i] == " " && strArray[i+1] == ","){
            delete strArray[i]
        }
    }
    var tab = strArray.filter(elm => elm)
    var sentence = tab.join("")
    return sentence
}

// export default stringify()