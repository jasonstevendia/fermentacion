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

        <p>Uno de los procesos implicados en la etapa de beneficio del caf?? es la fermentaci??n,
           en la cual bacterias, levaduras y otros microorganismos mediante el uso de enzimas  
           oxidan parcialmente los azucares presentes en el caf?? y por consiguiente causan la 
           descomposici??n del mucilago, este proceso se realiza en pozas de fermentaci??n en las
            cuales se debe evitar la entrada de agentes ajenos al caf?? como insectos, aguas lluvias 
            o basura que afecten la calidad del producto por tanto las mismas deben estar protegidas 
            de la intemperie para lograr un  proceso de fermentado ??ptimo  . </p>
         <p>Hay distintas t??cnicas para determinar la finalizaci??n de la etapa de fermentaci??n. Por ejemplo, Katzeff indica que el punto ??ptimo de fermentaci??n es a trav??s de la t??cnica emp??rica, que consiste en formar un hoyo con el cabo de una vara en la poza de caf?? a fermentar, si despu??s de un tiempo los granos de caf?? no caen en el orificio elaborado entonces la fermentaci??n ha concluido. </p>   
         <p>Por su parte Casta??eda  indica que una de las t??cnicas m??s usadas por los caficultores en la etapa de fermentaci??n consiste en tomar un pu??ado de granos de caf?? y frotarlos entre las manos con agua, si el muc??lago se desprende y el sentir los granos al tacto se describe una sensaci??n ??spera entonces la etapa de fermentaci??n se da por terminada . </p>   
         <p>La Federaci??n Nacional de Cafeteros de Colombia tiene como objetivo disminuir la variabilidad de la calidad del caf?? como producto final, por tanto dise??aron un instrumento para tal objetivo, dicho instrumento es conocido como fermaestro dise??ado y validado mediante pruebas de laboratorio en fincas pertenecientes a los departamentos de Caldas, Risaralda, Quind??o y Valle del cauca , consiste en llenar un cono de caf?? al ras de la base mayor y se sumerge en la poza de caf??, despu??s de un tiempo se remueve el dispositivo de la poza y se deja caer tres veces sobre la base mayor, si el caficultor observa que el caf?? se sit??a en la primera marca horizontal indica que la etapa de fermentaci??n ha terminado.</p>  
         <p>Solo en la t??cnica del fermaestro se realiz?? estudios de laboratorio verificando el porcentaje de degradaci??n del mucilago en los departamentos mencionados, a diferencia de las otras t??cnicas teniendo ??nicamente en cuenta la experiencia del caficultor, carentes de datos como variables externas y variables internas, las cuales tambi??n afectan el proceso de fermentaci??n que posteriormente se refleja en la calidad de taza del caf??. Como nos indica el texto de Pe??uela mediante pruebas realizadas usando m??todos tradicionales de fermentaci??n, finalizando esta etapa el mucilago se degrada en un 58 % despu??s de 7 horas y un 75 % despu??s de 10 horas para el m??todo del orificio y del tacto respectivamente, dando lugar a caracter??sticas no deseadas en el grano de caf??, causadas por la fermentaci??n inconclusa de los m??todos tradicionales.</p>
         <p>En el texto de S??nchez se indica que si la etapa de fermentaci??n no se concluye de manera adecuada entonces el muc??lago presente en el grano de caf?? no se remueve, por tanto, se produce una capa oscura en el pergamino que permite el crecimiento de moho por el contenido de az??car y la presencia de algunos microorganismos, estos defectos disminuyen la calidad del caf?? al continuar en las siguientes etapas de producci??n .</p>
         <p>La literatura cient??fica plantea que una forma de medir el punto de fermentado es tener en cuenta variables como: PH, tiempo, grados brix  y adem??s se considera  que la temperatura junto con humedad relativa ambiente variables dependientes de la ubicaci??n geogr??fica influyen en la calidad de taza , por relacionarse con la proliferaci??n de microorganismos, en el tanque de fermentaci??n; el informe de CENICAFE (Centro Nacional de Investigaciones de Caf??)  acerca del control de la fermentaci??n, se detalla el comportamiento de estas variables y adem??s se describen algunos aspectos bioqu??micos durante la fermentaci??n, se presentan gr??ficos de temperatura y pH con el objetivo de observar cambios en las cualidades del caf?? como bebida, que son evaluadas por expertos catadores que califican la bebida a trav??s de los sentidos del gusto y del olfato. </p> 
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

