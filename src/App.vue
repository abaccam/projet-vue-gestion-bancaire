<template>
  <!-- Avec le setup webpack commun, les fichiers des 
  components Vue se scindent en 3 partie (template,controller,style)
  On met ici le HTML du component dans lequel on se trouve -->
  <main id="app">
    <!-- On peut mettre une balise représentant un autre component si
    on l'a au préalable ajouter dans la liste des components du controller -->
    <bankmanager></bankmanager>
  </main>
</template>

<script>
/**
 * Le component App est le composant racine de l'application, c'est de
 * lui que partira toute l'appli, on fait généralement en sorte de n'y
 * mettre peu ou pas de html ou de logique, juste l'appels aux autres
 * components.
 */
import bankmanager from './components/bankmanager.vue';
/**
 * Ici, on crée le component app et on lui dit qu'il contient comme sous
 * component le component DogManager
 */
export default {
  name: 'app',
  components: {
    bankmanager
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>