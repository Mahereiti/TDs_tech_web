document.addEventListener("DOMContentLoaded", function() {
	const btnAjouter = document.getElementById("btnAjouter");
	btnAjouter.addEventListener("click", ajouter_regle);
});

function ajouter_regle() {
	// Recupere infos new regle
	const id = document.querySelectorAll("table tbody tr").length + 1;
	const port = document.getElementById("new_regle_port").value;
	const ip = document.getElementById("new_regle_ip").value;
	const type = document.getElementById("new_regle_type").value;
	const severite = document.getElementById("new_regle_severite").value;
	
	// Recupere action
	const action1 = document.getElementById("action1");
	const action2 = document.getElementById("action2");
	let actionFinale = "";
	if (action1.checked) {
		actionFinale = action1.value;
	}
	if (action2.checked) {
		actionFinale = action2.value;
	}
	
	if (port!="" && ip!="" && type!="" && severite!="" && actionFinale!="") {
		// Ajoute new regle dans tableau
		const tbody = document.querySelector("table tbody");
		const tr = document.createElement("tr");
		const date = new Date().toLocaleDateString("fr-FR");
		tr.innerHTML = `
			<td>${id}</td>
			<td>${date}</td>
			<td>${ip}</td>
			<td>${type}</td>
			<td>${severite}</td>`;
		tbody.appendChild(tr);
		
		// Affiche info new regle
		alert("Alerte ajoutée :\n> Port: "+port+"\n> Ip: "+ip+"\n> Type: "+type+"\n> Severite: "+severite+"\n> Action: "+actionFinale);
	}
}