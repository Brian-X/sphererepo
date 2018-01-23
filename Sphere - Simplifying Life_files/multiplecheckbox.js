
var mq = window.matchMedia('(max-width: 960px)');

function mobileScreen(evt) {
    if (evt.matches) {

        console.log("less than 960px");
        alert("It's an alert!");
        
        
        // the width of browser is more then 960px
    } else {
        // return null;
        console.log("greater than 960px");
    }
}

mq.addListener(mobileScreen);
mobileScreen(mq);


// var mq = window.matchMedia('@media (max-width: 960px)');

// function mobileShiftCheck() {

//         if(mq.matches) {

//             console.log("screen change");
//             // the width of browser is more then 960px
//             mq.addListener(function(changed) {
//                 if(changed.matches) {
//                     // the width of browser is more then 960px


//                     function setInfoText(text) {
//                         $('.day-link').text(text);
//                         if (console && console.log) console.log(text);
//                     }

                    



                    
//                     $(':checkbox').on("click", function() {

//                         alert("select range of time");
                        
//                     });
//                     console.log("checkbox clicked!");
//                 // } else {
//                     // the width of browser is less then 960px
//                 // }                 
//             } 
//         });
//     }
// };




// (function($) {
//     var ms = '.mobileShiftCheck';

//     if (document.documentElement.clientWidth < 960) {
//         // scripts



//         $.fn.mobileShiftCheck() {
//             // event.preventDefault();
//             $(':checkbox').on("click", function() {

//                 alert("select range of time");
//                 console.log("checkbox clicked!");
//             });
            
            
//         }


//     }

// })

    // function mobileShiftCheck(text) {
    // $('.day-link').text(text);
    // if (console && console.log) console.log(text);
    // }

    // $(function() {
    //     $('.day div.checkbox').mobileShiftCheck({

    //         // Options accept selectors, jQuery objects, or DOM
    //         // elements.

    //         checkboxSelector : ':checkbox',
    //         selectAll               : $('.day .all'),
    //         ignoreClick         : 'a',

    //         // The onChange function will be called whenever the
    //         // plugin changes the state of a checkbox.

    //         onChange : function(checked) {
    //                 setInfoText(
    //                         'Changed checkbox ' + $(this).attr('id')+ ' to ' + checked + ' with mobile check');
    //         }

    // });



// $(document).ready(function() {
//     var $chkboxes = $('.chkbox');
//     var lastChecked = null;

//     $chkboxes.click(function(e) {
//         if(!lastChecked) {
//             lastChecked = this;
//             return;
//         }

//         if(e.shiftKey) {
//             var start = $chkboxes.index(this);
//             var end = $chkboxes.index(lastChecked);

//             $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);

//         }

//         lastChecked = this;
//     });
// });