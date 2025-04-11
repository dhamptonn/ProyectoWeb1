var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/salaquiru.jpg');

//Crea y agrega el primer infospot
var infospot1 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot1.position.set(500 ,-275 , -310);
infospot1.addHoverText('Cabina de bioseguridad clase II: utilizada para proteger el material estéril de contaminación externa mediante flujo laminar con filtros HEPA. Común en salas quirúrgicas, laboratorios y preparación de medicamentos.', -60);
infospot1.element.innerHTML = `
    <dive class="" style="">
        <iframe witdh="720" height="480" src="https://www.youtube.com/embed/oJcR8tWj4Dk"></iframe>
    </div>
`;
panorama.add(infospot1);

//Crea y agrega el segundo infospot
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(500 ,-12 , 115);
infospot2.addHoverText('Abrir PDF.',100);
infospot2.element.innerHTML = `
<div style="background-color: rgba(0,0,0,0.8); color: white; padding: 12px; border-radius: 8px; width: 260px;">
    Abrir PDF con información relevante del equipo y sus usos clinicos.
</div>
`;
infospot2.addEventListener('click', function() {
    window.open("pdf/ecografo.pdf", "_blank");
});
panorama.add(infospot2);


//Crea y agrega  el tercer infospot
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(500 ,124 , 420);
infospot3.addHoverText('Portasuero: Soporte médico utilizado para sostener bolsas de suero, transfusiones o medicamentos intravenosos. Es ajustable en altura y móvil para facilitar el movimiento del paciente.', -60);
infospot3.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color: white; padding: 12px; border-radius: 8px; width: 260px;">Portasuero: Soporte médico utilizado para sostener bolsas de suero, transfusiones o medicamentos intravenosos. Es ajustable en altura y móvil para facilitar el movimiento del paciente.</div>';
panorama.add(infospot3);


//Crea y agrega  el cuarto infospot
var infospot4 = new PANOLENS.Infospot(75, PANOLENS.DataImage.Info);
infospot4.position.set(-501 ,-136 , -371);
infospot4.addHoverText('', -100);
infospot4.element.innerHTML = `
<div style="background-color: rgba(0,0,0,0.8); color: white; padding: 12px; border-radius: 8px; width: 260px;">
    Mesa de instrumental quirúrgico: Superficie metálica estéril utilizada en quirófanos para disponer los instrumentos quirúrgicos durante un procedimiento. 
    Permite al equipo médico acceder rápidamente a bisturís, pinzas, tijeras y otros materiales críticos.
    <br>
    <img src="imagenes/medicina.svg" alt="Imagen medicina" style="max-width: 100%; height: auto; border-radius: 5px">
    <br>
</div>
`
panorama.add(infospot4);

//Crea y agrega  el quinto infospot
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(265, 50, 940);
infospot5.addHoverText('Máquina de anestesia: Equipo médico encargado de administrar gases anestésicos y mantener la ventilación controlada del paciente durante una cirugía. Incluye controles de mezcla de gases, flujo, y monitoreo de parámetros vitales.', -60);

infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);


//Crea y agrega  el sexto infospot
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-276 ,-131 , 500);
infospot6.addHoverText('', -100);
infospot6.element.innerHTML = `
<div style="background-color: rgba(0,0,0,0.8); color: white; padding: 12px; border-radius: 8px; width: 260px;">
    Mesa quirúrgica: Superficie sobre la que se posiciona al paciente durante una intervención. 
    Su diseño ajustable permite colocar al paciente en distintas posiciones según el tipo de cirugía. 
    Fabricada en materiales resistentes y de fácil desinfección.
    <br>
    <img src="imagenes/mesaquirur.svg" alt="Imagen medicina" style="max-width: 100%; height: auto; border-radius: 5px">
    <br>
</div>
`
panorama.add(infospot6);


//Crea y agrega  el septimo infospot
var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-392 ,42 , 500); // Ajustá según tu imagen
infospot7.addHoverText('Torre de laparoscopía: Conjunto de equipos utilizados para realizar procedimientos quirúrgicos mínimamente invasivos. Incluye fuente de luz, insuflador, cámara endoscópica y monitor para visualización en tiempo real.', -60);
infospot7.element.innerHTML = `
    <dive class="" style="">
        <iframe witdh="720" height="480" src="https://www.youtube.com/embed/QJk42nDyOP8"></iframe>
    </div>
`;
panorama.add(infospot7);


//Crea y agrega  el octavo infospot
var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot8.position.set(-89 ,497 , 500);
infospot8.addHoverText('Lámpara quirúrgica: Proporciona luz blanca e intensa sin sombras, indispensable durante cirugías para visualizar con precisión tejidos y órganos. Su diseño permite ajustar el ángulo y distancia según la necesidad del procedimiento.', -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color: white; padding: 12px; border-radius: 8px; width: 260px;">Lámpara quirúrgica: Proporciona luz blanca e intensa sin sombras, indispensable durante cirugías para visualizar con precisión tejidos y órganos. Su diseño permite ajustar el ángulo y distancia según la necesidad del procedimiento.</div>';
panorama.add(infospot8);


//Crea y agrega  el noveno infospot
var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(-500 ,161 , -135);
infospot9.addHoverText('Dispensador Gel antiséptico', -100);
infospot9.element.innerHTML = `
<div style="background-color: rgba(0,0,0,0.8); color: white; padding: 12px; border-radius: 8px; width: 260px;">
    Dispensador Gel antiséptico: Elemento básico de bioseguridad. Permite al personal desinfectarse las manos antes y después de atender a un paciente, ayudando a prevenir infecciones dentro del quirófano.
    <br>
    <img src="imagenes/medicina2.svg" alt="Imagen medicina" style="max-width: 100%; height: auto; border-radius: 5px">
    <br>
</div>
`
panorama.add(infospot9);


//Crea y agrega  el decimo infospot
var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(-500 ,-78 , 172);
infospot10.addHoverText("Área de recuperación", -60);
infospot10.element.innerHTML = 
`
  <div style="background-color: rgba(0,0,0,0.85); color: white; padding: 12px; border-radius: 8px; width: 240px; font-family: Arial, sans-serif; font-size: 11px; line-height: 1.3;">
    <h4 style="margin-top: 0; margin-bottom: 6px; color: #4FC3F7; font-size: 18px;">Área de Recuperación Postquirúrgica</h4>
    <p style="margin-bottom: 10px; font-size: 14px;">
      Espacio donde el paciente es monitoreado tras una cirugía para asegurar su estabilidad antes de ser trasladado a habitación o dado de alta.
    </p>

    <details style="margin-bottom: 8px;">
      <summary style="cursor:pointer; color: #00BCD4; font-size: 14px;">🔍 Ver cuidados postoperatorios</summary>
      <ul style="margin-top: 6px; padding-left: 18px; font-size: 11px;">
        <li>Monitoreo de signos vitales</li>
        <li>Evaluación neurológica</li>
        <li>Control del dolor</li>
        <li>Evaluación de sangrado</li>
        <li>Observación anestésica</li>
      </ul>
    </details>
  </div>
`;
panorama.add(infospot10);

//Agrega la panoramica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    //Habilitada salida en pantalla completa
    output: 'fullscreen',
    autoHidaInfospot: false
});
viewer.add(panorama);


