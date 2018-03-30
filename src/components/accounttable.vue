<template>

  <section id="synthese">
      <h2>SYNTHESE DE VOTRE COMPTE</h2>
    <div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>Date</th>
        <th>Origine</th>
        <th>Catégorie</th>
        <th>Débit</th>
        <th>Crédit</th>
        <th>Supprimer</th>
      </tr>
    </thead> 
    <tbody>
      <tr v-for="mouv of mouvs" :key="mouv.id">
        <td>{{mouv.id}}</td>
        <td>{{mouv.date}}</td>
        <td>{{mouv.origine}}</td>
        <td>{{mouv.categorie}}</td>
        <td>{{mouv.debit}}</td>
        <td>{{mouv.credit}}</td>
        <td>
          <button type="button" class="btn btn-link" @click="onclick(mouv.id)">
            <i class="far fa-trash-alt deleteIcon"></i>
          </button>
        </td>
      </tr>
    </tbody>
     <tfoot class="ligneTotal">
       <tr>
         <th>Total</th>
            <td>{{totalCount}} €</td>
       </tr>
     </tfoot>

  </table>
  </div>
  </section>
</template>

<script>
// import addmouv from "./addmouv.vue";
// import {HTTP} from '../http-constants'

// HTTP.get(...).then(...).catch(...)

export default {
  name: "accounttable",
  components: {
  },
  props: {
    // addmouv
    mouvs: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalCount: function() {
      let totalC = 0;
      let totalD = 0;
      let total = 0;
      for(let i = 0; i < this.mouvs.length; i++){
        totalC += parseInt(this.mouvs[i].credit);
        totalD += parseInt(this.mouvs[i].debit);
        total = totalC-totalD
      }       
      return total;
    }
  },

  methods:  {
    onclick(id) {
      this.$emit("onclick", id)
    },
        
  }
};
</script>

<style>
#synthese{
  /* border:2px solid red; */
  margin-top: 20px;
}
.deleteIcon{
  color: #949494;
}
.deleteIcon:hover{
  color: #ef1e43;
}

</style>
