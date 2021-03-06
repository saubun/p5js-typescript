import 'p5';

window.setup = () => {
	createCanvas(640, 480);
	background(220);
};

window.draw = () => {
	ellipse(width / 2, height / 2, 20);
};
