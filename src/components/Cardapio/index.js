import React  from 'react';


function Cardapio({className, title, array}){
   


    
    return(
        <div className={className}>
                 <h1>{title}</h1>
          {
              array && array.map((item) => (
                  <div className="container-cardapio">
                  <h1 className="divName">{item.name}</h1>,
                  <h1 className="divPrice">R${item.price},00</h1>
                 </div>
                  
              ))
          }
          </div>   
    );
};
 export default Cardapio;