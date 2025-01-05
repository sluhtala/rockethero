import keycode from "keycode";
import P5 from "p5";

export class InputKey {
  size = 40;

  constructor(
    private p: P5,
    private key: keyof typeof keycode.codes,
    private keyStr: string,
  ) {}

  renderKey(x: number, y: number) {
    //keycode.codes[this.key]

    if (this.p.keyIsDown(keycode.codes[this.key] as number)) {
      this.p.fill(140, 140, 140, 255);
    } else {
      this.p.fill(255, 255, 255, 255);
    }
    this.p.stroke(0, 0, 0);
    this.p.rect(x, y, this.size);

    this.p.noStroke();
    this.p.fill(0, 0, 0, 255);
    this.p.textAlign("center");

    const textSize = 20;
    this.p.textSize(textSize);
    this.p.text(this.keyStr, x, y + this.size / 2 - textSize / 2, this.size);
  }
}
