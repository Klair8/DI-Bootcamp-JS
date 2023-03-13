import TransactionForm from './TransactionForm'
import { connect } from 'react-redux';
import { changeUpdate } from '../actions/transactionActions';
import { changeDelete } from '../actions/transactionActions';

const List =(props)=>{
  console.log('trList', props) // dat arrivign

    // handleEdit=(index)=> {
    //     // this.setState({list: e.target.value})
    //   }   

    //  handleDelete=(index)=> {
    //     this.setState({list: e.target.value})
    //   }

    
    if (props.list == null) {
      return <div>  <TransactionForm/></div>
     } else{
    return( 
       <div>
        <TransactionForm/>
        <table>
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
               <button onClick={() => props.changeUpdate(index)}>Edit</button>
                 <button onClick={() => props.changeDelete(index)}>Delete</button>
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
       changeUpdate: () => dispatch(changeUpdate()),
       changeDelete:() =>dispatch(changeDelete())
    }
  }
  

export default connect(mapStateToProps,mapDisptachToProps)(List)