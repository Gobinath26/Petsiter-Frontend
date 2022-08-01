import { useNavigate, useParams } from 'react-router-dom';
import React,{useState} from 'react';
import './style.css';
 
function Payment({bill}) {
  var params = useParams();
  var navigate = useNavigate();
  const [amount, setamount] = useState('');
console.log(amount);
console.log(bill);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else if(amount === String(bill)){
      var options = {
        key: "rzp_test_NtkRCHDnclEkkH",
        key_secret:"v3DVdSOtNaaiQGLLkOK1Bri7",
        amount: amount *100,
        currency:"INR",
        name:"PETSITTER_APP",
        description:"for testing purpose",
        handler: function(response){
           var paymentid = response.razorpay_payment_id;
          if(paymentid){
            navigate(`/confirmorder/${params.id}`)
          }

        },
        prefill: {
          name:"gobinath",
          email:"gobi3336@gmail.com",
          contact:"9345178521"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#000000"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }else{
      alert('enter correct price');
    }
  }
  return (
    <div className="App" id='pymtcntnr'>
      
     <br/>
     <input className='text-center' type="text" placeholder='Enter Amount' value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button className='btn shawdow-none' id='paybtn' onClick={handleSubmit}>{`PAY ${bill}`}</button>
    </div>
  );
}

export default Payment;