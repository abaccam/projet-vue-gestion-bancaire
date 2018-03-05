<template>
<section>
<img src="../assets/dog.jpg" alt="dog" >
  <div class="container">
    <div>
      <addmouv @onSubmit = "mouv => add(mouv)"></addmouv>
      <accounttable :mouvs = mouvs @onclick = "mouv => remove(mouv)"></accounttable>
    </div>
      
  </div>
  
</section>
    
  
</template>

<script>
import accounttable from './accounttable.vue';
import addmouv from './addmouv.vue';

export default {
  name: 'bankmanager',
  components: {
    accounttable,
    addmouv
  },
  data: function() {
    return {
      mouvs: [
        {id: 1, date:"2012-03-02", origine:"simplon",  categorie:"emploi",debit: 0, credit: 100}
        ]
    };
  },
  methods: {
    add: function(mouv) {
     this.mouvs.push(mouv);
    }, // ou add(mouv){this.mouvs.push(mouv);}
    remove(mouv) {
      this.mouvs.splice(mouv, 1);
    },
    totalDebit: function() {
          
    },
    totalCredit: function(){

    },
    resultDC: function() {
      
    }
  }
}
</script>

<style>
img{
  border:5px solid black;
  border-radius: 10px;
  width: 100px;
}

h2 {
  font-size: 20px;
}
</style>
