import React from "react"

export default function Cards(){
  return (
    <div>

    <div className="card m-3"  style={{"width": "18rem","maxHeight":"360px"}} >
   <img src="https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80." class="card-img-top" alt="..." />
   <div className="card-body">
   <h5 className="card-title">Card title</h5>
   <p className="card-text">Some quick example text to build on the card title .</p>
    <div className="containor">
          <select className="m-2 h-100 bg-warning rounded">
            {
              Array.from(Array(6),(e,i)=>{
                return (
                  <option key={i+1} value={i+1}> {i+1} </option>
                )
              })
            }
          </select>

          <select className="m-2 h-100 bg-warning rounded">
            <option value="half">half</option>
            <option value="full">full</option>

          </select>

    </div>
  
   </div>
   </div>

      
    </div>
  )
}