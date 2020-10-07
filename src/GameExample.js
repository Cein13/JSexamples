function words(noun, adjective, verb, adverb){
    let result ="";
    result += "The" + " " +  adjective + " " + noun + " " + verb + " " + adverb;
    return result;
}
 console.log(words("cat", "little", "jump", "high."));
 console.log(words("dog", "big", "bite", "hard."));