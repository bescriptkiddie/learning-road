// 组织逻辑

//  英雄对象；  技能  ； 皮肤； 玩家对象；
// 亚瑟  鲁班  王昭君  -->  继承 Hero(基类)

import Game from './game/game.js'
let game = new Game()

// 节点获取；

let eles = {
  login: {
    loginBtn: document.querySelector('.sub'),
    username: document.querySelector('.username'),
    loginView: document.querySelector('.login'),
  },
  game: {
    gameView: document.querySelector('.game'),
    heroView: document.querySelector('.heroView'),
    chioseusername: document.querySelector('.chioseusername'),
    heroShow: document.querySelector('.heroShow'),
    skillsView: document.querySelector('.skillsView'),
    skinShow: document.querySelector('.skinShow'),
    heroBtn: document.querySelector('.heroBtn'),
    skinBtn: document.querySelector('.skinBtn'),
    skinContainer: document.querySelector('.skinContainer'),
    skinView: document.querySelector('.skinView'),
    skinShow: document.querySelector('.skinShow'),
  },
}
eles.login.loginBtn.onclick = function () {
  let username = eles.login.username.value
  if (username) {
    // 登录；
    // console.log(username)
    game.login(username)
    console.log(game)
    // 隐藏登录页面
    eles.login.loginView.style.display = 'none'
    // 显示游戏页面
    eles.game.gameView.style.display = 'block'
    // 修改玩家名称；
    eles.game.chioseusername.innerHTML = username
    // 渲染英雄；
    renderHero()
  }
}

function renderHero() {
  let heros = game.player.heros
  eles.game.heroView.innerHTML = ''
  heros.forEach((hero) => {
    // 创建节点
    let heroItem = document.createElement('div')
    heroItem.classList.add('heroItem')
    heroItem.innerHTML = ` <img src="${hero.ico}" />
        <span>${hero.name}</span>`
    heroItem.onclick = function () {
      eles.game.heroShow.innerHTML = ''
      eles.game.skinShow.innerHTML = ''
      let img = new Image()
      img.src = hero.ico
      let img2 = new Image()
      img2.src = hero.skins[0].img
      //修改选中图标
      eles.game.heroShow.appendChild(img)
      //   console.log(hero.skins[0])
      eles.game.skinShow.appendChild(img2)
      console.log('渲染技能', hero)
      //   renderSkins(hero)
      renderIco(hero)
      renderSkills(hero)
    }
    eles.game.heroView.appendChild(heroItem)
  })
}

function renderSkills(hero) {
  // 渲染dom
  let skills = hero.skills
  eles.game.skillsView.innerHTML = ''
  skills.forEach((skill) => {
    let img = new Image()
    img.src = skill.ico
    eles.game.skillsView.appendChild(img)
  })
}

//这里需要根据事件触发的顺序去写逻辑
function renderIco(hero) {
  eles.game.skinView.innerHTML = ''
  let skins = hero.skins
  skins.forEach((skin) => {
    let skinEle = document.createElement('div')
    skinEle.classList.add('skinItem')
    skinEle.innerHTML = `<img src="${skin.ico}" />
      <span>${skin.name}</span>`
    eles.game.skinView.appendChild(skinEle)
    skinEle.onclick = function () {
      eles.game.skinShow.innerHTML = ''
      let img = new Image()
      img.src = skin.img
      eles.game.skinShow.appendChild(img)
    }
  })
}

eles.game.heroBtn.onclick = function () {
  eles.game.heroView.style.display = 'flex'
  eles.game.skinContainer.style.display = 'none'
}

eles.game.skinBtn.onclick = function () {
  eles.game.heroView.style.display = 'none'
  eles.game.skinContainer.style.display = 'block'
}
