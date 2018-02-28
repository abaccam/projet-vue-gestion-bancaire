<template>

<form action="">
  <input type="date" name="date" placeholder="Date">
  <input type="text" name="origine" placeholder="Origine">

  <select id="listeCategorie">
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
  </select>
  
  <input type="number" name="debit" placeholder="Débit">
  <input type="number" name="birthdate" placeholder="Crédit">
 <button type="submit" >Valider</button>
</form>
  <!-- <ul>
    <li v-for="(item,index) of tab1" :key="index"
      @click="action1(item)" @dblclick="action2(index)">
      {{index}} {{item}}
    </li>
  </ul> -->
</template>

<script>
export default {
  name:'AddMouv',
 
  methods: {
           
        
  }
}
</script>

<style>

</style>
