//jump another section
function scrollToTicket(){
    const scroll=document.getElementById('paribahanTicket')
    scroll.scrollIntoView({behavior:"smooth"});
    console.log(scroll);
}

//Select Ticket


let ticketArray=[];
function chooseTicket(button){
    
   
   const getId=button.id;
   const id=document.getElementById(getId);
   const innerTexT=id.innerText;
   id.classList.add('bg-[#1DD100]');
   
   if(ticketArray.length>3){
    id.classList.remove('bg-[#1DD100]');
   }
    
  
    
   
    
   
   
   //ticketArray=ticketArray.push(innerTexT);
   if(ticketArray.includes(innerTexT) ===false ){
    
   ticketArray.push(innerTexT);
   
   
   const selectedTicketNo=ticketArray.length;
   

   const ticketNo=document.getElementById('ticket-no');
   //selected ticket
   if (selectedTicketNo<5){
    ticketNo.innerText=selectedTicketNo;
   }
   

   const availableSeat=document.getElementById('available-seat');
   let availableSeatString= availableSeat.innerText ;
   const availableSeatInt=parseFloat(availableSeatString);
   //available seat-----
   if (selectedTicketNo<5){
    availableSeat.innerText=availableSeatInt-1;
   }
   
   

   }
   //set seat on the ticket
   ;
   const seAt2=document.getElementById('seat2');
   const seatAdd=document.getElementById('seat-add');
  
//    seAt1.classList.add('hidden');
//    
   
   const ticketNoDynamic=document.getElementById('ticket-no')
   const dynamicTicket= ticketNoDynamic.innerText;
   const dynamicTicketint=parseInt(dynamicTicket)
    
   
   
    
   
   
   
   if(dynamicTicketint===1){
    const seat1Para=document.getElementById('seat1-para');
    seat1Para.innerText=ticketArray[0];
    seat2.classList.add('hidden');
    
    
   }
   if (dynamicTicketint===2) {
    const seat2Para=document.getElementById('seat2-para');
    seat2.classList.remove('hidden');
    seat2Para.innerText=ticketArray[1];
    
    
   }
   if (dynamicTicketint===3) {
    
    const seat3Para=document.getElementById('seat3-para');
    seat3.classList.remove('hidden');
    seat3Para.innerText=ticketArray[2];
    
    
   }
   if (dynamicTicketint===4) {
    
    const seat4Para=document.getElementById('seat4-para');
    seat4.classList.remove('hidden');
    seat4Para.innerText=ticketArray[3];
    
    
   }
   //total price
   const totalPrice=document.getElementById('total-price');
   totalPrice.innerText=550*dynamicTicketint;
   //coupon apply------
   const buttonCuopon=document.getElementById('button-cuopon');
   const textInput=document.getElementById('text-input');
   const grandTotal=document.getElementById('grand-total');
   grandTotal.innerText=totalPrice.innerText;
   const discounT=document.getElementById('discount');
   const discountedAmount=document.getElementById('discounted-amount');
   console.log(discounT);

   if(ticketArray.length===4 ){

    
    
    buttonCuopon.classList.remove('cursor-not-allowed');
    //console.log(buttonCuopon)

    
    buttonCuopon.addEventListener('click', function(){
        
        
        if (textInput.value==='NEW15'){
            grandTotal.innerText=totalPrice.innerText-totalPrice.innerText*.15;
            buttonCuopon.classList.add('hidden');
            textInput.classList.add('hidden');
            discounT.classList.remove('hidden')
            discountedAmount.innerText=totalPrice.innerText*.15;

        }
        else if(textInput.value==='Couple 20'){
            console.log(textInput.value);
            grandTotal.innerText=totalPrice.innerText-totalPrice.innerText*.20;
            buttonCuopon.classList.add('hidden');
            textInput.classList.add('hidden');
            discounT.classList.remove('hidden')
            discountedAmount.innerText=totalPrice.innerText*.20;
        }
        else(grandTotal.innerText=totalPrice.innerText);

       
    })
    
    
    
    }

    

     else(grandTotal.innerText=totalPrice.innerText);

     const buttonConfirm=document.getElementById('button-confirm');
     buttonConfirm.addEventListener('click', function(){
       
     const phoneNumber=document.getElementById('phone-number')
     const phoneNumberInt= parseFloat(phoneNumber.value) ;
     const errorMessage=document.getElementById('error-message');
     
     if(phoneNumberInt !==NaN && phoneNumberInt>0){
        console.log(phoneNumberInt);
     }
     else {
        (console.log('Type Valid phone number'))
     phoneNumber.classList.add('border-red-400', 'border-2');
     errorMessage.classList.remove('hidden');
     } 
     const hiddenBody=document.getElementById('hidden-body');
     const popupDisplay=document.getElementById('popup-dsplay')
     hiddenBody.classList.add('hidden');
     popupDisplay.classList.remove('hidden');
     console.log(popupDisplay)
     })

     
    
    }
    
    
    
  
   

   
   
    