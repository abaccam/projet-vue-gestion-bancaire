<template>

<section>
  <div class="container-col" id="gestionDiv">
    <div id="gestion">
      <h2>GESTION DE VOTRE COMPTE</h2>
      <!-- <h5>{{totalDebit}}</h5> -->
    </div>
    <div id="gestionForm"> 
    <form @submit.prevent="onSubmit(mouv)">
  <!-- <input type="number" name="id" placeholder="id" v-model="mouv.id"> -->
      <input type="date" name="date" placeholder="Date" v-model="mouv.date" id="inputSize">
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
      <input type="number" name="debit" placeholder="Débit" v-model="mouv.debit" id="inputSize">
      <label for="credit">Crédit</label>
      <input type="number" name="credit" placeholder="Crédit" v-model="mouv.credit" id="inputSize">
      <button type="submit" class="btn btn-danger" >Valider</button>
    </form>
  </div> 
</div>
 
</section>

  <!-- <ul>
    <li v-for="(item,index) of tab1" :key="index"
      @click="action1(item)" @dblclick="action2(index)">
      {{index}} {{item}}
    </li>
  </ul> -->
</template>

<script>


// import {HTTP} from '../http-constants'

// HTTP.get(...).then(...).catch(...)

export default {
  name:'addmouv',
  data: function(){
    return {
      mouv:
   {id:"", date:"", origine:"",  categorie:"",debit:0, credit:0},
      // totalDebit: 0
    }
  },
  
  methods:  {
    onSubmit(mouv) {
      this.$emit("add", Object.assign({}, mouv))

    //   let dao = new Dao
    //   dao.getMouvById(1).then((response) => {
    //   this.mouv = response.data
    //   this.mouv.debit.forEach((mouv) => {
    //     this.totalDebit += mouv.debit
    //     })
    // })
    }   
  }
}
</script>

<style>
.container-col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#gestionDiv{
  /* border:2px solid red; */
  height: 150px;
}
#gestion{
  /* margin-top: 10px; */
  /* border:2px solid blue; */
  height: 50px;
  
}

#inputSize{
  width: 130px;
}
</style>
