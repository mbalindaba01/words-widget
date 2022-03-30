//reference DOM elements 
const sentence = document.querySelector('#sentence')
const button = document.querySelector('#submit')
const container = document.querySelector('.sentence')
const wordLength = document.querySelector('.word-length')
const checkbox = document.querySelector('#show')
const latestSentences = document.querySelector('.latest-sentences')
const wordsFactory = Words()

button.addEventListener('click', () => {
    container.innerHTML = ''
    wordsFactory.setSentence(sentence.value)
    wordsFactory.lastFive(latestSentences)
    wordsFactory.setWordArray()
    wordsFactory.createElems(container)
    wordsFactory.addClasses()  
    wordsFactory.allLongWords()
    sentence.value = ''
    wordsFactory.getLastFive()
    wordLength.innerHTML = 'There are ' + wordsFactory.getWordArray().length + ' words in this sentence.'
})

checkbox.addEventListener('click', () => {
    if(checkbox.checked){
        wordsFactory.addHide()
    }else {
        wordsFactory.removeHide()
        wordsFactory.allLongWords()
    }
})
