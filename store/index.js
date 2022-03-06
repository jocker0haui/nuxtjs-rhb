import { Store } from 'vuex';
// import axios from 'axios';

const createStore = () => {
    return new Store({
        state: {
            decks: [],
            cards: [],
            token: null
        },
        mutations: {
            setDecks(state, payload) {
                state.decks = payload
            },
            addDeck(state, payload) {
                state.decks.push(payload)
            },
            editDeck(state, payload) {
                const deckIndex = state.decks.findIndex(deck => deck.id === payload.id)
                state.decks[deckIndex] = payload
            },
            setCards(state, payload) {
                state.cards = payload
            },
            setToken(state, payload) {
                // console.log(payload)
                state.token = payload
            },
            clearToken(state) {
                state.token = null
            }
        },
        actions: {
            // nuxtServerInit(vuexContext, context) {
            //     // return axios
            //     return context.app.$axios
            //         .get('https://nuxt-lv1-default-rtdb.firebaseio.com/decks.json')
            //         .then((res) => {
            //             const decksArr = []
            //             for (const key in res.data) {
            //                 decksArr.push({ ...res.data[key], id: key })
            //             }
            //             vuexContext.commit('setDecks', decksArr)
            //         })
            //         .catch((e) => { context.error(e); })
            // },
            nuxtServerInit(vuexContext, context) {
                return context.$axios
                    .$get('https://nuxt-lv1-default-rtdb.firebaseio.com/decks.json')
                    .then((data) => {
                        const decksArr = []
                        for (const key in data) {
                            decksArr.push({ ...data[key], id: key })
                        }
                        vuexContext.commit('setDecks', decksArr)
                    })
                    .catch((e) => { context.error(e); })
            },
            setDecks(vuexContext, decks) {
                vuexContext.commit('setDecks', decks)
            },
            addDeck(vuexContext, decksData) {
                return this.$axios
                    // .post(
                    //     'https://nuxt-lv1-default-rtdb.firebaseio.com/decks.json',
                    //     decksData
                    // )
                    // .then((data) => {
                    //     // console.log({...decksData ,id:data.data.name})
                    //     vuexContext.commit('addDeck', { ...decksData, id: data.data.name })
                    // })
                    // .catch((e) => { })
                    .$post(
                        'https://nuxt-lv1-default-rtdb.firebaseio.com/decks.json?auth=' + vuexContext.state.token,
                        decksData
                    )
                    .then((data) => {
                        // console.log({...decksData ,id:data.name})
                        vuexContext.commit('addDeck', { ...decksData, id: data.name })
                    })
                    .catch((e) => { })
            },
            editDeck(vuexContext, decksData) {
                const deckId = decksData.id
                delete decksData.id
                // return this.$axios
                //     .put(
                //         // 'https://nuxt-lv1-default-rtdb.firebaseio.com/decks/' + deckId + '.json',
                //         process.env.baseApiUrl+'/decks/' + deckId + '.json',
                //         decksData
                //     )
                //     .then((data) => {
                //         vuexContext.commit('editDeck', { ...data.data, id: deckId })
                //     })
                //     .catch((e) => {  })
                return this.$axios
                    .$put(
                        // 'https://nuxt-lv1-default-rtdb.firebaseio.com/decks/' + deckId + '.json',
                        process.env.baseApiUrl + '/decks/' + deckId + '.json?auth=' + vuexContext.state.token,
                        decksData
                    )
                    .then((data) => {
                        vuexContext.commit('editDeck', { ...data, id: deckId })
                    })
                    .catch((e) => { })
            },
            setCards(vuexContext, cards) {
                vuexContext.commit('setCards', cards)
            },
            authenticationUser(vuexContext, credentials) {
                return new Promise((resolve, reject) => {
                    // console.log(credentials)
                    const API_KEY = process.env.firebaseAPIKEY
                    let authApi = 'signInWithPassword'

                    if (credentials.isLogin === false) {
                        authApi = 'signUp'
                    }
                    return this.$axios  // muốn hàm trả ra g/trị thì cần đc bao bởi 1 promise
                        .$post(
                            `https://identitytoolkit.googleapis.com/v1/accounts:${authApi}?key=${API_KEY}`,
                            {
                                email: credentials.email,
                                password: credentials.password,
                                returnSecureToken: true,
                            }
                        )
                        .then((result) => {
                            // console.log(result.idToken)
                            vuexContext.commit('setToken', result.idToken)

                            // lưu tk đã đăng nhập vào localStorage
                            localStorage.setItem('token', result.idToken)
                            localStorage.setItem('tokenExpiresIn', new Date().getTime() + (result.expiresIn * 1000))

                            vuexContext.dispatch('setLogoutTimer', (result.expiresIn * 1000))
                            resolve({ success: true })
                        })
                        .catch(e => {
                            reject(e.response)
                        })
                })
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            },
            initAuth(vuexContext) {
                const token = localStorage.getItem('token')
                const tokenExpiresIn = localStorage.getItem('tokenExpiresIn')
                // console.log(token)
                // console.log(new Date().getTime(),"""",tokenExpiresIn)
                // console.log(tokenExpiresIn-new Date().getTime())
                if (new Date().getTime() > tokenExpiresIn || !token) {
                    vuexContext.dispatch('logout')
                    return false
                }

                vuexContext.commit('setToken', token)
                vuexContext.dispatch('setLogoutTimer', (tokenExpiresIn - new Date().getTime()))
            },
            logout(vuexContext){
                vuexContext.commit('clearToken')

                localStorage.removeItem('token')
                localStorage.removeItem('tokenExpiresIn')
            }
        },
        getters: {
            decks(state) {
                return state.decks
            },
            cards(state) {
                return state.cards
                // return state.cards.reverse() 
                // .reverse() để đảo ngược mảng cho p/tử cuối lên đầu mảng
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore