<template>

  <section>
      <h2>SYNTHESE DE VOTRE COMPTE</h2>
  
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
      <tr v-for="mouv of mouvs" :key="mouv.id">
        <td>{{mouv.id}}</td>
        <td>{{mouv.date}}</td>
        <td>{{mouv.origine}}</td>
        <td>{{mouv.categorie}}</td>
        <td>{{mouv.debit}}</td>
        <td>{{mouv.credit}}</td>
               <button
    type="button"
    class="btn btn-link"
    @click="onclick()"
    >
      Remove
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
  </section>
</template>

<script>
// import addmouv from "./addmouv.vue";
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
    onclick() {
      this.$emit("onclick", Object.assign({}, this.mouv))
    },
        
  }
};
</script>

<style>

</style>
