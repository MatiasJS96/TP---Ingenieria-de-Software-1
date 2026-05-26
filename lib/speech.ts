// Voice synthesis utilities using Web Speech API

export function speakText(text: string, lang = 'es-ES'): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('Speech synthesis not supported')
    return
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = 0.9 // Slightly slower for clarity
  utterance.pitch = 1
  utterance.volume = 1

  window.speechSynthesis.speak(utterance)
}

export function speakSentence(texts: string[], lang = 'es-ES'): void {
  const sentence = texts.join(', ')
  speakText(sentence, lang)
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
