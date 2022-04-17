import React from 'react';
import sistema from '../Imagenes/sistema.jpg';
import diagrama from '../Imagenes/diagrama.jpg';
import imagen from '../Imagenes/imagen.jpg';
import Sensorok from '../Imagenes/Sensorok.jpg';
import onoff from '../Imagenes/onoff.jpg';
import alimentacion from '../Imagenes/alimentacion.jpg';
import bnc from '../Imagenes/bnc.jpg';
import botones from '../Imagenes/botones.jpg';
import sentix from '../Imagenes/sentix.jpg';
import parteuno from '../Imagenes/parteuno.JPG';
const Manual = () => {
    return ( 
        <div className="paginamanual">
            <main className="container">
  <div className="p-4 p-md-5 mb-4 my-0 text-white fondo">
    <div className="col-md-10 px-0">
      <h1 className="display-4 font-italic">Manual de usuario y Recomendaciones</h1>
      <p className="lead my-3">Aqui encontrara toda la informacion relacionada con el sistema de monitoreo diseñado.</p>
      <p className="lead mb-0"><a href="#guiadecalibracion" className="text-white fw-bold">Continue reading...</a></p>
    </div>
  </div>
 
  <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Interfaz fisica</strong>
          <h3 className="mb-0">Hadware</h3>
          <div className="mb-1 text-muted">Dic 2021</div>
          <p className="card-text mb-auto">Sistema diseñado para monitorear variables en la Fermentacion del cafe</p>
         </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="150" height="200" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={sistema} alt=""/>
          
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Programacion y diseño</strong>
          <h3 className="mb-0">Software</h3>
          <div className="mb-1 text-muted">Dic 2021</div>
          <p className="mb-auto">Programas y codigos utilizados en la estacion de monitoreo.</p>
          </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="150" height="200" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={diagrama} alt=""/>

        </div>
      </div>
    </div>
  </div>
  <div id="guiadecalibracion">  </div>
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 font-italic border-bottom">
        Hadware.
      </h3>
       
      <article className="blog-post">
        <h2 className="blog-post-title">Especificaciones tecnicas</h2>
        <p className="blog-post-meta">Diciembre 1, 2021 </p>

        <p>En la parte frontal encontramos una pantalla LCD, el DHT11, el teclado para manejar la interfaz del sistema y 3 botones.</p>
        <p>ON/OFF: En la parte lateral derecha encontramos el boton de encendido y junto a el un fusible de un amperio de proteccion</p>
        <img className="bd-placeholder-img" width="200" height="130" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={onoff} alt=""/>
        <p>Alimentacion: En la parte trasera encontramos un conector de dos polos que va conectado a la corriente alterna encargado de alimentar los circuitos del sistema.</p>
        <img className="bd-placeholder-img" width="200" height="130" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={alimentacion} alt=""/>
        <p>Conexion electrodo: En el lado izquierdo se encuentra el conector tipo BNC a donde va conectado el electrodo. </p>
        <img className="bd-placeholder-img" width="200" height="130" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={bnc} alt=""/>
        <br/>

        <h3 className="blog-post-title">Botones</h3>
        <br/>
        <p>En la parte inferior a la pantalla encontramos 3 botones que se utilizan despues de oprimir la tecla D al inciar la monitorizacion de variables.</p>
        <p> Botón Rojo con led verde: Se oprime en caso de querer terminar con el proceso y volver al menú principal, 
          el led verde indica que la información adquirida se está enviando a la base de datos.</p>
        <p>Botón con led Azul: Este botón se oprime cuando se requiera medir pH, antes de oprimirlo el electrodo 
          debe estar sumergido en la muestra a medir, una vez terminado, 
          El led azul se apagará y se podrá retirar el electrodo de la muestra.</p>
        <p>Botón con led amarillo: Este botón se oprime en caso de querer ingresar los grados brix medidos mediante refractómetro, al oprimirlo se encenderá el led amarillo y aparecerá una línea parpadeando en la lcd, una vez se digite un valor de dos dígitos el led amarillo se apagará y se volverá 
          a encender el led de color verde, en caso de querer digitar números de un digito la forma de hacerlo es 01.</p>
          <img className="bd-placeholder-img" width="200" height="180" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={botones} alt=""/>  
          <br/>

        <h2 className="blog-post-title">Datos tecnicos</h2>
        <br/>
        <ul>
                <li className="lista"><h3>PH: Electrodo WTW Sentix 61.</h3></li>
                <li className="lista">Corriente electrodo de pH: 2 ∙10^(-12)A.</li>
                <li className="lista">Resistencia de entrada: 1.5 ∙10^12 Ω.</li>
                <li className="lista">Rango de pH: 0-12.</li>
                <li className="lista">Rango de offset permitido: 0 - 700 ∙10^(-3)V.</li>
                <li className="lista">Precisión: 0.01 PH.</li>
                <li className="lista"><h3>Temperatura tanque: DSB18B20</h3></li>
                <li className="lista">Comunicación: I2C.</li>
                <li className="lista">Resolución: 12 bits - 0.0625 °C.</li>
                <li className="lista">Precisión: ±0.5 °C.</li>
                <li className="lista"><h3>Temperatura ambiente: DHT11.</h3></li>
                <li className="lista">Comunicación: I2C.</li>
                <li className="lista">Rango: 0-50 °C.</li>
                <li className="lista">Precisión: ±2 °C.</li>
                <li className="lista">Resolución: 8 bits - 1 °C.</li>
                <li className="lista"><h3>Humedad: DHT11	</h3></li>
                <li className="lista">Rango:  20% RH a 90% RH</li>
                <li className="lista">Precisión	entre 0ºC y 50ºC ± 5% RH</li>
                <li className="lista">Resolución	1% RH</li>
                <li className="lista"><h3>Pantalla:  lcd 20x 4.</h3></li>
                <li className="lista">Comunicación: I2C</li>
                <li className="lista"><h3>Teclado: Teclado de matriz 4x6, 16 botones.</h3></li>
                <li className="lista">Comunicación: I2C mediante MCP23017.</li>
                
                </ul>
      </article>






      <article className="blog-post">
      <h3 className="pb-4 mb-4 font-italic border-bottom">
        Software.
      </h3>
        <h2 className="blog-post-title">Guia de calibracion pH metro</h2>
        <p className="blog-post-meta">Diciembre 1, 2021 by </p>

        <p>En la opcion A encontramos la calibracion del sistema, Para calibrar el pH metro es necesario seguir los siguiente pasos.</p>
        
        <ul>
                <li className="lista">Seleccionar la opcion Calibrar pH metro precionando la tecla A</li>
                <li className="lista">En la pantalla aparecera la pregunta de validacion "Desea calibrar pH metro", oprimir la tecla A para continuar</li>
                <li className="lista">En la pantalla aparecera el texto "Sumerga el electrodo en pH 4 y presione A para continuar" es muy importante sumergir el electrodo antes de precionar la tecla A ya que de esto depende la calidad de los datos resultantes</li>
                <li className="lista">Despues de 1 minuto aparecera el mensaje "Sumerga el electrodo en pH 7 y presione A para continuar"</li>
                <li className="lista">Una vez finalizada la calibracion del equipo la pantalla volvera al menu principal</li>
                </ul>
                <img className="bd-placeholder-img" width="450" height="230" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={imagen} alt=""/>
         
        <h2>Validacion conexion de sensores</h2>
        <p>En la opción B encontraremos un mensaje de conexión OK Si el sensor está conectado y funcionando, y
           en caso contrario encontraremos el mensaje DSB18B20 ERROR, DHT11 ERROR lo que indica hay que revisar sus conexiones. </p>
        
           <img className="bd-placeholder-img" width="250" height="130" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={Sensorok} alt=""/>
        
        
       
      </article>
    
      <article className="blog-post">
        <h2 className="blog-post-title">Recomendaciones para medir pH</h2>
        <p className="blog-post-meta">Diciembre 1, 2021 by </p>
              
        <ul>
                <li className="lista">Es muy importante utilizar buffer de calibracion certificados, ya que garantizan la confiabilidad de los datos obtenidos entre mediciones.</li>
                <li className="lista">El tiempo de adquisicion de informacion del sensor es muy importante de 0 a 1 minuto se considera que el electrodo esta en buen estado.</li>
                <li className="lista">Recuerde guardar el electrodo siempre en su buffer de almacenamiento de 3MKCL.</li>
                <li className="lista">Es importante lavar bien el electrodo en caso contrario perdera los puntos de calibracion.</li>
                <li className="lista">Se recomienda desconectar el electrodo mientras no se este utilizando.</li>
                </ul>
                <img className="bd-placeholder-img" width="450" height="430" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={sentix} alt=""/>
         
        
        <h2>Circuito de adquisicion de pH</h2>
        <p>Teniendo en cuenta que los amplificadores utilizados en la lectura de pH deben ser electrometricos, el circuito de entrada se
          diseño utilizando el amplificador CA3140 con corriente de polarizacion de 2 pA con una fuente de mas menos cinco voltios.
        </p>
        <img className="bd-placeholder-img" width="650" height="420" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={parteuno} alt=""/>
        {/* 
        <pre><code>Example code block</code></pre>
        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
        <h3>Sub-heading</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        </ol>
        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p> */}
      </article>





    </div>

    <div className="col-md-4">
      <div className="p-4 mb-3 bg-light rounded">
        <h4 className="font-italic">Informacion de contacto</h4>
        <p className="mb-0"><em>jasonstevendia@gmail.com</em> 
        </p>
      </div>
    
      <div className="p-4">
        <h4 className="font-italic">Archivos</h4>
        <ol className="list-unstyled mb-0">
          <li><a href="https://drive.google.com/file/d/172MZuZYy_TXdAAcIBhfnt7PpEKnJl2yg/view?usp=sharing">Electrodos para medir pH - Ciganda</a></li>
          <li><a href="https://drive.google.com/file/d/1XisSv2PHEr2PskmOaIdpGpvB-cL50gqs/view?usp=sharing">Introduccion a la probabilidad y estadistica</a></li>
          <li><a href="https://drive.google.com/file/d/1bPe1sNYJpKml1-7KE9TNkUbce3gmrXQI/view?usp=sharing">Metrologia: Calibracion de pH metro</a></li>
        </ol>
      </div>

      <div className="p-4">
        <h4 className="font-italic">Codigo</h4>
        <ol className="list-unstyled">
          {/* <li><a href="#">GitHub</a></li> */}
          
        </ol>
      </div>
    </div>

  </div>

</main>

<footer className="blog-footer">
  <p>Fermentacion del cafe</p>
  <p>
    <a href="#top">Regresar al incio</a>
  </p>
</footer>





            </div>


     );
}

export default Manual;