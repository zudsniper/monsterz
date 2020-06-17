const PIXI = window.pixi;
const app = new PIXI.application();

//add pixi canvas to gaming div
$('.gaming').append(app.view);

const drawContainer = new PIXI.container({width: 800, height: 600});
app.stage.addChild(drawContainer);

//css icon styles
const defaultIcon = "url('public/images/sprites/pointer.png'),auto";
const hoverIcon = "url('public/images/sprites/pointer-hover.png'),auto";

//pixi cursor styles
app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;

