interface IRoom {
  name: string,
  hasVisualizer: boolean,
  hasCeilingMic: boolean,
  hasLecternLamp: boolean
}

class Room extends Object implements IRoom {
    public name: string;
    public hasVisualizer: boolean;
    public hasCeilingMic: boolean;
    public hasLecternLamp: boolean;

    constructor(room: IRoom) {
        super();
        this.name = room.name;
        this.hasVisualizer = room.hasVisualizer;
        this.hasCeilingMic = room.hasCeilingMic;
        this.hasLecternLamp = room.hasLecternLamp;
    }

    override toString () {
        return `${this.name} (visualizer: ${this.hasVisualizer} ceiling mic: ${this.hasCeilingMic} lectern lamp: ${this.hasLecternLamp})`;
    }
}


const rooms: Room[] = [
  new Room({name: "SHA030", hasVisualizer: true, hasCeilingMic: false, hasLecternLamp: false }),
  new Room({name: "SHA101", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "SHA102", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: true, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "SHA103", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA104", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA105", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "SHA106", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "SHA107", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA108", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "SHA109", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "HHBUG01", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG03", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG04", hasVisualizer: false, hasCeilingMic: false, hasLecternLamp: false, confirmed: true, numberOfWirelessMics: 2 }),
  new Room({name: "HHBUG05", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG06", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG09", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG10", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG11", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG12", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG13", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB101", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB105", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB106", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB107", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB109", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB110", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHB201", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
];

const textToObjectURL = (content: string): string => {
  return URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
};


(async (document: HTMLDocument) => {
  const module = await import("./lib/index");
  // main(name: string, hasVisualizer: boolean, hasCeilingMic: boolean, hasLecternLamp: boolean) {
  const scriptContent = `${module.main}`;
  
  // download script here
  // SHA
  // HHB Ground floor
  // HHB 1st floor
  // HHB 2nd floor
  {
    const div = document.createElement("div");
  }
  {

  }
  {

  }
  {
    const a = document.createElement("a");
    a.innerText = "MS Form";
    a.href = `https://forms.office.com/pages/responsepage.aspx?id=YPc3j4exgUm4L-Xcb1vPRLIJd97ywmRAhyrhdPw8yBNUNk9QNVVFRVRYV1RKWFY4RFJMUEtSNTVVVi4u`;
    document.body.append(a);
    document.body.append(document.createElement("br"));
  }
  
  rooms.forEach(room => {
    const a = document.createElement("a");
    a.innerText = room.toString();
    a.href = textToObjectURL(`[InternetShortcut]
URL=javascript:(() => {${scriptContent.replaceAll("\n", "")}; ${module.main.name}("123", false, false); })();`);
    a.download = "bookmark.url";
    a.addEventListener("click", (e) => {
        setTimeout(() => {
          URL.revokeObjectURL(a.href);
        }, 0);
    })
    document.body.append(a);
    document.body.append(document.createElement("br"));
  })
})(document)
