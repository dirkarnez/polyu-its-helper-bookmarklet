// MyLibrary.hello("dsf")
declare global {
  interface Document {
    customProperty?: string;
    customMethod?(): void;
  }
}


// document.querySelector("#question-list > div:nth-child(5) span").innerText

export function main(name: string, hasVisualizer: boolean, hasCeilingMic: boolean, hasLecternLamp: boolean) {
  const nthQuestionInput = (nth: number): HTMLElement | null => document.querySelector(`#question-list > div:nth-child(${nth}) input`);
  
  [
    {
      index: 2,
      data: "Alex"
    },
    {
      index: 3,
      data: "Alex"
    }
  ].forEach(({index, data}) => {
    const element = nthQuestionInput(index) as HTMLInputElement;

    if (!element) {
      alert("This script is outdated")
    } else {
      data.split("").forEach(character => {
        const event = new KeyboardEvent('keydown', {
            key: character,
            code: `Key${character.toUpperCase()}`,
            keyCode: character.charCodeAt(0),
            bubbles: true,
        });
        element.dispatchEvent(event);
        element.value += character;
        element.dispatchEvent(new Event('input', { bubbles: true }));
      });
    }
  });
  
  
  // const input = nthQuestion(0);
  // const input = nthQuestion(0);
  // const input = nthQuestion(0);
  // const input = nthQuestion(0);
}

/*
const element = document.querySelector(`#question-list > div:nth-child(3) input`)
const event = new KeyboardEvent('keydown', {
    code: 'Enter',
    key: 'Enter',
    charCode: 13,
    keyCode: 13,
    view: window,
    bubbles: true
})
element.dispatchEvent(event);

setTimeout(() => {
    document.activeElement.dispatchEvent(new KeyboardEvent('keydown', {
    code: 'Enter',
    key: 'Enter',
    charCode: 13,
    keyCode: 13,
    view: window,
    bubbles: true
}));
document.activeElement.dispatchEvent(new Event('input', { bubbles: true }));
}, 200)
*/