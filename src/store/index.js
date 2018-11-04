import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quiz : {
            title: 'My quiz',
            questions: [
              {
                text: "Question 1",
                responses: [
                  {text: 'Wrong, too bad.'}, 
                  {text: 'Right!', correct: true}, 
                ]
              }, {
                text: "Question 2",
                responses: [
                  {text: 'Right answer', correct: true},
                  {text: 'Wrong answer'}, 
                ]
              } 
            ]
          },
    },
    mutations: {
    },
    getters:{
    },
    actions:{
    }
  })