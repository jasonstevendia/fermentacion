import React from 'react';
import Cafe from '../Imagenes/Cafe.jpg';
import Tanquefermentacion from '../Imagenes/Tanquefermentacion.jpg';
const Inicio = () => {
    return (
        <div>
      <main className="container">
  <div className="p-4 p-md-5 mb-4 text-white fondo ">
    <div className="col-md-10 px-0">
      <h1 className="display-4 font-italic">Informacion general sobre la fermentacion del cafe</h1>
      <p className="lead my-3">Aqui encontrara toda la informacion relacionada con la fermentacion del cafe y algunos textos guia utilizados.</p>
      <p className="lead mb-0"><a href="#guiadecalibracion" className="text-white fw-bold">Continue reading...</a></p>
    </div>
  </div>
 
  <div className="row mb-2">
    <div className="col-md-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Fermentacion del cafe</strong>
          <h3 className="mb-0">Estado del arte</h3>
          <div className="mb-1 text-muted">Dic 2021</div>
          <p className="card-text mb-auto">La fermentacion del cafe es una de los procesos mas antiguos practicado por los caficultores y que tiene gran influencia en su valor en tasa.</p>
          
        </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="250" height="250" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={Cafe} alt=""/>
        </div>
      </div>
    </div>
    
  </div>
  <div id="guiadecalibracion">  </div>
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 font-italic border-bottom">
        Fermentacion del cafe
      </h3>
       
      
      <article className="blog-post">
        <h2 className="blog-post-title">Estado del arte</h2>
        <p className="blog-post-meta">Diciembre 1, 2021 by </p>

        <p>Uno de los procesos implicados en la etapa de beneficio del café es la fermentación,
           en la cual bacterias, levaduras y otros microorganismos mediante el uso de enzimas  
           oxidan parcialmente los azucares presentes en el café y por consiguiente causan la 
           descomposición del mucilago, este proceso se realiza en pozas de fermentación en las
            cuales se debe evitar la entrada de agentes ajenos al café como insectos, aguas lluvias 
            o basura que afecten la calidad del producto por tanto las mismas deben estar protegidas 
            de la intemperie para lograr un  proceso de fermentado óptimo  . </p>
         <p>Hay distintas técnicas para determinar la finalización de la etapa de fermentación. Por ejemplo, Katzeff indica que el punto óptimo de fermentación es a través de la técnica empírica, que consiste en formar un hoyo con el cabo de una vara en la poza de café a fermentar, si después de un tiempo los granos de café no caen en el orificio elaborado entonces la fermentación ha concluido. </p>   
         <p>Por su parte Castañeda  indica que una de las técnicas más usadas por los caficultores en la etapa de fermentación consiste en tomar un puñado de granos de café y frotarlos entre las manos con agua, si el mucílago se desprende y el sentir los granos al tacto se describe una sensación áspera entonces la etapa de fermentación se da por terminada . </p>   
         <p>La Federación Nacional de Cafeteros de Colombia tiene como objetivo disminuir la variabilidad de la calidad del café como producto final, por tanto diseñaron un instrumento para tal objetivo, dicho instrumento es conocido como fermaestro diseñado y validado mediante pruebas de laboratorio en fincas pertenecientes a los departamentos de Caldas, Risaralda, Quindío y Valle del cauca , consiste en llenar un cono de café al ras de la base mayor y se sumerge en la poza de café, después de un tiempo se remueve el dispositivo de la poza y se deja caer tres veces sobre la base mayor, si el caficultor observa que el café se sitúa en la primera marca horizontal indica que la etapa de fermentación ha terminado.</p>  
         <p>Solo en la técnica del fermaestro se realizó estudios de laboratorio verificando el porcentaje de degradación del mucilago en los departamentos mencionados, a diferencia de las otras técnicas teniendo únicamente en cuenta la experiencia del caficultor, carentes de datos como variables externas y variables internas, las cuales también afectan el proceso de fermentación que posteriormente se refleja en la calidad de taza del café. Como nos indica el texto de Peñuela mediante pruebas realizadas usando métodos tradicionales de fermentación, finalizando esta etapa el mucilago se degrada en un 58 % después de 7 horas y un 75 % después de 10 horas para el método del orificio y del tacto respectivamente, dando lugar a características no deseadas en el grano de café, causadas por la fermentación inconclusa de los métodos tradicionales.</p>
         <p>En el texto de Sánchez se indica que si la etapa de fermentación no se concluye de manera adecuada entonces el mucílago presente en el grano de café no se remueve, por tanto, se produce una capa oscura en el pergamino que permite el crecimiento de moho por el contenido de azúcar y la presencia de algunos microorganismos, estos defectos disminuyen la calidad del café al continuar en las siguientes etapas de producción .</p>
         <p>La literatura científica plantea que una forma de medir el punto de fermentado es tener en cuenta variables como: PH, tiempo, grados brix  y además se considera  que la temperatura junto con humedad relativa ambiente variables dependientes de la ubicación geográfica influyen en la calidad de taza , por relacionarse con la proliferación de microorganismos, en el tanque de fermentación; el informe de CENICAFE (Centro Nacional de Investigaciones de Café)  acerca del control de la fermentación, se detalla el comportamiento de estas variables y además se describen algunos aspectos bioquímicos durante la fermentación, se presentan gráficos de temperatura y pH con el objetivo de observar cambios en las cualidades del café como bebida, que son evaluadas por expertos catadores que califican la bebida a través de los sentidos del gusto y del olfato. </p> 
         <img className="bd-placeholder-img" width="450" height="450" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" src={Tanquefermentacion} alt=""/>
      
      </article>

    </div>

    <div className="col-md-4">
      <div className="p-4 mb-3 bg-light rounded">
        <h4 className="font-italic">Informacion de contacto</h4>
        <p className="mb-0"><em>jasonstevendia@gmail.com</em> 
        </p>
      </div>
    
      <div className="p-4">
        <h4 className="font-italic">Archives</h4>
        <ol className="list-unstyled mb-0">
          <li><a href="https://drive.google.com/file/d/1TnJ1iw8ES1PwO3qciHtks_OexR-lqy6k/view?usp=sharing">Manifiesto de los catadores de cafe. Katzeff</a></li>
          <li><a href="https://agris.fao.org/agris-search/search.do?recordID=PE1997104347">Manual Tecnico cafetalero</a></li>
          <li><a href="https://drive.google.com/file/d/1vvmFV3800vekziY25RfxG8HgCOejKjT7/view?usp=sharing">Influencia del tiempo de fermentacion segun la altitud</a></li>
          <li><a href="https://drive.google.com/file/d/1GbRWJpywWrd9bYuZAm3KEIw7eJqiv1ZD/view?usp=sharing">Metodo fermaestro</a></li>
          <li><a href="https://drive.google.com/file/d/1u4-Sm_6CpiWVtbzQ9zDqqAyPJcWtUaNV/view?usp=sharing">Estudio de algunas variables en la fermentacion del cafe.</a></li>
          
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
 
export default Inicio; 

