let snowflakesCount = 200;
let baseCSS = null;
let fallHeight = 80;

function generateSnow() {
	let snowflakeName = "snowflake";
	let rule = baseCSS;

	for (let i = 1; i < snowflakesCount; i++) {
		let startX = Math.random() * 100;
		let endX = startX + Math.random() * 10 - 20.0;
		let scale = 0.2 + Math.random() * 0.2;
		let duration = 8.0 + Math.random() * 4.0;
		let delay = Math.random() * (fallHeight / 10 * 3) * -1;
		let opacity = Math.random();

		rule += `
			.${snowflakeName}:nth-child(${i}) {
				opacity: ${opacity};
				transform: translate(${startX}vw, 0px) scale(${scale});
				animation: fall-${i} ${duration}s ${delay}s linear infinite;
			}
			@keyframes fall-${i} {
				to {
					transform: translate(${endX}vw, ${fallHeight}vh) scale(${scale});
				}
			}
		`
	}

	let css = document.getElementById("snow-css")
	if (!css) {
		css = document.createElement('style');
		css.id = 'snow-css';
		document.head.appendChild(css);
	}
	
	css.innerHTML = rule;
	document.head.appendChild(css);

	const snow = document.getElementById('snow');
	snow.innerHTML = '';
	for (let i = 0; i < snowflakesCount; i++) {
		let element = document.createElement('div');
		element.className = "snowflake";
		snow.appendChild(element);
	}
}

window.addEventListener('resize', generateSnow);
window.addEventListener('load', generateSnow);