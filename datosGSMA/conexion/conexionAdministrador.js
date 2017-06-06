//------------Datos de conexion --------------------------


var ontologyGSMA_OffStreetParking_Destino = "GSMA_OffStreetParking_Destino";  
var ontologyGSMA_PointOfInterest_Beach = "GSMA_PointOfInterest_Beach";  
var ontologyGSMA_PointOfInterest_Museum = "GSMA_PointOfInterest_Museum";  

var instanciakp = "ThinkpMapas:ThinkpMapasIns";
var token = "??????????????????";
var sessionKey = null;

//--------------------------------------------------------


//QUERYS 

var queryGSMA_PointOfInterest_Beach = "db.GSMA_PointOfInterest_Beach.find().sort({'contextData.timestamp':-1 });";
var queryGSMA_PointOfInterest_Museum  = "db.GSMA_PointOfInterest_Museum.find().sort({'contextData.timestamp':-1 });";


var queryparking=[];
 queryparking[0]= "db.GSMA_OffStreetParking_Destino.find({'id':  'CONCHINAS'}).sort({'contextData.timestamp':-1 });";
 queryparking[1]= "db.GSMA_OffStreetParking_Destino.find({'id':  'P2014-SC-SP-14-PS-P-001-22'}).sort({'contextData.timestamp':-1 });";
 queryparking[2]= "db.GSMA_OffStreetParking_Destino.find({'id':  'P2014-SC-SP-14-PS-P-001-18'}).sort({'contextData.timestamp':-1 });";
 queryparking[3]= "db.GSMA_OffStreetParking_Destino.find({'id':  'P2014-SC-SP-14-PS-P-001-20'}).sort({'contextData.timestamp':-1 });";
 queryparking[4]= "db.GSMA_OffStreetParking_Destino.find({'id':  'P2014-SC-SP-14-PS-P-001-17'}).sort({'contextData.timestamp':-1 });";
 queryparking[5]= "db.GSMA_OffStreetParking_Destino.find({'id':  'P2014-SC-SP-14-PS-P-001-23'}).sort({'contextData.timestamp':-1 });";

//Lista variables entrada Datos


var datosGSMA_OffStreetParking_Destino=[];
var datosGSMA_PointOfInterest_Beach;
var datosGSMA_PointOfInterest_Museum ;

var datosparking=[];
 datosparking[0]=[];
 datosparking[1]=[];
 datosparking[2]=[];
 datosparking[3]=[];
 datosparking[4]=[];
 datosparking[5]=[];



  function conectarSIBConToken() {

		sofia2.joinToken( token, instanciakp, function( mensajeSSAP ) {
		
		if ( mensajeSSAP != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true ) {
			sessionKey = mensajeSSAP.sessionKey;
			console.log( "session:" + sessionKey );
			getParking0();
		}
		else {
			console.log( "Error conectando del sib" );
		}
	} );
	
	
}
  
  
function desconectarSIB() {
  sofia2.leave( function( mensajeSSAP ) {
		 if ( mensajeSSAP != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true ) {
				console.log( "Desconectado del sib" );
				sessionKey = null;
		 }
		 else {
			  console.log( "Error desconectando del sib" );
		 }
	});
}
  
  
  // Funcion que hace el join con Sofia
  function obtenerDatosSofia() {
	console.log("obtenerDatosSofia");
	conectarSIBConToken();
	
  }
  
   function recargarDatosSofia() {
	console.log("obtenerDatosSofia");
	conectarSIBConTokenRecarga();
	
	
  }
   
//********************************Funciones para obtener los resultados*************************************

 
  
   function getParking0() {
  	   console.log("getParking0");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryparking[0].replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosParking0);
			
			
  		}	 
  	
  } 
  
  function getParking1() {
  	    console.log("getParking1");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryparking[1].replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosParking1);
			
			
  		}	 
  	
  } 
  
  function getParking2() {
  	    console.log("getParking2");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryparking[2].replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosParking2);
			
			
  		}	 
  } 
  function getParking3() {
  	    console.log("getParking3");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryparking[3].replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosParking3);
			
			
  		}	 
  	
  } 
  function getParking4() {
  	    console.log("getParking4");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryparking[4].replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosParking4);
			
			
  		}	 
  } 
 
  function getParking5() {
  	    console.log("getParking5");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryparking[5].replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosParking5);
			
			
  		}	 
  } 
 
  function getGSMA_OffStreetParking_Destino() {
  	   console.log("getGSMA_OffStreetParking_Destino");
  		if ( sessionKey != null ) {		
			
  			 sofia2.queryWithQueryType( queryGSMA_OffStreetParking_Destino.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_OffStreetParking_Destino, "NATIVE", null, leerResultadosGSMA_OffStreetParking_Destino);
			
			
  		}	 
  	
  } 
  
  

