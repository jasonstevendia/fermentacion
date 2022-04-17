import React, { Component } from "react";
/* import logo from "./logo.svg"; */
/* import "./App.css"; */
import firebase from "./../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

import moment from 'moment';
 

/* import Moment from 'react-moment';
import { render } from 'react-dom' */
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'




class Database extends Component {
  _isMounted = false;
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    t: false,
    form:{
      Fecha: '',
      HR: '',
      Tambiente: '',
      Ttanque: '',
      ValorPH: '',
      Valor_brixt: ''
    },
    id: 0,
     data2: [],
     data3:[],
     data4:[],
     data5:[],
     data6:[],
     xAxis: {
      categories: [''],
    }, 
    isLoading: true,
    estadofecha1: false,
    estadofecha2:false,
    fechainicio:[],
    fechafin:['vacio'],
     };


    
 

                   peticionGet = () =>
                   {
                     firebase.child("test1data").on("value", (Fecha) => {
                     if (Fecha.val() !== null) {
                        this.setState({ ...this.state.data, data: Fecha.val() }); 
                     } else {
                      this.setState({ data: [] });
                            }                                           });
                   };

                peticionPost=()=>
                {
                    firebase.child("test1data").push(this.state.form,
                    error=>{
                      if(error)console.log(error)
                    });
                    this.setState({modalInsertar: false});
                }

                peticionPut=()=>
                {
                    firebase.child(`test1data/${this.state.id}`).set(
                    this.state.form,
                    error=>{
                    if(error)console.log(error)
                    });
                    this.setState({modalEditar: false});
                }
                

                peticionDelete=()=>{
                  if(window.confirm(`Estás seguro que deseas eliminar el canal ${this.state.form && this.state.form.Fecha}?`))
                  {
                  /* firebase.child(`test1data`).child(`data/${this.state.id}`).remove( */
                    firebase.child(`test1data/${this.state.id}`).remove(
                    error=>{
                      if(error)console.log(error)
                    });
                  }
                }

                handleChange=e=>{
                  this.setState({form:{
                    ...this.state.form,
                    [e.target.name]: e.target.value
                  }})
                  
                }

                seleccionarID=async(test1data, id, caso,Fecha)=>{
                  await this.setState({form: test1data, id: id});
                  (caso==="Editar")?this.setState({modalEditar: true}):
                  this.peticionDelete()                
                }

                graficar= async(test1data,i,caso)=>{          
                  await this.setState({form: test1data});
                  (caso==="Graficar")?this.setState({t: true}):
                  this.Mostrar(test1data,i)
                  this.setState({t: true})
                }

            Mostrar=async (test1data,i)=>
            { await this.setState({form: test1data});
              var fechadeinicio=moment.utc(this.state.fechainicio).format('LL');
              console.log(fechadeinicio);
              var fechadefin=moment.utc(this.state.fechafin).format('LL');
              console.log(fechadefin);
              var data=[] 
              var dataT=[] 
              var datat=[]
              var dataPH=[]
              var dataBrixt=[]
              var date=[]   
              var datecomparar=[] 
              var c=-1;     
              console.log(this.state.estadofecha1);  
              for ( i in test1data) 
              {     
                    datecomparar[c]=moment.utc(test1data[i].Fecha).format('LL');
                    if((fechadeinicio === datecomparar[c])||(fechadefin === datecomparar[c]))
                    {  c=c+1;
                    data[c]=(test1data[i].HR);
                    dataT[c]=(test1data[i].Tambiente);
                    datat[c]=(test1data[i].Ttanque);
                    dataPH[c]=(test1data[i].ValorPH);
                    dataBrixt[c]=(test1data[i].Valor_brixt);
                    /* date[c]=(test1data[i].Fecha); */
                    /* moment.locale('de'); */
                    date[c]=moment.utc(test1data[i].Fecha).format('LLL');
                    
                    /* LTS : 'h:mm:ss A', LT : 'h:mm A', L : 'MM/DD/YYYY', LL : 'MMMM D, YYYY', LLL : 'MMMM D, YYYY h:mm A', LLLL : 'dddd, MMMM D, YYYY h:mm A' */
                    this.state.xAxis.categories[c]=date[c];
                    this.state.data2[c]=parseFloat(data[c]); //HR
                    this.state.data3[c]=parseFloat(dataT[c]); //Temperatura ambiente
                    this.state.data4[c]=parseFloat(datat[c]);//Temperatura tanque
                    this.state.data5[c]=parseFloat(dataPH[c]);
                    this.state.data6[c]=parseFloat(dataBrixt[c]);}
                    
               }
                 
            }

            

             formatdate2 = async (test1data,Fechainicio,i,estadofecha1) =>{
              
              await this.setState({form: test1data});  
              if(this.state.estadofecha2===true)
              { this.setState({estadofecha2: false})
                 /* console.log(this.state.estadofecha1); */  
                 this.setState({fechainicio: '2000-01-01'}) }
              else
              {
                this.setState({estadofecha2: true});
                /* console.log(this.state.estadofecha1); */
                this.setState({fechainicio: Fechainicio});
               
               /*  console.log(this.state.fechainicio); */
              }
              }

              formatdate = async (test1data,Fechafin,i,estadofecha1) =>{    
                await this.setState({form: test1data});          
                console.log('1');           
                if(this.state.estadofecha1===true)
                { this.setState({estadofecha1: false})
                  /* console.log(this.state.estadofecha1); */
                  this.setState({fechafin: '2000-01-01'})
                }
                else
                {
                  this.setState({estadofecha1: true})
                  /* console.log(this.state.estadofecha1); */
                  this.setState({fechafin: Fechafin})
                /* console.log(this.state.fechafin); */
               
                /* console.log(moment.utc(this.state.fechafin).format('LL')); */
                }
               }

            //update
            updateSeries = () => {
              // The chart is updated only with new options.
              this.setState({ });
            }

            componentDidMount() {this.peticionGet();}
            componentWillUnmount() {this._isMounted = false;}

