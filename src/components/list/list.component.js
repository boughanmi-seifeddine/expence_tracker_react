import React, {Component} from 'react';
class ListComponent extends Component{
    constructor(props) {
        super(props);
    }
    renderTransaction(){
        const transactions = this.props.transactions
        return transactions.map(transaction=>{
            return <div key={transaction.id}>
                <li className={transaction.amount >= 0 ? 'plus' : 'minus'}>
                    {transaction.text} <span>{transaction.amount}</span>
                    <button className="delete-btn">x</button>
                </li>
            </div>
        })
    }
    render() {
        return (
            <ul id="list" className="list">
                {this.renderTransaction()}
            </ul>
        )
    }
}
export default ListComponent