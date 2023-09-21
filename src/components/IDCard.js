
const IDCard = (props) => {
    return ( 
    <div className="card float-start w-25 m-1 p-0 overflow-hidden border-primary">
        <div className="card-body p-0">
        <h4 className="card-title bg-info mb-0 text-white ps-2">{props.name}</h4>
        <p className="card-text bg-primary text-white pt-2 pb-2 mb-0 ps-2 ">{props.des}</p>
        <p className="card-text bg-primary text-white pb-2 mb-0 ps-2">{props.age}</p>
         </div>
    </div>
     );
}
 
export default IDCard;

