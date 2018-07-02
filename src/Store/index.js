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
        avatar: 'url',
        maxHp: 2600,
        skills: ['RapidFire', 4, 6]
      },
      lux: {
        name: 'Lux',
        avatar: 'url',
        maxHp: 2200,
        skills: ['RapidFire', 4, 6]
      },
      annie: {
        name: 'Annie',
        avatar: 'url',
        maxHp: 1800,
        skills: ['RapidFire', 4, 6]
      }
    },
    skills: {
      RapidFire: {
        name: 'RapidFire',
        img: 'url',
        description: '',
        attack: 1000
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
            hero: 'annie',
            hp: 1500,
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
            hero: 'Lux',
            hp: 2200,
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
      // let attacked = null

      if (state.isMyRound) {
        // я атакую

        attacker = state.summoners.player.currentHero
        // разница между текущим и макс хп
        let hpState = state.heroes.zed.maxHp - state.summoners.player.heroes[attacker].hp

        if (hpState > heal) {
          state.summoners.player.heroes[attacker].hp += heal
        } else {
          state.summoners.player.heroes[attacker].hp += hpState
        }
      } else {
        // противник атакует

        attacker = state.summoners.enemy.currentHero
        // разница между текущим и макс хп
        let hpState = state.heroes.lux.maxHp - state.summoners.enemy.heroes[attacker].hp

        if (hpState > heal) {
          state.summoners.enemy.heroes[attacker].hp += heal
        } else {
          state.summoners.enemy.heroes[attacker].hp += hpState
        }
      }
    }
  }
})

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

export default store
