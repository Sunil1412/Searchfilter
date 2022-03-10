import React, { useState } from 'react'

const App=()=>{

  const list =[

    'Apple',
    'Mango',
    'Pineapple',
    'Orange',
    'Grapes',
    'Papaya',
    'Pineapple'


  ]


  const [filterlist,setFilter]=useState(list)

  const handleSearch=(event)=>{
    if(event.target.value ===""){
      setFilter(list)
      return;
    }

    const value=list.filter((item) => 
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )
    setFilter(value)

  }





return(
  
  <label for="Search">Search:
    <input type="text"
    placeholder='Enter fruit name'
    onChange= {handleSearch}

   
    />
      {
      filterlist && filterlist.map((item) =>(<div>{item}</div>
       
      ))
      
      }
   </label>
  



   );
  }
  

export default App;