import Hero from './Hero.js'
import S11210 from '../skills/luban/s11210.js'
import S11220 from '../skills/luban/s11220.js'
import S11230 from '../skills/luban/s11230.js'
import Skin1 from '../skins/luban/Skin1.js'
import Skin2 from '../skins/luban/skin2.js'
import Skin3 from '../skins/luban/Skin3.js'
export default class Luban extends Hero {
  constructor() {
    super(
      '鲁班',
      [new S11210(), new S11220(), new S11230()],
      'sources/heros/luban1.png',
    )
    this.skins = [new Skin1(), new Skin2(), new Skin3()]
  }
}
