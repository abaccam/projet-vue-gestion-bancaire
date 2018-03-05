<template>
<section>
  <h2>GESTION DE VOTRE COMPTE</h2>
  
 <form @submit.prevent="onSubmit()">
   
  <input type="date" name="date" placeholder="Date" v-model="mouv.date">
  <input type="text" name="origine" placeholder="Origine" v-model="mouv.origine">

  <select id="listeCategorie" v-model="mouv.categorie" required>
    <option value="">Sélectionnez une catégorie</option>
    <option value="Emploi">Emploi</option>
    <option value="Logement">Logement</option> 
    <option value="Alimentation">Alimentation</option>
    <option value="Loisirs">Loisirs</option>
    <option value="Sante">Santé</option>
    <option value="Habillement">Habillement</option> 
    <option value="Meubles">Meubles</option>
    <option value="Transports">Transports</option>
    <option value="Communications">Communications</option>
    <option value="Enseignement">Enseignement</option> 
    <option value="Restauration">Restauration et hôtels</option>
    <option value="Divers">Biens et services divers</option>
    <option value="Autres">Autres</option>
  </select>

  <label for="debit">Débit</label>
  <input type="number" name="debit" placeholder="Débit" v-model="mouv.debit">
  <label for="credit">Crédit</label>
  <input type="number" name="credit" placeholder="Crédit" v-model="mouv.credit">
 <button type="submit" >Valider</button>
</form>
  
 
</section>

  <!-- <ul>
    <li v-for="(item,index) of tab1" :key="index"
      @click="action1(item)" @dblclick="action2(index)">
      {{index}} {{item}}
    </li>
  </ul> -->
</template>

<script>
export default {
  name:'addmouv',
  data: function(){
    return {
      mouv:
   {date:"", origine:"",  categorie:"",debit:0, credit:0}
    }
  },
  methods:  {
    onSubmit() {
      this.$emit("onSubmit", Object.assign({}, this.mouv))
    },
        
  }
}
</script>

<style>

</style>
