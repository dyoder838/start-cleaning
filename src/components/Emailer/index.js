import React from 'react';

export default function Emailer() {
    
    Email.send({
        SecureToken : "e227b90d-73a0-4e14-9327-6d7de83b44a9",
        To : 'yoderdanny@hotmail.com',
        From : "dyoder838@gmail.com",
        Subject : "testing Emailer component",
        Body : "Checkout this body"
    }).then(
      message => alert(message)
    );
        
}