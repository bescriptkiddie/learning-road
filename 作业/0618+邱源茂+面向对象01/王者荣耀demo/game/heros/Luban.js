import S11210 from '../skills/luban/S11210.js'
import S11220 from '../skills/luban/S11220.js'
import S11230 from '../skills/luban/S11230.js'

export default class Luban {
  constructor() {
    this.name = '鲁班'
    // 技能
    this.skills = [new S11210(), new S11220(), new S11230()]
    // 皮肤
    this.skins = [
      'sources/skins/301120.png',
      'sources/skins/301121.png',
      'sources/skins/301122.png',
    ]
    this.ico = [
      'sources/heros/luban1.png',
      'sources/heros/luban2.png',
      'sources/heros/luban3.png',
    ]
  }
}
