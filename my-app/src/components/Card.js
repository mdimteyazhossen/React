const date=new Date();
const dateName=date.getDate();
const monthName=date.getMonth();
const yearName=date.getFullYear();


function Card(props){
    const{todotitle,tododesc}=props;
    return <div className="card">
    <h3 className="cardTitle">how are you?</h3>
    <h1 className="cardDesc">{todotitle}</h1>
    <p className="cardFooter">{tododesc}</p>
    <p className="cardFooter">{dateName+"-"+monthName+"-"+yearName}</p>
</div>
}

export default Card;