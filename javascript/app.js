// grabbing elements
const bill_el = document.querySelector('#bill');
const custom_tip_el = document.querySelector('#custom-tip');

let people = 0;
let tip = 0, tip_amount = 0;
let total = 0;

const error = document.createElement('span');
error.textContent = "Can't be 0";
document.querySelector('.people').appendChild(error);
error.style.color = "rgb(224, 85, 34)";    
error.style.position = "absolute";      
error.style.right = "0px";
error.style.top = "10px";
error.style.fontSize = "12px";
error.style.display = "none";

$('.tip').click(function (e) { 
    e.preventDefault();

    if ( this.nodeName !== 'INPUT' ) {
        $(this).css('background', 'hsl(173, 63%, 69%)');
        $('.tip').not($(this)).not($("#custom-tip")).css('background', 'hsl(183, 100%, 15%)');
    }
});

function checkTip() {
    var divs = [].slice.call(document.querySelectorAll('.tip'));
    
    divs.forEach(div => {
        if ( div.style.backgroundColor == "rgb(126, 226, 214)" ) {
            tip = parseInt(div.firstChild.nextSibling.textContent);
        } else if ( custom_tip_el.value ) {
            tip = custom_tip_el.value;
        }
    });
}

$("#people").keydown(function (event) {
    if ( event.keyCode == 13 ) {

        if ( this.value == 0 ) {
            error.style.display = "block";
        } else {
            if ( document.querySelector('.people').children.length == 3 ) {
                document.querySelector('.people').removeChild(error);
            }

            people = this.value;
        }

        const bill = bill_el.value;  // getting bill
        checkTip(); // getting tip
        
        // results
        tip_amount = ( ( tip / 100 ) * bill ) / people;
        total = bill + tip_amount;
        
        document.querySelector('.tip-result .note').innerHTML = `$${parseFloat(tip_amount).toFixed(2)}`;
        document.querySelector('.total .note').innerHTML = `$${parseFloat(total).toFixed(2)}`;
    }
});