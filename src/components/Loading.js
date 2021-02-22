import '../style/paginapedidos.css'
import Carregando from '../images/Ícones/loading-marrom.gif'

function Loading() {

  return (
    <>
      <img className="img-loading" alt="Carregando" src={Carregando}/>
    </>
  );
}
  
export default Loading;