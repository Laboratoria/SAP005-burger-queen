import React,{useState, useEffect}  from 'react';
//import {MenuTab} from '../HallStorage/MenuTab';
import {FormsButton} from '../FormsStorage/FormsButtons';
import {RecipeReviewCard} from '../HallStorage/MenuTab'



export const HallTst= () =>{
    const token= localStorage.getItem('token');
    const [menu, setMenu] = useState('');
    const [menuMap, setMenuMap] = useState();
    
    const data=()=>{
        
    fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `${token}`,
        },
    })
    .then((response)=> response.json())
    .then((json)=>{
        console.log(json)
        setMenu(json)
    })
}
/*   const TraditionalFamilyBreakfastMenu = ()=>{
        const TraditionalFamilyMenuItems = menu.filter(items => items.type===('breakfast'));
        setMenuMap(TraditionalFamilyMenuItems)
    }

    const StarvingAfterPartyMenu = () =>{
        const StarvingAfterPartyItems = menu.filter(items =>items.type===('all-day'));
        setMenuMap(StarvingAfterPartyItems)
    }

    const HangoverCureMenu = () =>{
        const HangoverCureMenuItems = menu.filter(items =>items.type===('drinks'));
        setMenuMap(HangoverCureMenuItems)
    }
*/

    return(
        <>
        <RecipeReviewCard />
        <FormsButton onClick={()=>{data()}}>Cadastrar</FormsButton>
        </>
    )
}
