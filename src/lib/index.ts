export async function main(roomName: string, hasVisualizer: boolean, hasCeilingMic: boolean, hasLecternLamp: boolean, numberOfWirelessMics: number) {
  const delay = (): Promise<void> => new Promise((res) => {
      setTimeout(() => {
          console.log("delay");
          res();
      }, 2000);
  });

  const nthQuestionInput = (nth: number): HTMLElement | null => document.querySelector(`#question-list > div:nth-child(${nth}) input`);
  
  const outdateAlert = () => {
    alert("This script is outdated");
  };

  const submit = () => {
    const submitButtons = Array.from(document.getElementsByTagName("button")).filter(btn => `${btn.innerText}`.toUpperCase() == "SUBMIT");
    if (Array.isArray(submitButtons) && submitButtons.length == 1) {
      submitButtons[0].click();
    } else {
      outdateAlert();
    }
  }

  const monitor = () => {
    var elementToObserve = document.querySelector(`#question-list`);

    if (!!elementToObserve) {
      var observer = new MutationObserver(function () {
        console.log("callback that runs when observer is triggered");
      });

      observer.observe(elementToObserve, { subtree: true, childList: true });
    }
  }
  
  [
    {
      index: 2, /* Your name */
      data: "Alex"
    },
    {
      index: 4, /* Room number*/
      data: `${roomName}`
    }
    {
      index: 5, /* Reporting type */
      /* document.querySelectorAll(`#question-list > div:nth-child(5) input`)[1].click() 
      document.querySelectorAll(`#question-list > div:nth-child(6) to 12`)
      */
    }
  ].forEach(({index, data}) => {
    const element = nthQuestionInput(index) as HTMLInputElement;

    if (!element) {
      outdateAlert();
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
}

