var style=document.createElement('style');
style.innerHTML=`
#container{
    background-color:gray;
    height:650px;
    width:550px;
    margin-top:6%;
    margin-left:35%;
    text-align:center;
border:5px solid black;
border-radius:30px;

}
#para{
    font-size:30px;
}
#heading{
    font-size:75px;
     text-decoration:underline;
}
.registerbtn{
    height:50px;
    width:120px;
    border-radius:20px;
    margin-top:5%;
    font-size:18px;
}
`;
document.head.appendChild(style);


let fname = document.getElementById('name');
fname.setAttribute('onfocusout' , 'fullName()');
let nregex= /^[a-z ,.'-]+$/i;
let namespan = document.getElementById('full');
function fullName() {
    if(nregex.test(fname.value))
    {
        namespan.innerHTML ="Valid";
        document.querySelector("#full").style.backgroundColor="lightgreen";
    }
    else
    {
        namespan.innerHTML="Invalid";
        document.querySelector("#full").style.backgroundColor="orange";
    }   
};


let email = document.getElementById('mail');
email.setAttribute('onfocusout' , 'echeck()');
let mspan = document.getElementById('mailbox');
let mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function echeck() {
  if(mailreg.test(email.value))
    {
      mspan.innerHTML ='Valid';
      document.querySelector("#mailbox").style.backgroundColor="lightgreen";
    }else {
  mspan.innerHTML ="Invalid";
  document.querySelector("#mailbox").style.backgroundColor="orange";
    }
}

let pswd = document.getElementById('psw');
pswd.setAttribute('type' , 'password');
pswd.setAttribute('onfocusout' ,'pcheck()');
let passreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let pspan =document.getElementById('pass');


function pcheck() {
    if (passreg.test(pswd.value)) {

       pspan.innerHTML = 'Valid';
       document.querySelector("#pass").style.backgroundColor="lightgreen";
   }
   else
   {
       pspan.innerHTML ='Invalid';
       document.querySelector("#pass").style.backgroundColor="orange";
   }
}

let repeated = document.getElementById('psw-repeat');
repeated.setAttribute('type' , 'password');
repeated.setAttribute('onfocusout' , 'ncheck()');

let respan = document.getElementById('repsw');


function ncheck() {
    if(pswd.value == repeated.value&& (passreg.test(repeated.value)) )
    {
        respan.innerHTML ="Valid";
        document.querySelector("#repsw").style.backgroundColor="lightgreen";
    }
    else
    {
        respan.innerHTML='Invalid';
        document.querySelector("#repsw").style.backgroundColor="orange";
    }
}


let number = document.getElementById('mobile');
number.setAttribute('onfocusout' , 'checknumber()');
let mobileregex = /^\d{10}$/;
let mobspan = document.getElementById('phone');
function checknumber() {
    if (mobileregex.test(number.value)) {
    
       mobspan.innerHTML = 'Valid';
       document.querySelector("#phone").style.backgroundColor="lightgreen";
   }
   else
   {
       mobspan.innerHTML ='Invalid';
       document.querySelector("#phone").style.backgroundColor="orange";
   }
}

// var style=document.createElement('style');
// style.innerHTML=`

// .container{
 
//     background-color:gray;
//     height:650px;
//     width:550px;
//     margin-top:6%;
//     margin-left:35%;
//     text-align:center;
// border:5px solid black;
// border-radius:30px;

// }
// .heading{
// font-size:43px;
//      text-decoration:underline;

// }
// div{
//     display:flex;
//     flex-direction:column;
// }
// input
// {
//     border:none;
//     border-bottom: 1px solid rgb(231, 106, 106);
//     // background: transparent;
//     outline:none;
//     height:25px;
//     // width:20px;
//     color:rgb(119, 76, 76);
//     font-size:20px;
// }
// #submit
// {
//     border:none;
//     outline: none;
//     height: 38px;
//     width:20vw ;
//     background: purple;
//     color:rgb(32, 11, 11);
//     font-size: 18px;
//     border-radius: 20px;
//     text-align:center;
// }
// .label{
//     font-size:25px;
// }


// `;
// document.head.appendChild(style);


// let fname = document.getElementById('ame');
// fname.setAttribute('onfocusout' , 'nameval()');
// let nameregex = /^[a-z ,.'-]+$/i;
// let namespan = document.getElementById('name');

// console.log(namespan);

// function nameval() {
//     if(nameregex.test(fname.value))
//     {
//         console.log(nameregex.test(fname.value));
//         namespan.innerHTML =" Approved";
//     }
//     else
//     {
//         namespan.innerHTML=" Invalid";
//     }
    
// };
// //last name regex
// let lname = document.getElementById('lName');
// lname.setAttribute('onfocusout' , 'lastval()');
// let lnameregex = /^[a-z ,.'-]+$/i;
// let  spanlast = document.getElementById('lastspan');
// console.log(spanlast);

// function lastval() {
//     if(lnameregex.test(lname.value))
//     {
//         spanlast.innerHTML = 'Approved';
//     }
//     else
//      {
//          spanlast.innerHTML = 'Invalid';
//      }
// }
// //mail regxx

// let fmail = document.getElementById('mail');
// fmail.setAttribute('onfocusout' , 'mailval()');
// let mailspan = document.getElementById('mails');
// console.log(mailspan);
// let mailreg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
// console.log(mailreg.test());
// function mailval() {
        
//     if (mailreg.test(fmail.value))
//     {
//         console.log(fmail.value);
//         console.log(mailreg.test(fmail.value));
//             mailspan.innerHTML ='Email is Approved';
      
//     }
//     else
//     {
        
//         mailspan.innerHTML ="Email is not approved";
//     }
//     //   alert("You have entered an invalid email address!")
//     //   return (false)
// }

// // password regex

// let fpassword = document.getElementById('formpass');
// fpassword.setAttribute('type' , 'password');
// fpassword.setAttribute('onfocusout' ,'fpass()');
// let passregex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
// let spanpass =document.getElementById('pass1');


// function fpass() {
//     if (passregex.test(fpassword.value)) {

//        spanpass.innerHTML = 'Approved';
//    }
//    else
//    {
//        spanpass.innerHTML ='Not Valid';
//    }
// }

// //  confirm password
// let lpassword = document.getElementById('formpass1');
// lpassword.setAttribute('type' , 'password');
// lpassword.setAttribute('onfocusout' , 'lpass()');

// let confirmspan = document.getElementById('conpas');


// function lpass() {
//     if(fpassword.value == lpassword.value)
//     {
//         confirmspan.innerHTML ="Aprroved";
//     }
//     else
//     {
//         confirmspan.innerHTML='Invalid';
//     }
// }



// // phone number regex
 
// let passwordin = document.getElementById('phone');
// passwordin.setAttribute('onfocusout' , 'phoneval()');
// let phoneregex = /^\d{10}$/;
// let spanphone = document.getElementById('phones');
// console.log(passwordin);
// console.log(phoneregex.test(passwordin.value));

// function phoneval() {
//     if (phoneregex.test(passwordin.value)) {
    
//        spanphone.innerHTML = 'Password is correct';
//    }
//    else
//    {
//        spanphone.innerHTML ='Incorrect Password';
//    }
// }
// //button span
// let buttonspan = document.getElementById('submit');
// buttonspan.setAttribute('type' , 'submit');


