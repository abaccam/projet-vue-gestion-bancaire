<template>
<section>
<img src="../assets/dog.jpg" alt="dog" >
  <div class="container">
    <h2>GESTION DE VOTRE COMPTE</h2>
   
      <AddMouv></AddMouv>
      <h2>SYNTHESE DE VOTRE COMPTE</h2>
      <AccountTable :mouvs="mouvs"></AccountTable>

  </div>
  
</section>
    
  
</template>

<script>
import AccountTable from './AccountTable.vue';
import AddMouv from './AddMouv.vue';

export default {
  name: 'BankManager',
  components: {
    AccountTable,
    AddMouv
  },
  data: function() {
    return {
      mouvs: [
        {id: 1, date:"09.09.2000", origine:"fdj",  categorie:"loisir",debit: 0, credit: 500}
        ]
    };
  },
  methods: {
    add: function(mouv) {
     this.mouvs.push(mouv);
    }, // ou add(mouv){this.mouvs.push(mouv);}
    deleteById: function(mouvId) {
     this.mouvs = this.mouvs.filter(mouv => mouv.id !== mouvId);
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
