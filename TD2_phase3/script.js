document.addEventListener("DOMContentLoaded", function() {
	const searchbar = document.getElementById("searchbar");
	searchbar.addEventListener("input", rechercher);

	const form = document.getElementById("form");
	form.addEventListener("submit", ajouterArticle);

	gererStatus();
});

function ajouterArticle(e) {
	e.preventDefault();

	const nom = document.getElementById("new-nom").value;
	const description = document.getElementById("new-description").value;
	const prix = document.getElementById("new-prix").value;
	const statut = document.getElementById("new-statut").value;

	if (isNaN(prix) || prix <= 0) {
		alert("Le prix doit avoir une valeur positive");
		return;
	}

	const newArticle = document.createElement("article");
	newArticle.innerHTML = `
		<h3>${nom}</h3>
		<p class="description">${description}</p>
		<label class="prix">Prix : ${prix}€</label>
		<span>Statut : ${statut}</span>
	`;

	const articles = document.querySelector("section");
	articles.appendChild(newArticle);

	gererStatus();

	document.getElementById("form").reset();
}

function rechercher(searchbar) {
	let input = searchbar.target.value.toLowerCase();
	const articles = document.querySelectorAll("article");
	let nbArticles = 0;

	articles.forEach(article => {
		let titre = article.querySelector("h3").textContent.toLowerCase();
		if (titre.includes(input)) {
			article.style.display = "";
			nbArticles = nbArticles + 1;
		} else {
			article.style.display = "none";
		}
	});

	const msgAucunArticle = document.getElementById("msg-aucun-article");
	if (nbArticles === 0) {
		msgAucunArticle.style.display = "grid";
	} else {
		msgAucunArticle.style.display = "none";
	}
}

function gererStatus() {
	const articles = document.querySelectorAll("article");
	articles.forEach(article => {
		const statut = article.querySelector("span");
		if (statut) {
			const statutText = statut.textContent.toLowerCase();

			if (statutText.includes("rupture")) {
				statut.classList.add("statut-rupture-stock");
			} else if (statutText.includes("stock")) {
				statut.classList.add("statut-en-stock");
			} else {
				statut.classList.add("statut-autre");
			}
		}
	})
}