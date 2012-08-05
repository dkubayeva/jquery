/* FF font-face delay */

/*
var a = 0;
(function() {
    // if firefox 3.5+, hide content till load (or 3 seconds) to prevent FOUT
    var d = document, e = d.documentElement, s = d.createElement('style');
    if (e.style.MozTransform === '') { // gecko 1.9.1 inference
        s.textContent = 'body{visibility:hidden}';
        e.firstChild.appendChild(s);
        function f() {
            s.parentNode && s.parentNode.removeChild(s);
        }

        function f2() {
            setTimeout(f, 1000);
        }

        addEventListener('load', f2, false);
    }
})();
*/

/* Input Placeholder */

function supports_input_placeholder() {
    var i = document.createElement('input');
    return 'placeholder' in i;
}

function bindPlaceholderFunctionality(selector){
    $(selector).blur(function(){

                    if ($(this).val()=='') {
                            $(this).val($(this).attr('placeholder'));
                            $(this).addClass('m-placeholder');
                    }

            }).focus(function(){

                    $(this).removeClass('m-placeholder');
                    if ($(this).val()==$(this).attr('placeholder'))
                            $(this).val('');

            }).each(function(){

                    if ( ($(this).val()=='') || ($(this).val()==$(this).attr('placeholder')) ) {
                            $(this).val( $(this).attr('placeholder') );
                            $(this).addClass('m-placeholder');
                    }

                    var form = $(this).closest('FORM');
                    if (form.length)
                            form.submit(function(){
                                    if ($(this).val()==$(this).attr('placeholder'))
                                            $(this).val('');
                            });

            });
}

$(document).ready(function(){
       if (!supports_input_placeholder()) {
            bindPlaceholderFunctionality('INPUT[placeholder], TEXTAREA[placeholder]');
        }
})