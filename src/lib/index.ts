// MyLibrary.hello("dsf")
// declare global {
//   interface Document {
//     customProperty?: string;
//     customMethod?(): void;
//   }
// }

export function main(name: string, hasVisualizer: boolean, hasCeilingMic: boolean, hasLecternLamp: boolean) {
  alert(name);
  const element = document.querySelector("#question-list > div:nth-child(2)");
  if (element) {
    const intputElementCollection: HTMLCollectionOf<HTMLInputElement> = element.getElementsByTagName("input");
    if (intputElementCollection.length == 1) {
      const c: HTMLInputElement = intputElementCollection[0];
      c.value = `123`;
    }
  }
}
