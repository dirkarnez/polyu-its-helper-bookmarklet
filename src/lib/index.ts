// MyLibrary.hello("dsf")
declare global {
  interface Document {
    customProperty?: string;
    customMethod?(): void;
  }
}
const nthQuestion = nth => document.querySelector(`#question-list > div:nth-child(${nth}) input`);

// document.querySelector("#question-list > div:nth-child(5) span").innerText

export function main(name: string, hasVisualizer: boolean, hasCeilingMic: boolean, hasLecternLamp: boolean) {
  alert(name);
  const input = nthQuestion(0);
  const input = nthQuestion(0);
  const input = nthQuestion(0);
  const input = nthQuestion(0);
}
