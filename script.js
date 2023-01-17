const textArea = document.querySelector('textarea')
const playButton = document.querySelector('button')
const pitchBar = document.querySelector('input')
const duckFigure = document.querySelector('figure')


// Control what happens when button is clicked
// When clicked, check if there is text in the input field
playButton.addEventListener('click', function () {
    const textLength = textArea.value.trim().length
    if (textLength > 0) {
        speak()
    }
})

// Function to make the duck talk!
function speak() {
    // Retrieve text and audio values
    const text = textArea.value
    const pitch = pitchBar.value

    // Initialiase a new utterance
    const utterance = new SpeechSynthesisUtterance(text)

    // utterance.volume = 1 // 0 - 1
    // utterance.rate = 0.5; // 0.1 - 10

    // set the pitch level
    utterance.pitch = pitch // 0 - 2

    // Make the duck talk
    speechSynthesis.speak(utterance)

    // When the duck begins to speak...
    utterance.addEventListener('start', function () {
        textArea.disabled = true
        pitchBar.disabled = true
        playButton.disabled = true
        duckFigure.classList.add('talking')
    })

    // When the duck has finished...
    utterance.addEventListener('end', function () {
        textArea.disabled = false
        pitchBar.disabled = false
        playButton.disabled = false
        duckFigure.classList.remove('talking')
    })
}
