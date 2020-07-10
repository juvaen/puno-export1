export function makePicture(
  THREE,
  scene,
  imageName,
  xpoz,
  ypoz,
  zpoz,
  rot,
  obraz
) {
  var geometry = new THREE.PlaneGeometry(45, 65);
  var loader = new THREE.TextureLoader();
  var material = new THREE.MeshPhongMaterial({
    map: loader.load(obraz),
    side: THREE.DoubleSide
  });
  material.map.minFilter = THREE.LinearFilter;
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = xpoz;
  cube.position.y = ypoz;
  cube.position.z = zpoz;
  cube.rotation.y = rot;
  cube.name = imageName;

  scene.add(cube);
}

//MAKE GALLERY WALLS
export const makeGalleryWalls = (THREE, scene) => {
  const cubeGeometry = new THREE.BoxGeometry(1110, 290, 560);
  const loader = new THREE.TextureLoader();
  const materialArray = [
    new THREE.MeshBasicMaterial({
      map: loader.load("textures/gallery1.jpg"),
      side: THREE.BackSide
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load("textures/gallery2.jpg"),
      side: THREE.BackSide
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load("textures/silling.jpg"),
      side: THREE.BackSide
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load("textures/floor.jpg"),
      side: THREE.BackSide
    }),
    new THREE.MeshBasicMaterial({
      map: loader.load("textures/gallery3.jpg"),
      side: THREE.BackSide
    }),
    new THREE.MeshPhongMaterial({
      map: loader.load("textures/gallery4.jpg"),
      side: THREE.BackSide
    })
  ];
  materialArray.map.minFilter = THREE.LinearFilter;
  let mesh = new THREE.Mesh(cubeGeometry, materialArray);
  mesh.name = "walls";
  scene.add(mesh);
};

/*
                    function readText(element, dataNewObject) {
                      let txtFile = new XMLHttpRequest();
                      let allText = "";
                      txtFile.onreadystatechange = function() {
                        if (
                          txtFile.readyState === XMLHttpRequest.DONE &&
                          txtFile.status == 200
                        ) {
                          allText = txtFile.responseText;
                          //allText = txtFile.replace("<br />");
                          allText = allText.split("\n").join("");
                        }

                        document.getElementById(element).innerHTML = allText;
                      };
                      txtFile.open("GET", dataNewObject, true);
                      txtFile.send(null);
                    }
      */
/*
                    function makeNewObject(dataNewObject, pObject) {


                        let text2 = document.createElement("div");
                        text2.id = "xxx";
                        text2.class = "info";
                        document.body.appendChild(text2);
                        readText();
                        console.log(xxx);

                        

                        //console.log(text2.nextElementSibling);
                        //text2.appendChild(text2.nextElementSibling);

                       
                        */
