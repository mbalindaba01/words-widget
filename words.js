const Words = () => {
    let sentence = ''
    let wordArray = []
    let elemArray = []
    let sentArray = []

    const setSentence = (words) => {
        sentence = words
    }

    const getSentence = () => {
        return sentence
    }

    const setWordArray = () => {
        wordArray = sentence.split(' ')
    }

    const getWordArray = () => {
        return wordArray
    }

    const createElems = (parent) => {
       for(let i = 0; i < getWordArray().length; i++){
           let word = getWordArray()[i]
           let elem = document.createElement('span')
           elem.innerHTML = word
           elemArray.push(elem)
           parent.appendChild(elem)
       }
    }

    const emptyElems = () => {
        elemArray = ''
    }

    const getElems = () => {
        return elemArray
    }

    const isLongWord = (word) => {
        if(word.length > 4){
            return true
        }
    }

    const addClasses = () => {
        for(let i = 0; i < getElems().length; i++){
            let elem = getElems()[i]
            if(isLongWord(elem.innerHTML)){
                elem.setAttribute('class', 'long')
            }
        }
    }

    const longestWord = () => {
        let longestWord = ''
        for(let i = 0; i < getWordArray().length; i++){
            if(getWordArray()[i].length > longestWord.length){
                longestWord = getWordArray()[i]
            }
        }
        return longestWord.length
    }

    const allLongWords = () => {
        for(let i = 0; i < getElems().length; i++){
            let elem = getElems()[i]
            if(elem.innerHTML.length == longestWord()){
                elem.classList.add('longest') 
            }
        }
    }

    const addHide = () => {
        for(let i = 0; i < getElems().length; i++){
            let elem = getElems()[i]
            if(!elem.classList.contains('long')){
                elem.setAttribute('class', 'hide')
            }
        }
    }

    const removeHide = () => {
        for(let i = 0; i < getElems().length; i++){
            let elem = getElems()[i]
            if(elem.classList.contains('hide')){
                elem.classList.remove('hide')
            }
        }
    }

    const lastFive = (parent) => {
        sentArray.push(getSentence())
        let currSentence = document.createElement('p')
        parent.appendChild(currSentence)
        currSentence.innerHTML = getSentence()
        if(sentArray.length > 4){
            sentArray.shift()
            parent.removeChild(parent.firstChild)
        }
    }

    const getLastFive = () => {
        console.log(sentArray)
    }

    return {
        setSentence,
        getSentence,
        setWordArray,
        getWordArray,
        createElems,
        getElems,
        isLongWord,
        addClasses,
        longestWord,
        allLongWords,
        addHide,
        removeHide,
        emptyElems,
        lastFive,
        getLastFive, 
    }
}