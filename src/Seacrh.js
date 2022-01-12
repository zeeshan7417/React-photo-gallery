import React, {useState} from 'react'

export const Seacrh = ({searchtext}) => {

    const [search, setsearch] = useState({serach:''});
  
    const formsubmit = (e)=>{
e.preventDefault();
searchtext(search)
console.log(search)
    }

   
    return (
        <div>
<form  onSubmit={formsubmit}>

        <div className='container' >
             <div className='row'>

                 <div className='form-group'>
                     <label>Image Serach</label>
                     <input type = "text" name='serach' className='form-control'  onChange={(e)=>setsearch(e.target.value)}></input>
                 </div>
                 
                
             
             </div>
             
             </div>  
</form>
         
        </div>
    )
}