render() {

    var options= {
      title: {
        text: 'Humedad Relativa'
      },
      xAxis: {
        categories:  this.state.xAxis.categories,
      },
      series: [
        { data:  this.state.data2 }
      ],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: ''
            }
          }
        }
      }
    };
    var options2= {
      title: {
        text: 'Temperatura ambiente'
      },
      xAxis: {
        categories: this.state.xAxis.categories,
      },
      series: [
        { data:  this.state.data3 }
      ],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: ''
            }
          }
        }
      }
    };
    var options3= {
      title: {
        text: 'Temperatura Tanque'
      },
      xAxis: {
        categories: this.state.xAxis.categories,
      },
      series: [
        { data:  this.state.data4 }
      ],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: ''
            }
          }
        }
      }
    };
    var options4= {
      title: {
        text: 'PH'
      },
      xAxis: {
        categories: this.state.xAxis.categories,
      },
      series: [
        { data:  this.state.data5 }
      ],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: ''
            }
          }
        }
      }
    };

    var options5= {
      title: {
        text: 'Grados Brixt'
      },
      xAxis: {
        categories: this.state.xAxis.categories,
      },
      series: [
        { data:  this.state.data6 }
      ],
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: ''
            }
          }
        }
      }
    };

    


  
   return (

      
      <div className="App" >


    {this.state.t === true?

<div onMouseOver={this.updateSeries.bind(this)}>
    <div>
    {/*< button onMouseMove={this.updateSeries.bind(this)}>Actualizar Datos</button> */}
    <h1 className="p-4 p-md-5 mb-4 text-white fondo">Graficas de Variables Monitoreadas en la Planta de Fermentacion</h1>  
    <div>
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
    />
    </div>   
    <div>
    <HighchartsReact
    highcharts={Highcharts}
    options={options2}
    />
    </div>   
    <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options3}
  />
</div>   
<div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options4}
  />
</div> 
<div >
  <HighchartsReact
    highcharts={Highcharts}
    options={options5}
  />
</div>            

      </div>
      </div>
