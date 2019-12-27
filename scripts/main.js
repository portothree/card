(() => {
	const input = document.querySelector(".card-input");
	const card = document.querySelectorAll(".card");

	if (card) {
		const obj = new CreditCard();
		input.addEventListener("input", () => {
			let vendor = obj.getCreditCardNameByNumber(input.value);

			if (vendor === "Mastercard") {
				card.forEach(side => {
					side.classList.add("card--master");
					const cardMaster = document.querySelectorAll(".card--master");
					const logoMaster = document.querySelector(".card__logo--master");

					cardMaster.forEach(each => {
						each.style.display = "inline-block";
					});

					logoMaster.style.display = "block";
				});
			}
		});
	}
})();
