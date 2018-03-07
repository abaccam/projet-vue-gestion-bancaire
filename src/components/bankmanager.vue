<template>
<section >
    
  <div class="container" id="header">
    <div id="logoDiv">
    <img src="../assets/MazeBank2.jpg" alt="MazeBank" >
    </div>
  </div>


  <div class="container" id="pageColor">
    <div>
      <addmouv @onSubmit = "mouv => add(mouv)"></addmouv>

      <accounttable 
      :mouvs ="(mouvs)" 
      @onclick = "index => remove(index)">
      </accounttable>

    </div>
  </div>

</section>
</template>

<script>
import accounttable from './accounttable.vue';
import addmouv from './addmouv.vue';
import Dao from '../Dao.js';

export default {
  name: 'bankmanager',
  components: {
    accounttable,
    addmouv
  },
  data: function() {
    return {
      mouvs: []
    }
  },
  methods: {
    add: function(mouv) {
     this.mouvs.push(mouv);
    }, // ou add(mouv){this.mouvs.push(mouv);}
    remove(index) {
      this.mouvs.splice(index, 1);
    },
    totalDebit: function() {
          
    },
    totalCredit: function(){

    },
    resultDC: function() {
      
    },
   
  },

  beforeCreate(){
      Dao.getAll().then((response) => {
        this.mouvs = response.data
      })
    }
}

</script>

<style>
#header{
  padding: 0;
}

img{
  width: 300px;
}

#logoDiv{
  border-block-end: 5px solid #DC3545;
  border-block-start: 5px solid #DC3545;
  background-color:rgb(240, 240, 240);
}

#pageColor{
  background-color:rgb(240, 240, 240);
  padding: 0;
}

h2 {
  font-size: 20px;
}
</style>
