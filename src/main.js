import './styles/main.scss'
import './styles/animation.scss'
import './styles/vue-transition.scss'
import './styles/mixin.scss'
import './styles/color.scss'

import Longtake from './modules/LongTake';

// 资源
const  getResource = () => {
      const host = '.'
      const resource = { sprites: [] }
      // for (let i = 1; i <= 5; i += 1) {
      //   resource.sprites.push({
      //     name: `bg${i}`,
      //     url: `${host}/static/imgs/bg/${i}.jpg`
      //   })
      // }
      for (let i = 0; i < 50; i += 1) {
        resource.sprites.push({
          name: `ani${i}`,
          url: `${host}/assets/imgs/ani/${701 + i}.png`
        })
      }
      for (let i = 0; i < 62; i += 1) {
        resource.sprites.push({
          name: `girl${i}`,
          url: `${host}/assets/imgs/girl/${160 + i}.png`
        })
      }
      for (let i = 1; i < 8; i += 1) {
        resource.sprites.push({
          name: `item${i}`,
          url: `${host}/assets/imgs/items/${i}.png`
        })
      }
      for (let i = 0; i < 25; i += 1) {
        resource.sprites.push({
          name: `plane${i}`,
          url: `${host}/assets/imgs/plane/${408 + i}.png`
        })
      }
      return resource
 }
 // 背景
 const getBgSprites = () => {
    const bgSprites = []
    for (let i = 1; i <= 5; i += 1) {
      bgSprites.push(`bg${i}`)
    }
    return bgSprites
 }
// 精灵
 const getSprites = () => {
  const sprites = {
    ani: {
      key: 'ani0',
      size: { mode: 'widthFit', width: 1 },
      position: 'center',
      anchor: 'center'
    },
    girl: {
      key: 'girl0',
      size: { mode: 'widthFit', width: 1 },
      position: 'center',
      anchor: 'center'
    },
    plane: {
      key: 'plane0',
      size: { mode: 'widthFit', width: 0.5 },
      position: {
        x: 0.5, y: 0.4
      },
      anchor: 'center'
    }
  }
  for (let i = 1; i < 8; i += 1) {
    const x = i % 2 === 0 ? 1.1 : -0.1
    sprites[`item${i}`] = {
      key: `item${i}`,
      size: { mode: 'widthFit', width: 0.8 },
      position: { x, y: 1.4 },
      anchor: 'center'
    }
  }
  return sprites
}

//帧动画
const getFrames = (key, n, start = 0) => {
  const frames = []
  for (let i = start; i < n + start; i += 1) {
    frames.push(`${key}${i}`)
  }
  return frames
}

//动画
const getSpritesAnimations = () => {
  const animations = {
    // 旋涡
    ani: [{
      delay: 0.1,
      duration: 0.6,
      from: { alpha: 0 },
      to: { alpha: 1 }
    }, {
      delay: 0.1,
      duration: 0.6,
      frames: getFrames('ani', 50)
    }, {
      delay: 0.7,
      duration: 0.2,
      to: { alpha: 0 }
    }, {
      delay: 0.7,
      duration: 0.2,
      frames: getFrames('ani', 50).reverse()
    }],
    // 女孩
    girl: [{
      delay: 0,
      duration: 1,
      frames: getFrames('girl', 62)
    }, {
      delay: 0,
      duration: 0.2,
      from: { y: -window.innerHeight },
      to: { y: window.innerHeight * 0.5 }
    }, {
      delay: 0.7,
      duration: 0.3,
      to: { y: window.innerHeight * 1.2 }
    }],
    // 飞机
    plane: [{
      duration: 2,
      frames: getFrames('plane', 25),
      infinite: true,
      frameRate: 25
    }, {
      delay: 0.8,
      duration: 0.2,
      from: { width: 0, height: 0, alpha: 0 }
    }]
  }
  // 物品
  for (let i = 1; i < 8; i += 1) {
    const delay = 0.25 + (i / 7 * 0.2)
    const x = i % 2 === 0 ? window.innerWidth * 0.65 : window.innerWidth * 0.35
    animations[`item${i}`] = [{
      delay,
      duration: 0.2,
      to: { x, y: -window.innerHeight * 0.2, width: 0, height: 0 }
    }, {
      duration: 0.5 + Math.random(),
      to: { yoyo: true, repeat: -1, rotation: 0.1 }
    }]
  }
  return animations
}

// 文本
const getTexts =  () => {
  const texts = {
    guide: {
      text: '向上滑动，找回童年',
      position: { x: 0.5, y: 0.5 },
      anchor: 'center',
      options: {
        fontFamily: 'Arial',
        fontSize: window.innerWidth / 375 * 18,
        fill: 0xfb833f,
        align: 'center'
      }
    },
 
    ad2: {
      text: 'Powerd by: Pixi.js AlloyTouch TweenMax',
      position: { x: 0.5, y: 0.92 },
      anchor: 'center',
      options: {
        fontFamily: 'Arial',
        fontSize: window.innerWidth / 375 * 12,
        fill: 0xfb833f,
        align: 'center'
      }
    },

    ad4: {
      text: '素材源自互联网，仅供学习交流，请勿商用！',
      position: { x: 0.5, y: 0.62 },
      anchor: 'center',
      options: {
        fontFamily: 'Arial',
        fontSize: window.innerWidth / 375 * 12,
        fill: 0xfb833f,
        align: 'center'
      }
    }
  }
  return texts
}

const getTextsAnimations = ()=>{
  const animations = {
    guide: [{
      delay: 0,
      duration: 1,
      from: { y: window.innerHeight * 0.5 },
      to: { yoyo: true, repeat: -1, ease: 'easeOut', y: window.innerHeight * 0.48 }
    }, {
      delay: 0,
      duration: 0.1,
      to: { alpha: 0 }
    }],
    ad: [{
      delay: 0,
      duration: 0.1,
      to: { alpha: 0 }
    }],
    ad2: [{
      delay: 0,
      duration: 0.1,
      to: { alpha: 0 }
    }],
    ad3: [{
      delay: 0.9,
      duration: 0.1,
      from: { alpha: 0, y: window.innerHeight * 0.53 }
    }],
    ad4: [{
      delay: 0.9,
      duration: 0.1,
      from: { alpha: 0, y: window.innerHeight * 0.57 }
    }]
  }
  return animations
}

const LongTake = new Longtake({
    container: document.getElementById('app'), // DOM容器
    resource: getResource(), // 加载的资源
    touchOptions: {
      touch: '#app', // 反馈触摸的dom
      initialValue: 0, // 起始位置
      sensitivity: 0.5, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
      maxSpeed: 0.5 // 不必需，触摸反馈的最大速度限制
    },
    sprites: getSprites(), // 精灵图
    spritesAnimations: getSpritesAnimations(), // 精灵动画
    texts: getTexts(), // 文本
    textsAnimations: getTextsAnimations() // 文本动画
    // bgSprites: this.getBgSprites(), // 背景图片
})

LongTake.start();