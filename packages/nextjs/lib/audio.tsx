export function isPuncutation(char: string) {
  return char === "." || char === "," || char === "!" || char === "?";
}

export async function playAudio(text: string, audio: AudioContext) {
  async function randomNoise(punctuationDelay: boolean) {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    gain.connect(audio.destination);

    oscillator.type = "sawtooth";
    oscillator.frequency.value = 500 - Math.random() * 100;
    oscillator.connect(gain);
    gain.gain.value = 0.05;
    oscillator.start();
    await new Promise(resolve => setTimeout(resolve, 45));
    oscillator.stop(); // Adjust the duration as desired
    if (punctuationDelay) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  for (const char of text) {
    await randomNoise(isPuncutation(char));
  }
}

export function audioTime(text: string) {
  return text.split("").reduce((acc, char) => {
    if (isPuncutation(char)) {
      return acc + 500;
    } else {
      return acc + 45;
    }
  }, 0);
}
