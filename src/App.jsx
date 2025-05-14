import {  useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  function addProducts(){
      var Product ={
        name:productName,
        price:productPrice,
        quantity:productQuantity

      }
      setProducts([...products , Product])
      clearInputs()
  }

  function clearInputs()
  {
    setProductName("");
    setProductPrice("");
    setProductQuantity("")
    console.log("shkisxvk");
    

  }

  return (
    <>
    <h1 className='bg-danger text-white text-center rounded py-4'>Curd Management System</h1>
    <div className='container my-4'>
     
     <div>
       <input type="text" value={productName} placeholder=' Name here'  className='form-control ' 
       onChange={(e)=>{
         setProductName(e.target.value)
       }} />
      <input type="number" value={productPrice} placeholder='Price here'  className='form-control my-3'
      onChange={(e)=>
      {
        setProductPrice(e.target.value)
      }
      }
      
      />
      <input type="number" value={productQuantity} placeholder='Quantity here' className='form-control my-3'
      
      onChange={(e)=>{
          setProductQuantity(e.target.value)
      }}
      />
      <button onClick={addProducts} className='btn btn-success'> Create Product</button>
     
     </div>
     <div  className='my-5'>
    
    
     </div>

    </div>
    
    </>
  )
}

export default App
