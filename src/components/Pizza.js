import React from "react"

const Pizza = (pizza) => {
  
  // console.log(pizza)

  return(
    <tr>
      <td>{pizza.details.topping}</td>
      <td>{pizza.details.size}</td>
      <td>{pizza.details.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={()=>pizza.onEdit(pizza.details.id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}


export default Pizza
