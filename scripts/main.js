const input = document.querySelector(".card-input");
const card = document.querySelectorAll(".card");
const obj = new CreditCard();

class EventEmitter {
	constructor() {
		this.events = {};
	}

	subscribe(eventName, fn) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}

		this.events[eventName].push(fn);

		return () => {
			this.events[eventName] = this.events[eventName].filter(
				eventFn => fn !== eventFn
			);
		};
	}

	emit(eventName, data) {
		const event = this.events[eventName];

		if (event) {
			event.forEach(fn => {
				fn.call(null, data);
			});
		}
	}
}

const emitter = new EventEmitter();
emitter.subscribe("cardnumber", data => {
	if (data.vendor === "Mastercard") {
		card.forEach(side => {
			side.classList.toggle("card--master");
			const cardMaster = document.querySelectorAll(".card--master");
			const logoMaster = document.querySelector(".card__logo--master");

			cardMaster.forEach(each => {
				each.style.display = "inline-block";
			});

			logoMaster.style.display = "block";
		});
	}
});

input.addEventListener("input", () => {
	const vendor = obj.getCreditCardNameByNumber(input.value);
	emitter.emit("cardnumber", { vendor });
});
