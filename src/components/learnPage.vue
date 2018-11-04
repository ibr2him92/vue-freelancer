<template>
<v-container fill-height>

    <!-- this one for the list of content button -->
  <v-btn @click.stop="drawer = !drawer" class="my-5" color="cyan darken-1" dark large absolute left top fab fixed>
    <v-icon>view_list</v-icon>
  </v-btn>
  
   <iframe id='player' v-if="isVideo" :src="getVideo" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
    </iframe> 

    <v-layout justify-center align-center v-if="!isVideo">
        <h1>hi</h1>
    </v-layout>
  

    

  <!-- here are the code to open the side drawer -->
  <v-navigation-drawer v-model="drawer" absolute temporary>
       <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="setComponentTo(item.type)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
  </v-navigation-drawer>

</v-container>

    
</template>

 <script>
 
 export default {
     name:'learnPage',
     data(){
         return{
            isVideo:true,
            drawer: null,
            right: null,
            items: [
          { title: 'video 1', icon: 'play_circle_filled' , type:'video' , videoId: '297657751'},
          { title: 'quiz 1', icon: 'assignment' },
        ],
        getVideo:'https://player.vimeo.com/video/256526091?badge=0',
             
         }
     },

     methods:{
         setComponentTo(x){
             if(x == 'video'){
                 this.isVideo= true
             }
             else{
                 this.isVideo=false
             }
         },
         
     },

 }
 </script>
 