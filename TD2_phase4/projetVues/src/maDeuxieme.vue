<script>
  export default {
    data() {
      return {
        searchbar: '',
        newNom: '',
        newDescription: '',
        newImage: '/images/inconnu.jpg',
        newPrix: '',
        newStatut: '',
        articles: [
          {id:1, nom: 'Clavier mécanique', description: 'Clavier RGB avec switches rapides pour gaming et bureautique', image: '/images/clavier.jpg', prix: 79, statut: 'En stock'},
          {id:2, nom: 'Souris ergonomique', description: 'Souris sans fil avec précision haute performance', image: '/images/souris.png', prix: 39, statut: 'Rupture de stock'},
          {id:3, nom: 'Ecran 24 pouces', description: 'Ecran Full HD idéal pour le travail et le multimédia', image: '/images/ecran.jpg', prix: 149, statut: 'En stock'}
        ]
      }
    },

    methods: {
      ajouterArticle() {
        let prix = Number(this.newPrix);
        if (isNaN(prix) || prix <= 0) {
          alert("Le prix doit avoir une valeur positive");
          return;
        }
        this.articles.push({id: this.articles.length + 1, nom: this.newNom, description: this.newDescription, image:this.newImage, prix: this.newPrix, statut: this.newStatut});
        this.newNom = '';
        this.newDescription = '';
        this.newPrix = '';
        this.newStatut = '';
      },

      getClassStatut(statut) {
        const statutText = statut.toLowerCase();
        if (statutText.includes("rupture")) {
          return "statut-rupture-stock";
        } else if (statutText.includes("stock")) {
          return "statut-en-stock";
        } else {
          return "statut-autre";
        }
      }
    },

    computed: {
      articlesFiltres() {
        return this.articles.filter(article => article.nom.toLowerCase().includes(this.searchbar.toLowerCase()));
      }
    }
  }
</script>

<template>
  <nav>
    <h1>Gestionnaire de Stock</h1>
    <input v-model="searchbar" type="search" placeholder="Rechercher un produit...">
  </nav>

  <h2>Ajouter un produit</h2>
  <form @submit.prevent="ajouterArticle">
    <input v-model="newNom" type="text" placeholder="Nom" required>
    <input v-model="newDescription" type="text" placeholder="Description" required>
    <input v-model="newPrix" type="text" placeholder="Prix" required>
    <select v-model="newStatut" required>
      <option value="En stock">En stock</option>
      <option value="Rupture de stock">Rupture de stock</option>
      <option value="Autre">Autre</option>
    </select>
    <button type="submit">Ajouter</button>
  </form>

  <h2>Liste des produits</h2>
  <section>
    <article v-for="article in articlesFiltres" :key="article.id">
      <h3>{{article.nom}}</h3>
      <img :src="article.image" :alt="article.nom" width="100" height="100">
      <p class="description">{{ article.description }}</p>
      <label class="prix">Prix : {{ article.prix }}€</label>
      <span :class="getClassStatut(article.statut)">Statut : {{ article.statut }}</span>
    </article>
  </section>
  <p v-if="articlesFiltres.length === 0" id="msg-aucun-article">Aucun produit trouvé</p>
</template>

<style>
  body {
    font-family: "Arial";
    margin: 20px;
    background-color: lightgray;
  }

  nav {
    display: flex;
    flex-flow: column;
    align-items: end;
    background-color: darkblue;
    color: white;
    padding: 10px;
    padding-bottom: 20px;
  }

  #searchbar {
    padding: 5px 5px 5px 20px;
    border-radius: 5px;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  article {
    display: grid;
    background-color: white;
    margin: 20px 10px 20px 10px;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 5px 5px 5px gray;
  }

  article h3 {
    margin: 10px;
  }

  .prix {
    font-weight: bold;
    color: darkblue;
    margin-bottom: 10px;
  }

  article span {
    padding: 20px, 10px, 20px, 10px;
    font-style: bold;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
  }

  .statut-en-stock {
    background-color: lightgreen;
    color: green;
  }

  .statut-rupture-stock {
    background-color: lightpink;
    color: red;
  }

  .statut-autre {
    background-color: grey;
    color: white;
  }

  #msg-aucun-article {
    background-color: lightgray;
    color: grey;
    text-align: center;
  }
</style>
