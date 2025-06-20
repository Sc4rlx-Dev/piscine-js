function words(str) {
    return str.split(" ")

}

function sentence(arr) {
    return arr.join(" ")
}

function yell(str){
    return str.toUpperCase()
}

function whisper(){
    return "*" + str.toLowwerCase() +"*"
}

function capitalize(str) {
    return yell(str[0]) + str.slice(1).toLowerCase();
}

// console.log(sentence(["test", "nono"]));
