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
      </tr>
    </thead> 
    <tbody>
      <tr v-for="(mouv, index) of mouvs" :key="index">
        <td>{{mouv.id}}</td>
        <td>{{mouv.date}}</td>
        <td>{{mouv.origine}}</td>
        <td>{{mouv.categorie}}</td>
        <td>{{mouv.debit}}</td>
        <td>{{mouv.credit}}</td>
      <button
        type="button"
        class="btn btn-link"
        @click="onclick(index)"
        >
      Supprimer
      </button>
      </tr>
    </tbody>
     <tfoot>
       <tr>
         <th>Total</th>
         <td>100</td>
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
    // addmouv
  },
  props: {
    mouvs: {
      type: Array,
      required: true
    }
  },
  methods:  {
    onclick(index) {
      this.$emit("onclick", index)
    },
        
  }
};
</script>

<style>
#synthese{
  /* border:2px solid red; */
  margin-top: 50px;
}
</style>
