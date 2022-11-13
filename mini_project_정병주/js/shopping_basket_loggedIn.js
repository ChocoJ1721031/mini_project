function select_all_1() {
    if(document.getElementsByClassName('select_all')[0].checked == true) {
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= true;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= true;
        }
    } else if(document.getElementsByClassName('select_all')[0].checked == false) {
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= false;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    }
}
function select_all_2() {
    if(document.getElementsByClassName('select_all')[1].checked == true) {
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= true;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= true;
        }
    } else if(document.getElementsByClassName('select_all')[1].checked == false) {
        for(var i=0; i<document.getElementsByClassName('select_product').length; i++) {
            document.getElementsByClassName('select_product')[i].checked= false;
        }
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    }
}

function select_product() {
    if(document.getElementsByClassName('select_product')[0].checked == true) {
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= true;
        }
    } else if(document.getElementsByClassName('select_product')[0].checked == false) {
        for(var i=0; i<document.getElementsByClassName('select_all').length; i++) {
            document.getElementsByClassName('select_all')[i].checked= false;
        }
    }
}
