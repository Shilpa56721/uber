import React from 'react'

const LocationSearchPanel = (props) => {
      console.log(props);
  const locations=[
    "24B,Near Kapoor's cafe",
    "20B,Near Sharma's cafe",
    "22B,Near singh's cafe"
  ]
  return (
    <div>
      {
        locations.map(function(elem,idx){
      return (
        <div key={idx}
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          className='flex gap-4 border-2 p-3 border-gray-50 rounded-xl active:border-black items-center justify-start'
        >
          <h2 className='bg-[#eee] h-8 flex items-center justify-center   w-16 flexrounded-full'><i className='ri-map-pin-fill'></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      );
        })
      }
      
      

    </div>
    


 
  )
}

export default LocationSearchPanel