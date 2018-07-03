import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentRoundNumber: 0,
    isMyRound: true,
    heroes: {
      zed: {
        name: 'Zed',
        avatar: require('../assets/img/hero-zed.jpg'),
        model: require('../assets/img/model-hero.png'),
        maxHp: 2600,
        skills: ['AttackSeries', 'MyHeal', 'Vampire']
      },
      lux: {
        name: 'Lux',
        avatar: require('../assets/img/hero-lux.jpg'),
        model: require('../assets/img/model-hero.png'),
        maxHp: 2200,
        skills: ['Demo4', 'Demo5', 'Demo6']
      },
      annie: {
        name: 'Annie',
        avatar: require('../assets/img/hero-annie.jpg'),
        model: require('../assets/img/model-hero.png'),
        maxHp: 2100,
        skills: ['Demo7', 'Demo8', 'Demo9']
      }
    },
    skills: {
      AttackSeries: {
        name: 'AttackSeries',
        img: require('../assets/img/skill-first.jpg'),
        description: '',
        effectName: 'dealDamage',
        effectValue: 700
      },
      MyHeal: {
        name: 'MyHeal',
        img: require('../assets/img/icon-heal.jpg'),
        description: '',
        effectName: 'healHero',
        effectValue: 200
      },
      Vampire: {
        name: 'Vampire',
        img: require('../assets/img/icon-vampire.jpg'),
        description: '',
        effectName: 'vampire',
        effectValue: 330
      },
      Demo4: {
        name: 'Demo4',
        img: require('../assets/img/skill-lux.jpg'),
        description: '',
        effectName: 'dealDamage',
        effectValue: 150
      },
      Demo5: {
        name: 'Demo5',
        img: require('../assets/img/skill-fire.jpg'),
        description: '',
        effectName: 'healHero',
        effectValue: 400
      },
      Demo6: {
        name: 'Demo6',
        img: require('../assets/img/icon-defense.jpg'),
        description: '',
        effectName: 'vampire',
        effectValue: 100
      },
      Demo7: {
        name: 'Demo7',
        img: require('../assets/img/skill-meteor.jpg'),
        description: '',
        effectName: 'dealDamage',
        effectValue: 500
      },
      Demo8: {
        name: 'Demo8',
        img: require('../assets/img/skill-ray.jpg'),
        description: '',
        effectName: 'healHero',
        effectValue: 1000
      },
      Demo9: {
        name: 'Demo9',
        img: require('../assets/img/skill-power.jpg'),
        description: '',
        effectName: 'vampire',
        effectValue: 230
      }
    },
    summoners: {
      player: {
        currentHero: 0,
        currentTarget: 0,
        heroes: [
          {
            hero: 'zed',
            hp: 1700,
            buffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ],
            debuffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ]
          },
          {
            hero: 'lux',
            hp: 1900,
            buffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ],
            debuffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ]
          },
          {
            hero: 'annie',
            hp: 700,
            buffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ],
            debuffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ]
          }
        ]
      },
      enemy: {
        currentHero: 0,
        currentTarget: 0,
        heroes: [
          {
            hero: 'lux',
            hp: 2100,
            buffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ],
            debuffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ]
          },
          {
            hero: 'zed',
            hp: 1550,
            buffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ],
            debuffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ]
          },
          {
            hero: 'annie',
            hp: 1400,
            buffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ],
            debuffs: [
              {
                id: 'RapidFire',
                rounds: 5
              }
            ]
          }
        ]
      }
    },
    gameHistory: [
      {
        isMyRound: true,
        attacker: 'Zed',
        attacked: 'Lux'
      }
    ]
  },
  mutations: {
    dealDamage (state, damage) {
      // let attacker = null;
      let attacked = null
      console.log('Нанесение урона')
      if (state.isMyRound) {
        // я атакую
        attacked = state.summoners.player.currentTarget
        let hpState = state.summoners.enemy.heroes[attacked].hp

        if (hpState > damage) {
          state.summoners.enemy.heroes[attacked].hp -= damage
        } else {
          state.summoners.enemy.heroes[attacked].hp -= hpState
        }
      } else {
        // противник атакует
        attacked = state.summoners.enemy.currentTarget
        let hpState = state.summoners.player.heroes[attacked].hp

        if (hpState > damage) {
          state.summoners.player.heroes[attacked].hp -= damage
        } else {
          state.summoners.player.heroes[attacked].hp -= hpState
        }
      }
    },
    healHero (state, heal) {
      let attacker = null
      console.log('Восстановление хп')
      if (state.isMyRound) {
        // я атакую
        attacker = state.summoners.player.currentHero

        // разница между текущим и макс хп
        let hero = state.summoners.player.heroes[attacker].hero
        let hpState = state.heroes[hero].maxHp - state.summoners.player.heroes[attacker].hp

        if (hpState > heal) {
          state.summoners.player.heroes[attacker].hp += heal
        } else {
          state.summoners.player.heroes[attacker].hp += hpState
        }
      } else {
        // противник атакует
        attacker = state.summoners.enemy.currentHero

        // разница между текущим и макс хп
        let hero = state.summoners.enemy.heroes[attacker].hero
        let hpState = state.heroes[hero].maxHp - state.summoners.enemy.heroes[attacker].hp

        if (hpState > heal) {
          state.summoners.enemy.heroes[attacker].hp += heal
        } else {
          state.summoners.enemy.heroes[attacker].hp += hpState
        }
      }
    },
    vampire (state, vampire) {
      let attacker = null
      let attacked = null
      console.log('Высасывает хп из врага себе')
      if (state.isMyRound) {
        // я атакую
        attacker = state.summoners.player.currentHero
        attacked = state.summoners.enemy.currentHero

        let hpStatePlayer = state.summoners.player.heroes[attacker].hp
        let hpStateEnemy = state.summoners.enemy.heroes[attacked].hp

        let hero = state.summoners.player.heroes[attacker].hero
        let maxHpHero = state.heroes[hero].maxHp
        let difference = maxHpHero - hpStatePlayer

        if (hpStateEnemy > vampire && difference > vampire) {
          state.summoners.enemy.heroes[attacked].hp -= vampire
          state.summoners.player.heroes[attacker].hp += vampire
        }
      } else {
        // противник атакует
        attacker = state.summoners.enemy.currentHero
        attacked = state.summoners.player.currentHero

        let hpStateEnemy = state.summoners.player.heroes[attacked].hp
        let hpStatePlayer = state.summoners.enemy.heroes[attacker].hp

        let hero = state.summoners.enemy.heroes[attacker].hero
        let maxHpHero = state.heroes[hero].maxHp
        let difference = maxHpHero - hpStatePlayer

        if (hpStateEnemy > vampire && difference > vampire) {
          state.summoners.player.heroes[attacked].hp -= vampire
          state.summoners.enemy.heroes[attacker].hp += vampire
        }
      }
    },
    changeMyCurrentHero (state, index) {
      state.summoners.player.currentHero = index
    },
    switchMyHero (state) {
      console.log('Смена героя')
      let heroesCount = state.summoners.player.heroes.length
      heroesCount--
      let currentHeroIndex = state.summoners.player.currentHero
      if (currentHeroIndex === heroesCount) {
        state.summoners.player.currentHero = 0
      } else {
        state.summoners.player.currentHero++
      }
    }
  }
})

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

export default store
