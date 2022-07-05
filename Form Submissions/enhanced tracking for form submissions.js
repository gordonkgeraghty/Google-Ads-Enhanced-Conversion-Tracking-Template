<script>
jQuery('.form-submit-send-btn').click(function(){ 
var customerEmail = jQuery('#input-email,#input-email-2').val(); // adjust selector to point to all email fields
var customerPhone = jQuery('#input-phone,#input-phone-2').val(); // adjust selector to point to all phone fields
var customerFname = jQuery('#input-firstName').val(); // adjust selector to point to all first name fields
var customerLname = '';
if(jQuery('#input-lastName').val()!=""){ // adjust selector to point to all last name fields
    customerLname = jQuery('#input-lastName').val() // adjust selector to point to all last name fields
} 
  
   var myVar = setInterval(function(){ var x = 0;  if(x==0){
      if(jQuery('.ff-form-success').is(':visible') && customerEmail!="undefined"){ // adjust (.ff-form-success) selector to use the confirmation message on all forms
     dataLayer.push({
     'event':'enhanced_conversion', // adjust event name to suit your setup
     'enhanced_conversion_data': {
      "email": customerEmail,
      "phone_number": customerPhone, 
      "first_name": customerFname,  // optional
      "last_name": customerLname,  // optional
      "address": {    // optional, if address is used all address fields to be filled
        "street": yourStreetAddressVariable,       
        "city": yourCityVariable,        
        "region": yourRegionVariable,        
        "postal_code": yourPostalCodeVariable,        
        "country": yourCountryVariable
        }
    }
});      
       clearInterval(myVar); x=1;
      }  }  }, 1000); 
})
    
</script>