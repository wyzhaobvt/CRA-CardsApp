import IDCard from "./IDCard";
import Data from '../Data.json';
const IDCards = () => {
    
    return ( 
        <div>
           
            {
                Data.data.map((ele)=>{
                    return (
                        <IDCard key={ele.id} name={ele.name} des={ele.des} age={ele.age}/>
                    )
                })
            }
            
        </div>
       
     );
}
 
export default IDCards;