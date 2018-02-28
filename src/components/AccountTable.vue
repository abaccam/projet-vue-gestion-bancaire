<template>

  
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
      </tr>
    </tbody>
     <tfoot>
       <tr>
         <th>Total</th>
         <td>100</td>
       </tr>
     </tfoot>

  </table>
  
</template>

<script>
import AddMouv from "./AddMouv.vue";
export default {
  name: "AccountTable",
  components: {
    AddMouv
  },
  props: {
    mouvs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>

</style>