:
<div >
<div className="p-4 p-md-5 mb-4 text-white fondo">
    <div className="col-md-10 px-0">
      <h1 className="display-4 font-italic ">Base de datos</h1>
      <p className="lead my-3">En la siguiente tabla se muestran los datos adquiridos por los sensores presentes en el tanque de fermentacion</p>
      </div>
  </div>
                
            
        <br />
        <button className="botonI" onClick={()=>this.setState({modalInsertar: true})}>Insertar</button>
        <br /><br />
        <button className="botonG" 
                  onClick={()=>this.graficar
                  (
                    this.state.data, 
                    'Graficar'
                  )}
                  >Graficar</button>

        
        <br />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Fecha</th>    
              <th>HR</th>
              <th>Temperatura ambiente</th>
              <th>Temperatura tanque</th>
              <th>Valor PH</th>
              <th>Valor Brixt</th>
              <th>Accion</th>
            </tr>
          </thead>
          
          <tbody>
            {Object.keys(this.state.data).map(i=>{
             // console.log(i);
              return <tr key={i}>
                <td>{this.state.data[i].Fecha}</td>
                <td>{this.state.data[i].HR}</td>
                <td>{this.state.data[i].Tambiente}</td>
                <td>{this.state.data[i].Ttanque}</td>
                <td>{this.state.data[i].ValorPH}</td>
                <td>{this.state.data[i].Valor_brixt}</td>
                
                <td>
                 {/* <input type="checkbox"  onChange={()=> this.Mostrar(this.state.data,i, this.state.data[i].HR)} /> {"   "} */}
                  
                 {/* <input type="checkbox"  onClick={()=>this.formatCalendarDate(this.state.data.Fecha)} />     */} 
                  <button className="btn btn-primary" onClick={()=>this.seleccionarID(this.state.data[i], i, 'Editar')}>Editar</button> {"   "}
                  </td>
                   <td>
                  {/* <input type="checkbox"  onChange={()=>this.formatCalendarDate(this.state.data.Fecha[i],i)} /> */}
                  <button className="btn btn-danger" onClick={()=>this.seleccionarID(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
                  </td>
                <td>
                   <input type="checkbox"  onChange={()=>this.formatdate2(this.state.data,this.state.data[i].Fecha,i)} />  
                  </td>
                  <td>
                  <input type="checkbox"  onChange={()=>this.formatdate(this.state.data,this.state.data[i].Fecha,i)} /> 
                  </td>
                
              </tr>
              
            })}
          </tbody>
          

        </table>
        
        


        <Modal isOpen={this.state.modalInsertar}>
        
      <ModalHeader>Insertar Registro</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Fecha: </label>
          <br />
          <input type="text" className="form-control" name="Fecha" onChange={this.handleChange}/>
          <br />
          <label>HR: </label>
          <br />
          <input type="text" className="form-control" name="HR" onChange={this.handleChange}/>
          <br />
          <label>Tambiente: </label>
          <br />
          <input type="text" className="form-control" name="Tambiente" onChange={this.handleChange}/>
          <br />
          <label>Ttanque : </label>
          <br />
          <input type="text" className="form-control" name="Ttanque" onChange={this.handleChange}/>
          <label>ValorPH: </label>
          <br />
          <input type="text" className="form-control" name="ValorPH" onChange={this.handleChange}/>
          <br />
          <label>Valor_brixt: </label>
          <br />
          <input type="text" className="form-control" name="Valor_brixt" onChange={this.handleChange}/>
              
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
      </ModalFooter>
    </Modal>

   

    <Modal isOpen={this.state.modalEditar}>
      <ModalHeader>Editar Registro</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Fecha: </label>
          <br />
          <input type="text" className="form-control" name="Fecha" onChange={this.handleChange} value={this.state.form && this.state.form.Fecha}/>
          <br />
          <label>HR: </label>
          <br />
          <input type="text" className="form-control" name="HR" onChange={this.handleChange} value={this.state.form && this.state.form.HR}/>
          <br />
          <label>T ambiente: </label>
          <br />
          <input type="text" className="form-control" name="Tambiente" onChange={this.handleChange} value={this.state.form && this.state.form.Tambiente}/>
          <br />
          <label>T tanque : </label>
          <br />
          <input type="text" className="form-control" name="Ttanque" onChange={this.handleChange} value={this.state.form && this.state.form.Ttanque}/>
        
          <br />
          <label>Valor PH: </label>
          <br />
          <input type="text" className="form-control" name="ValorPH" onChange={this.handleChange} value={this.state.form && this.state.form.ValorPH}/>
          <br />
          <label>Valor_brixt: </label>
          <br />
          <input type="text" className="form-control" name="Valor_brixt" onChange={this.handleChange} value={this.state.form && this.state.form.Valor_brixt}/>
          
        
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
        <br />
        <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
      </ModalFooter>
      </Modal>
      </div>}
      </div> 
     
      
  );
  }
}

export {Database};
