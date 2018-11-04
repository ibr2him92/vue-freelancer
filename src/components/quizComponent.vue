<template>
    
    <v-container fill-height >
        <v-layout justify-center align-center>
            <div v-for="(question,index) in Quiz.questions" :key="index">
            <v-flex v-show="index === questionIndex">
                
             <h2>{{ question.text }}</h2>
             <!-- Responses: display a li for each possible response with a radio button -->
            <ol>
            <li v-for="(response,i) in question.responses" :key="i">
            <label>
                 <!-- The radio button has three new directives -->
                <!-- v-bind:value sets "value" to "true" if the response is correct -->
                <!-- v-bind:name sets "name" to question index to group answers by question -->
                <!-- v-model creates binding with userResponses -->
                <input type="radio" 
           v-bind:value="response.correct" 
           v-bind:name="index" 
           v-model="userResponses[index]"> {{response.text}}
            </label>
            </li>
            </ol>
            <v-btn v-if="questionIndex > 0" @click="prev">
                prev
            </v-btn>
            <v-btn @click="next">
                next
            </v-btn>
            </v-flex>

             <!-- Last page, quiz is finished, display result -->
  <div v-show="questionIndex === quiz.questions.length">
    <h2>
    Quiz finished
  </h2>
    <p>
      Total score: {{score}} / {{ quiz.questions.length }}
    </p>
  </div>
            </div>
  
             
        </v-layout>
   
    </v-container>

</template>

<script>
var quiz = {
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
};
export default {
    name: 'quizComponent',
    data(){
        
        return{
            quiz:quiz,
            // Store current question index
            questionIndex: 0,
            // An array initialized with "false" values for each question
            // It means: "did the user answered correctly to the question n?" "no".
            userResponses: Array(quiz.questions.length).fill(false)

        }
    },

    computed:{
        Quiz(){
            return this.$store.state.quiz
        },

        score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
        },
    },

    methods:{
         // Go to next question
    next: function() {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    }
    }

}
</script>

<style>

</style>
