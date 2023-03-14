import TransactionForm from './TransactionForm'
import { connect } from 'react-redux';
import { changeUpdate_Index } from '../actions/transactionActions';
import { changeDelete } from '../actions/transactionActions';

const List =(props)=>{
  console.log('trList', props) // data arriving

    
    if (props.list == null) {
      return <div> <TransactionForm /></div>
     } else{
    return( 
       <div>
        <TransactionForm/>
        <table style={{border:'1px solid white', margin:'0 auto'}}>
        <thead>
          <tr>
          <th>Account</th>
            <th>FSC</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((transaction, index) => {
            console.log('map',transaction)
            return(
            <tr key={transaction.id}>
              <td>{transaction.accountNumber}</td>
              <td>{transaction.FSC}</td>
             <td>{transaction.name}</td>
               <td>{transaction.amount}</td>
             <td>
               <button onClick={() => props.handleEdit(index)}>Edit</button>
                 <button onClick={() => props.handleDelete(index)}>Delete</button>
            </td>
            </tr>
            )}
            )}
          </tbody> 
           </table>
        </div>
    )
              }
            }

    

    const mapStateToProps =(state)=>{
      console.log('statelistform',state)
      return{
        list : state.list,
        index: state.currentIndex
      }
    }

  
  const mapDisptachToProps = dispatch=>{
    return{
      handleEdit:(index) => dispatch(changeUpdate_Index(index)),
      handleDelete:(index) => dispatch(changeDelete(index))
    }
  }
  

export default connect(mapStateToProps,mapDisptachToProps)(List)