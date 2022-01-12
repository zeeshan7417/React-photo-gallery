import React from 'react'
import {Seacrh} from './Seacrh'

export const ImageGallery = ({images}) => {

    //const tags = images.tags;

   // console.log(tags)

    //const [state, setstate] = useState()
 const onchangedata = (data)=>{

    

 }


 

    return (
        <div>
            
<div class="container">
  <h2>Image Gallery</h2>

  <div class="row">

      {
          
          

          images && images.map((item)=>{
               

             return (
                <div class="col-md-4">
                <div class="thumbnail">
                   
                  <a href="/w3images/lights.jpg" target="_blank">
                    <img src={item.userImageURL} alt="Lights" style={{width:"100%"}}/>
                    <div class="caption">
                      <p> {item.user}</p>
                    </div>
                  </a>

                  <div className='px-6 py-4'>
{
     item.tags.split(',').map((tag)=>{

        return (

<span class="badge badge-primary">{tag}</span>


 
        )
     })
}

</div>        

                </div>
              </div>
             )
          })
      }
   
   
    
  </div>
</div>
        </div>
    )
}
