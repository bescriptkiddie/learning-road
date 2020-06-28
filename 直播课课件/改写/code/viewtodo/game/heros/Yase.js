import Hero from './Hero.js'
import S11610 from '../skills/yase/s16610.js'
import S11620 from '../skills/yase/s16620.js'
import S11630 from '../skills/yase/s16630.js'
import Skin1 from '../skins/yase/Skin1.js'
import Skin2 from '../skins/yase/skin2.js'
import Skin3 from '../skins/yase/Skin3.js'
export default class Yase extends Hero {
  constructor() {
    super(
      '亚瑟',
      [new S11610(), new S11620(), new S11630()],
      'sources/heros/yase1.png',
    )
    this.skins = [new Skin1(), new Skin2(), new Skin3()]
  }
}