function getGSMA_PointOfInterest_Beach() {
       console.log("getGSMA_PointOfInterest_Beach");
      if ( sessionKey != null ) {   
      
         sofia2.queryWithQueryType( queryGSMA_PointOfInterest_Beach.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_PointOfInterest_Beach, "NATIVE", null, leerResultadosGSMA_PointOfInterest_Beach);
      
      
      }  
    
  } 
  function getGSMA_PointOfInterest_Museum() {
       console.log("getGSMA_PointOfInterest_Museum");
      if ( sessionKey != null ) {   
      
         sofia2.queryWithQueryType( queryGSMA_PointOfInterest_Museum.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ''), ontologyGSMA_PointOfInterest_Museum, "NATIVE", null, leerResultadosGSMA_PointOfInterest_Museum);
      
      
      }  
    
  } 

  
  
//****************Funciones para leer los resultados*************************************
   
  
 
   function leerResultadosParking0(mensajeSSAP) {
	   console.log("leerResultadosParking0");
   	if ( mensajeSSAP != null ) {
   		if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {			
   		
		 datosparking[0] =  mensajeSSAP.body.data;
 		} else {
   		  console.log(mensajeSSAP.body.error);
   		}
          getParking1();
		
   	}
   }
 
  function leerResultadosParking1(mensajeSSAP) {
	   console.log("leerResultadosParking1");
   	if ( mensajeSSAP != null ) {
   		if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {			
   		
		 datosparking[1] =  mensajeSSAP.body.data;
 		} else {
   		  console.log(mensajeSSAP.body.error);
   		}
          getParking2();
		
   	}
   }
 function leerResultadosParking2(mensajeSSAP) {
	   console.log("leerResultadosParking2");
   	if ( mensajeSSAP != null ) {
   		if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {			
   		
		 datosparking[2] =  mensajeSSAP.body.data;
 		} else {
   		  console.log(mensajeSSAP.body.error);
   		}
          getParking3();
		
   	}
   }
 
 function leerResultadosParking3(mensajeSSAP) {
	   console.log("leerResultadosParking3");
   	if ( mensajeSSAP != null ) {
   		if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {			
   		
		 datosparking[3] =  mensajeSSAP.body.data;
 		} else {
   		  console.log(mensajeSSAP.body.error);
   		}
          getParking4();
		
   	}
   }
 
 function leerResultadosParking4(mensajeSSAP) {
	   console.log("leerResultadosParking4");
   	if ( mensajeSSAP != null ) {
   		if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {			
   		
		 datosparking[4] =  mensajeSSAP.body.data;
 		} else {
   		  console.log(mensajeSSAP.body.error);
   		}
          getParking5();
		
   	}
   }
 
 function leerResultadosParking5(mensajeSSAP) {
	   console.log("leerResultadosParking5");
   	if ( mensajeSSAP != null ) {
   		if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {			
   		
		 datosparking[5] =  mensajeSSAP.body.data;
 		} else {
   		  console.log(mensajeSSAP.body.error);
   		}
          getGSMA_PointOfInterest_Beach();
		
   	}
   }
 
 

  function leerResultadosGSMA_PointOfInterest_Beach(mensajeSSAP) {
     console.log("leerResultadosGSMA_PointOfInterest_Beach");
    if ( mensajeSSAP != null ) {
      if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {      
      
      datosGSMA_PointOfInterest_Beach =  mensajeSSAP.body.data;
    } else {
        console.log(mensajeSSAP.body.error);
      }
          getGSMA_PointOfInterest_Museum();
    
    }
   }
     
   function leerResultadosGSMA_PointOfInterest_Museum(mensajeSSAP) {
     console.log("leerResultadosGSMA_PointOfInterest_Museum");
    if ( mensajeSSAP != null ) {
      if (  mensajeSSAP.body != null && mensajeSSAP.body.data != null && mensajeSSAP.body.ok == true && mensajeSSAP.body.data.length>0 ) {      
      
      datosGSMA_PointOfInterest_Museum =  mensajeSSAP.body.data;
    } else {
        console.log(mensajeSSAP.body.error);
      }
          rellenarResultados();
    
    }
   }
 
 

function rellenarResultados(){
	console.log("-------rellenarResultados---------");
	console.log( datosGSMA_OffStreetParking_Destino);
	console.log( datosGSMA_PointOfInterest_Beach);
	console.log( datosGSMA_PointOfInterest_Museum);	
	console.log(datosparking);
	console.log("-------Fin rellenarResultados---------");
	
	//Cargamos los parkings
	
	datosGSMA_OffStreetParking_Destino.push(datosparking[0][0]);
	datosGSMA_OffStreetParking_Destino.push(datosparking[1][0]);
	datosGSMA_OffStreetParking_Destino.push(datosparking[2][0]);
	datosGSMA_OffStreetParking_Destino.push(datosparking[3][0]);
	datosGSMA_OffStreetParking_Destino.push(datosparking[4][0]);
	datosGSMA_OffStreetParking_Destino.push(datosparking[5][0]);
	
	//Desconectamos
	desconectarSIB();
	dfdliad.resolve();
	
}

//****************Fin Funciones para leer los resultados*************************************

 