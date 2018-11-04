<template>
<v-app dark>
 <router-view/>
</v-app>

</template>

<script>
import Home from './components/Home'
export default {
  data () {
    return {
    
    }
  },

  components:{
    Home,
  },
  name: 'App'
}
</script>
