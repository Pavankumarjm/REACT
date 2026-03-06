import { useContext } from 'react';
import './App.css';
import { BillingContext } from './App';

function AllProducts(){
  const {productList,handleGeneretBills} = useContext(BillingContext)
    return(
        <>
            <div className="allProducts">
        <table>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Total</th>
          </tr>
          {
            productList.map((element,index)=>(
              <tr>
            <td>{index+1}</td>
            <td>{element.productName}</td>
            <td>{element.qty}</td>
            <td>{element.total}</td>
          </tr>
            ))
          }
        </table>
        <button onClick={handleGeneretBills}>Generate Bill</button>
      </div>
        </>
    )
}

export default AllProducts;