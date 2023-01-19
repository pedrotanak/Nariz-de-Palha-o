x = 0;
y = 0;
function preload() {
    guardaImagem = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(800, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modeloCarregado);
    poseNet.on("pose", poses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(guardaImagem, x, y, 30, 30)
}
function modeloCarregado() {
    console.log("poseNet foi carregado")
}
function poses(resultados) {
    if (resultados.length > 0) {
        x = resultados[0].pose.nose.x - 15;
        y = resultados[0].pose.nose.y - 15;
    }
}
function tirarFoto(){
    save("minhafotodepalhaço.png")
}