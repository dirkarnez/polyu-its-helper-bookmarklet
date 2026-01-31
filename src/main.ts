
// hasVisualizer
// hasCeilingMic
// hasLecternLamp
const rooms = [
  "SHA030",
  "SHA101",
  "SHA102",
  "SHA103",
  "SHA104",
  "SHA105",
  "SHA106",
  "SHA107",
  "SHA108",
  "SHA109",
  "HHBUG01",
  "HHBUG03",
  "HHBUG04",
  "HHBUG05",
  "HHBUG06",
  "HHBUG09",
  "HHBUG10",
  "HHBUG11",
  "HHBUG12",
  "HHBUG13",
  "HHB101",
  "HHB105",
  "HHB106",
  "HHB107",
  "HHB109",
  "HHB110",
  "HHB201",
];

((document: HTMLDocument) => {
  const element = document.querySelector("#question-list > div:nth-child(2)");
  if (element) {
    const intputElementCollection: HTMLCollectionOf<HTMLInputElement> = element.getElementsByTagName("input");
    if (intputElementCollection.length == 1) {
      const c: HTMLInputElement = intputElementCollection[0];
      c.value = `123`;
    }
  }
})(document)
