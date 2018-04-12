var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new webkitSpeechRecognition();
var input = document.querySelector('#m')
var microphone = document.querySelector('#hodler')
var feedback = document.querySelector('form')
var button = document.querySelector('form button')

recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
 var whatWasHeard = event.results[0][0].transcript; //g
 input.value = whatWasHeard;
  console.log(whatWasHeard)
}
microphone.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onspeechend = function() {
  recognition.stop();
  feedback.classList.add('active')
}

button.addEventListener('click', function(){
  feedback.classList.remove('active')
})
