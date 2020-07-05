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
    choiseUsername: document.querySelector('.choiseUsername'),
    heroShow: document.querySelector('.heroShow'),
    skinShow: document.querySelector('.skinShow'),
    skillsView: document.querySelector('.skillsView'),
    heroBtn: document.querySelector('.heroBtn'),
    skinBtn: document.querySelector('.skinBtn'),
  },
}
eles.login.loginBtn.onclick = function () {
  let username = eles.login.username.value
  if (username) {
    // 登录；
    console.log(username)
    game.login(username)
    console.log(game)
    // 隐藏登录页面
    eles.login.loginView.style.display = 'none'
    // 显示游戏页面
    eles.game.gameView.style.display = 'block'
    // 修改玩家名称；
    console.log(eles.game.choiseUsername)
    eles.game.choiseUsername.innerHTML = username
    // 渲染英雄；
    renderHero()
  }
}

eles.game.heroBtn.onclick = function () {
  renderHero()
}

eles.game.skinBtn.onclick = function () {
  renderSkins()
}

function renderHero() {
  let heros = game.player.heros
  eles.game.heroView.innerHTML = ''
  heros.forEach((hero) => {
    // 创建节点
    let heroItem = document.createElement('div')
    heroItem.classList.add('heroItem')
    heroItem.innerHTML = ` <img src="${hero.ico[0]}" />
        <span>${hero.name}</span>`
    heroItem.onclick = function () {
      if (!!eles.game.heroShow || !!eles.game.skinShow) {
        eles.game.heroShow.innerHTML = ''
        eles.game.skinShow.innerHTML = ''
      }
      let img = new Image()
      img.src = hero.ico[0]
      let img2 = new Image()
      img2.src = hero.skins[0]
      //修改选中图标
      eles.game.heroShow.appendChild(img)
      eles.game.skinShow.appendChild(img2)
      console.log('渲染技能', hero)
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

function renderSkins() {
  eles.game.heroView.innerHTML = ''
  let ico = game.player.heros[1].ico
  let allico = game.player.heros[0].ico.concat(ico)
  let skins = game.player.heros[1].skins
  let allskins = game.player.heros[0].skins.concat(skins)
  //console.log(allico)
  allico.forEach((ico, index) => {
    // 创建节点
    let skinItem = document.createElement('div')
    skinItem.classList.add('skinItem')
    console.log(allico[index])
    skinItem.innerHTML = `
                        <img src="${allico[index]}" />
                        <span>皮肤${index}</span>`
    skinItem.onclick = function () {
      //根据英雄换技能
      index < 3
        ? renderSkills(game.player.heros[0])
        : renderSkills(game.player.heros[1])
      if (!!eles.game.skinShow) {
        eles.game.skinShow.innerHTML = ''
      }
      let img = new Image()
      img.src = allskins[index]
      eles.game.skinShow.appendChild(img)
    }
    eles.game.heroView.appendChild(skinItem)
  })
}

// 作业：扩展一个鲁班类且实现 鲁班技能 ；
