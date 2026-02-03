
import("./lib/index").then(a => {
  debugger;
  console.log(`${a.main}`)
});

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
        return `${this.hasVisualizer} ${this.hasCeilingMic} ${this.hasLecternLamp}`;
    }
}

const rooms: Room[] = [
  new Room({name: "SHA030", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA101", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA102", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA103", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA104", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA105", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA106", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA107", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA108", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "SHA109", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG01", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG03", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
  new Room({name: "HHBUG04", hasVisualizer: false, hasCeilingMic: true, hasLecternLamp: false }),
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

((document: HTMLDocument) => {
  // download script here
  // SHA
  // HHB Ground floor
  // HHB 1st floor
  // HHB 2nd floor
  rooms.forEach(room => {
    const div = document.createElement("div");
    div.innerText = room.toString();
    document.body.append(div);
  })
})(document)
