<script>
  export default {
    data() {
      return {
        newPort: '',
        newIp: '',
        newType: '',
        newSeverite: '',
        newAction: '',
        alertes: [
          {id:1, date: '03/05/2026', ip: '192.168.1.10', type: 'Intrusion', severite: 'Élevée'},
          {id:2, date: '03/05/2026', ip: '10.0.0.5', type: 'Scan de ports', severite: 'Moyenne'},
        ]
      }
    },

    methods: {
      ajouterRegle() {
		    alert("Alerte ajoutée :\n> Port: "+this.newPort+"\n> Ip: "+this.newIp+"\n> Type: "+this.newType+"\n> Severite: "+this.newSeverite+"\n> Action: "+this.newAction);
        this.alertes.push({id: this.alertes.length + 1, date: new Date().toLocaleDateString("fr-FR"), ip: this.newIp, type: this.newType, severite: this.newSeverite});
        this.newPort = '';
        this.newIp = '';
        this.newType = '';
        this.newSeverite = '';
        this.newAction = '';
      }
    }
  }
</script>

<template>
  <header>
    <img src="./assets/logo.png" alt="Logo" width="50">
    <h1>Serveur Sécurité - Monitoring</h1>
  </header>

  <h2>Alertes de sécurité</h2>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>IP Source</th>
        <th>Type</th>
        <th>Sévérité</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="alerte in alertes" :key="alerte.id">
          <td>{{ String(alerte.id).padStart(3, '0') }}</td>
          <td>{{alerte.date}}</td>
          <td>{{alerte.ip}}</td>
          <td>{{alerte.type}}</td>
          <td>{{alerte.severite}}</td>
        </tr>
      </tbody>
  </table>

  <h2>Ajouter une alerte</h2>
  <form @submit.prevent="ajouterRegle">
    <label>Port :</label>
    <input v-model="newPort" type="text" name="port" required />

    <br>
    <label>IP Source :</label>
    <input v-model="newIp" type="text" name="ip" required />

    <br>
    <label>Type :</label>
    <select v-model="newType" name="type" required>
      <option value="Intrusion">Intrusion</option>
      <option value="Scan de ports">Scan de ports</option>
    </select>

    <br>
    <label for="severite">Sévérité</label>
    <select v-model="newSeverite" name="severite" required>
      <option value="Faible">Faible</option>
      <option value="Moyenne">Moyenne</option>
      <option value="Elevée">Elevée</option>
    </select>

    <br>
    <div  required>
      <label>Action :</label>
      <input type="radio" v-model="newAction" name="action" value="autoriser" required />
      <label>Autoriser</label>
      <input type="radio" v-model="newAction" name="action" value="bloquer" required />
      <label>Bloquer</label>
    </div>

    <button type="submit">Ajouter</button>
  </form>

  <h2>Veille sécurité</h2>

  <section>
    <article>
      <h3>Nouvelle faille détectée</h3>
      <p>Une vulnérabilité critique a été identifiée sur certains serveurs web.</p>
      <a href="">Lire le rapport</a>
    </article>

    <article>
      <h3>Mise à jour de sécurité</h3>
      <p>Un correctif important est disponible pour les systèmes Linux.</p>
      <a href="">Voir les détails</a>
    </article>
  </section>

  <RouterView />
</template>

<style>
body {
	font-family: "Arial";
	margin: 20px;
	background-color: lightgray;
}

header {
	align-items: start;
	display: flex;
	background-color: darkblue;
	color: white;
}

table {
	border: 1px solid black;
	border-collapse: collapse;
	width: 100%;
}

th, td {
	border: 1px solid black;
	padding: 10px;
}

th {
	background-color: darkblue;
	color: white;
}

td {
	background-color: white;
}

form {
	padding: 10px;
	border: 1px solid gray;
}

form input, select{

	margin-bottom: 15px;
}

form div {
	align-items: start;
	display: flex;
}

button {
	background-color: darkblue;
	color: white;
	font-size: 15px;
	padding: 5px 20px 5px 20px;
	border: none;
	border-radius: 4px;
}

article {
	border: 1px solid;
	display: block;
	background-color: white;
	margin-bottom: 20px;
	padding: 10px;
	padding-bottom: 20px;
}
</style>
