

function merge_orders( orderlist )
{
orderlistnew = [];

 

Array.prototype.push.apply(orderlistnew, orderlist);
 
 
// -- 
// Merge duplicates
size = orderlist.length;

orderlistnew2 = [];
var iorderlist = 0;

for (var i=0; i<size; i++)
    {
    var FOUND = 0;
    var size2 = orderlistnew2.length;
    
    for (var i2=0; i2<size2 && FOUND == 0; i2++)
        {
        if (orderlist[i]['price'] == orderlistnew2[i2]['price'])
           {
           FOUND = 1;         
           }
        }
    
   
    if ( !FOUND )
       {                                                         
       orderlistnew2[iorderlist] =  orderlist[i] ;
       
       //
       // Merge and add all other values into this value
       for (j=0; j<size; j++)
           {
           if (j != iorderlist && 
              orderlistnew2[iorderlist]['price'] == orderlist[j]['price']
              )
              {
              orderlistnew2[iorderlist]['amount'] += orderlist[j]['amount'];
              }
           } // for j..
       
       
       iorderlist++;                     
       } // if ( !FOUND )
     
    } // for i...

 
// End - merge
// --

return(orderlistnew2);
} // merge_orders





function bsort_orders( orderlist )
{
console.log("bsort_orders");
 
 
// --
// Sort
size = orderlist.length;



var SORT = 1;

while (SORT)
{
SORT = 0;

for (var i=0; i<size-1; i++)
    {
    if ( orderlist[i]['price'] < orderlist[i+1]['price'])
       {
       // swap
       alt = orderlist[i];
       orderlist[i] = orderlist[i+1];
       orderlist[i+1] = alt;
       SORT = 1;       
       }
    } // for i..
} // while (SORT) 

// end - sort
// ---


return(orderlist);
} // bsort_orders



function sort_orders( orderlist )
{
orderlistnew2 = merge_orders(orderlist);
bsort_orders( orderlistnew2 );  
return(orderlistnew2);
}


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  
  if (hour < 10) hour = '0'+ hour;
  if (min < 10) min = '0'+ min;
  if (sec < 10) sec = '0'+ sec;
  var time = year+ '-' +month+ '-' + date + ' '  + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}





 
function changenodeaction()
{
node = document.getElementById('nodeselect').value;
url = "?node=" + node;
window.location.href = url;
}

 




window.onload = function()
{
  
  document.onclick = function(e)
   {
   var divToHide = document.getElementById('menubox');

   if(e.target.id !== 'menubox' && e.target.id !== 'burger2_img' && e.target.id !== 'burger1_img'  )
     {     
     divToHide.style.visibility = 'hidden';
     divToHide.style.height = '0px';
     }    
   };
   
}; 
 


function setpage( page )
{

if (page == 1)
   {
   document.getElementById('page2').style.height = "0px";
   document.getElementById('page2').style.visibility = "hidden";

   document.getElementById('page3').style.height = "0px";
   document.getElementById('page3').style.visibility = "hidden";

   document.getElementById('page4').style.height = "0px";
   document.getElementById('page4').style.visibility = "hidden";
   
   document.getElementById('page1').style.height = "";
   document.getElementById('page1').style.visibility = "visible";
   }

if (page == 2)
   {
   document.getElementById('page2').style.height = "";
   document.getElementById('page2').style.visibility = "visible";

   document.getElementById('page3').style.height = "0px";
   document.getElementById('page3').style.visibility = "hidden";

   document.getElementById('page4').style.height = "0px";
   document.getElementById('page4').style.visibility = "hidden";
   
   document.getElementById('page1').style.height = "0px";
   document.getElementById('page1').style.visibility = "hidden";
   }


if (page == 3)
   {
   load_tradingdesk2( last_tokenid );
      
   val =  document.getElementById('divpairsselect').value;
   document.getElementById("divpairsselect2").value = val;
   
   document.getElementById('page2').style.height = "0px";
   document.getElementById('page2').style.visibility = "hidden";

   document.getElementById('page3').style.height = "";
   document.getElementById('page3').style.visibility = "visible";

   document.getElementById('page4').style.height = "0px";
   document.getElementById('page4').style.visibility = "hidden";
   
   document.getElementById('page1').style.height = "0px";
   document.getElementById('page1').style.visibility = "hidden";
   }


if (page == 4)
   {
   document.getElementById('page2').style.height = "0px";
   document.getElementById('page2').style.visibility = "hidden";

   document.getElementById('page3').style.height = "0px";
   document.getElementById('page3').style.visibility = "hidden";

   document.getElementById('page4').style.height = "";
   document.getElementById('page4').style.visibility = "visible";
   
   document.getElementById('page1').style.height = "0px";
   document.getElementById('page1').style.visibility = "hidden";
   }


} // function setpage( page )
 
 
function close_disclaimer()
{
document.getElementById('disclaimer_background').style.visibility = "hidden";
document.getElementById('disclaimer').style.visibility            = "hidden";
}
 
 


var buttonstatus = 0;





function switchbutton() 
{
 
if (!buttonstatus)
{
document.getElementById('but_inner').style.marginLeft = "42%";
} else
  {
  document.getElementById('but_inner').style.marginLeft = "6%";
  }
  
buttonstatus = !buttonstatus;  


_setCookie("darkmode",buttonstatus,30);


var element = document.getElementById('bodyclass');
element.classList.toggle("bodyclass_dark");

var element = document.getElementById('headerarea');
element.classList.toggle("headerarea_dark");

var element = document.getElementById('but_inner');
element.classList.toggle("but_inner_dark");

var element = document.getElementById('but_outer');
element.classList.toggle("but_outer_dark");

var element = document.getElementById('logo1');
element.classList.toggle("logo1_dark");

var element = document.getElementById('burger1');
element.classList.toggle("burger1_dark");

var element = document.getElementById('footer');
element.classList.toggle("footer_dark");


var element = document.getElementById('askbidtabletitle2');
element.classList.toggle("askbidtabletitle2_dark");

var element = document.getElementById('askbidtabletitle2b');
element.classList.toggle("askbidtabletitle2_dark");
var element = document.getElementById('orderscrolldiv_details');
element.classList.toggle("orderscrolldiv_details_dark");
var element = document.getElementById('orderscrolldiv_details2');
element.classList.toggle("orderscrolldiv_details_dark");
 
var element = document.getElementById('userorders_header');
element.classList.toggle("userorders_header_dark");
var element = document.getElementById('userorders_main');
element.classList.toggle("userorders_main_dark");
 
var element = document.getElementById('askbidtabletitle');
element.classList.toggle("askbidtabletitle_dark");


var element = document.getElementById('lastorder');
element.classList.toggle("lastorder_dark");

var element = document.getElementById('orderscrolldiv_main1');
element.classList.toggle("orderscrolldiv_main_dark");
var element = document.getElementById('orderscrolldiv_main2');
element.classList.toggle("orderscrolldiv_main_dark");

var element = document.getElementById('tradingform');
element.classList.toggle("tradingform_dark");


var element = document.getElementById('buy_price');
element.classList.toggle("inputfield1_dark");
var element = document.getElementById('buy_amount_token');
element.classList.toggle("inputfield1_dark");
var element = document.getElementById('buy_amount_sov');
element.classList.toggle("inputfield1_dark");

var element = document.getElementById('sell_price');
element.classList.toggle("inputfield1_dark");
var element = document.getElementById('sell_amount_token');
element.classList.toggle("inputfield1_dark");
var element = document.getElementById('sell_amount_sov');
element.classList.toggle("inputfield1_dark");


var element = document.getElementById('divpairsselect');
element.classList.toggle("pairselect_dark");

var element = document.getElementById('divpairsselect2');
element.classList.toggle("pairselect_dark");

var element = document.getElementById('nodeselect');
element.classList.toggle("nodeselect_dark");

var element = document.getElementById('thelink');
element.classList.toggle("thelink_dark");


 
} // function switchbutton() 


var menustatus = 0;
function switchmenu()
{
menustatus = 1;
document.getElementById('menubox').style.height = '' ;
document.getElementById('menubox').style.visibility = 'visible' ;
}




function setaccountname( name )
{
document.getElementById('myaccountname').innerHTML = ""+name+"";
 
document.getElementById('walletmenu_anchor').style.visibility = "hidden";
document.getElementById('walletmenu_anchor').style.height = "0px";

document.getElementById('walletmenu_scatter').style.visibility = "hidden";
document.getElementById('walletmenu_scatter').style.height = "0px"; 
}



function logoutall( name )
{
document.getElementById('myaccountname').innerHTML = "xxx";


document.getElementById('walletmenu_anchor').style.visibility = "visible";
document.getElementById('walletmenu_anchor').style.height = "";

document.getElementById('walletmenu_scatter').style.visibility = "visible";
document.getElementById('walletmenu_scatter').style.height = "";

 
document.getElementById('walletmenu_right_logout').style.visibility = "hidden";
document.getElementById('walletmenu_right_logout').style.height = "0px";
}


 



function transfertest_success( value )
{
alert("value_s:" + value);
}


function transfertest_error( value )
{
alert("value_e:" + value);
}

 




function callback_loadpairs( value )
{
tokenlist = [];


var selectlist  = document.getElementById('divpairsselect');   
var selectlist2 = document.getElementById('divpairsselect2');   

                        
var size = value.rows.length;

for (var i=0; i < size; i++)
    {
    id = value.rows[i].id;
    contract = value.rows[i].contract;
    symbol = value.rows[i].symbol;
    status = value.rows[i].status;

    last = value.rows[i].last;                                
    last = Number(last).toFixed(6);
                                
    precision = symbol.split(",")[0]; 
    tokenname = symbol.split(",")[1];
                                
     
    row = new Array();
    row['id']        = id;
    row['contract']  = contract;
    row['name']      = tokenname;
    row['precision'] = precision;
    row['last']      = last;
    row['status']    = status;
                                                                
    tokenlist[id] = row;
                                

    var opt = document.createElement('option');
    opt.value = id;
    var opt2 = document.createElement('option');
    opt2.value = id;
        
    opt.innerHTML = "&nbsp;" + tokenname + "/SOV&nbsp;";
	opt2.innerHTML = "&nbsp;" + tokenname + "/SOV&nbsp;";
	selectlist.appendChild(opt)
    selectlist2.appendChild(opt2)                           
    } // for ...




// Load EOS market
var defaultmarket = 1;

var lastmarket = _getCookie("lastmarket");

if (lastmarket != "") defaultmarket = lastmarket;

load_tradingdesk(defaultmarket); 


document.getElementById("divpairsselect").value = defaultmarket;
    
} // callback_loadpairs



function setmarket( val )
{
load_tradingdesk(val.value);
update_counter = 0; 

document.getElementById('userorders').innerHTML = "...";

_setCookie("lastmarket",val.value,30);
}


function setmarket2( val )
{
load_tradingdesk2(val.value);
}


function load_pairs()
{
getdata(callback_loadpairs, "sovorderbook", "sovorderbook", "token", "", 0, "", 1100 );
}



function callback_render_traidingdesk_asks( value )
{
                        
var buffer = "";
buffer += "<div>";                                                                 

buffer += "<div class='f25'>Price</div> <div class='f25'>Amount("+last_tokenname+")</div>  <div class='f25'>Total (SOV)</div>  <br>";
buffer += "</div>";                                     
buffer += "<div style='clear:both'></div>";

document.getElementById('askbidtabletitle').innerHTML = buffer;




var size = value.rows.length;
var buffer = "";
                            
                                              

last_orders_ask = [];
 
for (var i=0; i < size; i++)
    {
    id = value.rows[i].id;
    price = value.rows[i].price;
    user = value.rows[i].user;
    placed = value.rows[i].placed;

    samount = value.rows[i].samount;
    samount2 = samount / Math.pow(10, last_tokenprecision)  ; //                                                                    
    samount = Number(samount2).toFixed(last_tokenprecision);

    amount = value.rows[i].amount;
    amount2 = amount / Math.pow(10, last_tokenprecision)  ; //                                                                    
    amount = Number(amount2).toFixed(last_tokenprecision);
                                
    price = Number(price).toFixed(6);
    tokenid = value.rows[i].tokenid;
                          
    if (tokenid == last_tokenid) 
       {                              
       var sovtotal = price * amount;  
       sovtotal = Number(sovtotal).toFixed(4);

       row = new Array();
       row['id'] = id;
       row['tokenid'] = tokenid;
       row['price'] = price;
       row['user'] = user; 
       row['amount'] = amount2; 
       row['samount'] = samount2; 
                                                                      
       row['placed'] = placed;
       ts = new Date( placed).getTime() / 1000 ;
       row['ts'] = ts;                                   
       last_orders_ask.push( row );
       } // if
    } // for
 
 
 
last_orders_ask_sortet = sort_orders(last_orders_ask);

 

// render
size = last_orders_ask_sortet.length;
for (i=0; i<size; i++)
    {
    price    = last_orders_ask_sortet[i]['price'];
    amount   = last_orders_ask_sortet[i]['amount'];
                                                                 
    amount2 = amount;                                                                       
    amount3 = Number(amount2).toFixed(last_tokenprecision);

    var sovtotal = price * amount;  
    sovtotal = Number(sovtotal).toFixed(4);
    
    buffer += "<div class='red'>";                              
    buffer += "<div class='f25' onclick='take_price_buy_and_sell("+price + ")'>"+price + "</div> <div class='f25'>"+amount3 + "</div>  <div class='f25'>"+sovtotal + "</div>  ";
    buffer += "</div>";                                     
    buffer += "<div style='clear:both'></div>";
    }

 
document.getElementById('askscrolldiv').innerHTML = buffer;


// Set scroll pos
var element = document.getElementById("askscrolldiv");
element.scrollTop = element.scrollHeight;
    
    
try
{
document.getElementById('buy_price').value = last_orders_ask_sortet[size-1]['price'];
} 
  catch (err) {
              console.log("ERROR!");
              document.getElementById('buy_price').value = 0;
              }

                  
loaded_asks = 1;                                        
} // callback_render_traidingdesk_asks



function callback_render_traidingdesk_bids( value )
{

var size = value.rows.length;

var buffer = "";
last_orders_bid = [];                            

for (var i=0; i < size; i++)
    {
    id = value.rows[i].id;
    price = value.rows[i].price;
    user = value.rows[i].user;
    placed = value.rows[i].placed;
                                
    price = value.rows[i].price;
    price = Number(price).toFixed(6);
                                
    samount = value.rows[i].samount;
    samount2 = samount / Math.pow(10, last_tokenprecision)  ; //                                                                    
    samount = Number(samount2).toFixed(last_tokenprecision);
                                
    var amount_sov2 = value.rows[i].amount;
    amount_sov2 = amount_sov2 / Math.pow(10, 4);  
    amount_sov = Number(amount_sov2).toFixed(4);
                              
                                
    tokenid = value.rows[i].tokenid;
                             
                                
    if (tokenid == last_tokenid) 
       {
       amount = amount_sov2 / price;
       amount = Number(amount).toFixed(last_tokenprecision);
                          
       row = new Array();
       row['id'] = id;
       row['tokenid'] = tokenid;
       row['price'] = price;
       row['user'] = user;
       row['amount'] = amount_sov2;
       row['samount'] = samount2;
                                   
       row['placed'] = placed;
       ts = new Date( placed).getTime() / 1000 ;
       row['ts'] = ts;                                   
       last_orders_bid.push( row );
       } // if
    } // for
 
 
last_orders_ask_sortet = sort_orders(last_orders_bid);
 
 

// render
size = last_orders_ask_sortet.length;
for (i=0; i<size; i++)
   {
   price    = last_orders_ask_sortet[i]['price'];
   amount   = last_orders_ask_sortet[i]['amount'];
   
   user   = last_orders_ask_sortet[i]['user'];
   ts     = last_orders_ask_sortet[i]['ts'];
      
   amount2 = amount;                                                                       
   amount3 = Number(amount2).toFixed(last_tokenprecision);

  
   var sovtotal = amount;     
   sovtotal = Number(sovtotal).toFixed(4);
     
     
   var tokentotal = amount / price; 
   tokentotal = Number(tokentotal).toFixed(last_tokenprecision);
      
   var ts2 = timeConverter(ts);
   buffer += "<div class='green' title='this is it "+user+" ("+ts2+")'>";                              
   buffer += "<div class='f25' onclick='take_price_buy_and_sell("+price + ")'>"+price + "</div> <div class='f25'>"+tokentotal + "</div>  <div class='f25'>"+sovtotal + "</div>  ";
   buffer += "</div>";                                     
   buffer += "<div style='clear:both'></div>";
   } // for

   
 
document.getElementById('bidscrolldiv').innerHTML = buffer;

// Set scroll pos
var element = document.getElementById("bidscrolldiv");
element.scrollTop = "0px";
    

 
try
{
if( typeof last_orders_ask_sortet[0]['price'] === 'undefined' ) 
{
console.log("UNDEFINED");
document.getElementById('sell_price').value = "42";
} else
  {
  console.log("DEFINED");
  document.getElementById('sell_price').value = last_orders_ask_sortet[0]['price'];
  }
  
  } 
  catch (err) {
              console.log("ERROR:");
              document.getElementById('buy_price').value = 0;
              }
   
 
loaded_bids = 1;
} // callback_render_traidingdesk_bids




function callback_render_traidingdesk_asks2( value )
{

var buffer = "";
buffer += "<div>";                                                                 
buffer += "<div class='f10'>Price</div> <div class='f10'>Amount("+last_tokenname+")</div>  <div class='f10'>Total (SOV)</div>  <div class='f10'>Order Amt</div><div class='f10'>Order Amount</div>   <div class='f10'>User</div>  <div class='f10'>Time</div>   <br>";
buffer += "</div>";                                     
buffer += "<div style='clear:both'></div>";

document.getElementById('askbidtabletitle2').innerHTML = buffer;


var size = value.rows.length;
var buffer = "";
                            
                                               

last_orders_ask2 = [];
 
for (var i=0; i < size; i++)
    {
    id = value.rows[i].id;
    price = value.rows[i].price;
    user = value.rows[i].user;
    placed = value.rows[i].placed;

    samount = value.rows[i].samount;
    samount2 = samount / Math.pow(10, last_tokenprecision)  ;                                                                   
    samount = Number(samount2).toFixed(last_tokenprecision) ;

    amount = value.rows[i].amount;
    amount2 = amount / Math.pow(10, last_tokenprecision)  ;                                                                  
    amount = Number(amount2).toFixed(last_tokenprecision) ;
                                
    price = Number(price).toFixed(6);
    tokenid = value.rows[i].tokenid;
                     
    if (tokenid == last_tokenid2) 
       {                              
       var sovtotal = price * amount;  
       sovtotal = Number(sovtotal).toFixed(4);

       row = new Array();
       row['id'] = id;
       row['tokenid'] = tokenid;
       row['price'] = price;
       row['user'] = user; 
       row['amount'] = amount2; 
       row['samount'] = samount2; 
                                   
       row['placed'] = placed;
       ts = new Date( placed).getTime() / 1000 ;
       row['ts'] = ts;                                   
       last_orders_ask2.push( row );
       } // if
    } // for
  
 
// without merge
last_orders_ask_sortet = bsort_orders( last_orders_ask2 );

 

// render
size = last_orders_ask_sortet.length;
for (i=0; i<size; i++)
    {
    price    = last_orders_ask_sortet[i]['price'];
    amount   = last_orders_ask_sortet[i]['amount'];
    samount  = last_orders_ask_sortet[i]['samount'];
    user     = last_orders_ask_sortet[i]['user'];   
    ts       = last_orders_ask_sortet[i]['ts'];   
   
    var ts2 = timeConverter(ts);
    amount2 = amount;                                                                       
    amount3 = Number(amount2).toFixed(last_tokenprecision);

    var sovtotal = price * amount;  
    sovtotal = Number(sovtotal).toFixed(4);
                                   
    var col = "";                                
 
    buffer += "<div name='red' class='red' style='background:"+col+";'>&nbsp;";                              
    buffer += "<div class='f10' onclick='take_price_buy_and_sell("+price + ")'>"+price + "</div> <div class='f10'>"+amount3 + "</div>  <div class='f10'>"+sovtotal + "</div>      <div class='f10'>"+amount + "</div><div class='f10'>"+samount + "</div>         <div class='f10'>"+user + "</div> <div class='f25'>"+ts2 + "</div> ";
    buffer += "</div>";                                     
    buffer += "<div style='clear:both'></div>";                              
    } // for

 
document.getElementById('askscrolldiv2').innerHTML = buffer;
console.log("askscrolldiv2 - set " + id);

// Set scroll pos
var element = document.getElementById("askscrolldiv2");
element.scrollTop = element.scrollHeight;
                                          
} // callback_render_traidingdesk_asks2




function callback_render_traidingdesk_bids2( value )
{
var size = value.rows.length;
                    
var buffer = "";

buffer += "<div>";                                                                 
buffer += "<div class='f10'>Price</div> <div class='f10'>Amount("+last_tokenname+")</div>  <div class='f10'>Total (SOV)</div>  <div class='f10'>Order Amt</div><div class='f10'>Order Amount</div>   <div class='f10'>User</div>  <div class='f10'>Time</div>   <br>";
buffer += "</div>";                                     
buffer += "<div style='clear:both'></div>";

document.getElementById('askbidtabletitle2b').innerHTML = buffer;
buffer = "";


        
last_orders_bid2 = [];                            
for (var i=0; i < size; i++)
    {
    id = value.rows[i].id;
    price = value.rows[i].price;
    user = value.rows[i].user;
    placed = value.rows[i].placed;
                                
    price = value.rows[i].price;
    price = Number(price).toFixed(6);
                                
    samount = value.rows[i].samount;
    samount2 = samount / Math.pow(10, last_tokenprecision)  ; //                                                                    
    samount = Number(samount2).toFixed(last_tokenprecision);
                                
    var amount_sov2 = value.rows[i].amount;
    amount_sov2 = amount_sov2 / Math.pow(10, 4)  ; // 
    amount_sov = Number(amount_sov2).toFixed(4);
                               
                                
    tokenid = value.rows[i].tokenid;
                            
    if (tokenid == last_tokenid2) 
       {
       amount = amount_sov2 / price;
       amount = Number(amount).toFixed(last_tokenprecision);
                          
       row = new Array();
       row['id'] = id;
       row['tokenid'] = tokenid;
       row['price'] = price;
       row['user'] = user;
       row['amount'] = amount_sov2;
       row['samount'] = samount2;
                                   
       row['placed'] = placed;
       ts = new Date( placed).getTime() / 1000 ;
       row['ts'] = ts;                                   
       last_orders_bid2.push( row );
                                   
       } // if
    } // for
 
 
 
//
// without merge
last_orders_bid_sortet = bsort_orders( last_orders_bid2 );

// render
size = last_orders_bid_sortet.length;
for (i=0; i<size; i++)
    {
    price    = last_orders_bid_sortet[i]['price'];
    amount   = last_orders_bid_sortet[i]['amount'];
    samount  = last_orders_bid_sortet[i]['samount'];
   
    user   = last_orders_bid_sortet[i]['user'];
    ts     = last_orders_bid_sortet[i]['ts'];
    var ts2 = timeConverter(ts);
      
    amount2 = amount;                                                                       
    amount3 = Number(amount2).toFixed(last_tokenprecision);

 
    var sovtotal = amount;     
    sovtotal = Number(sovtotal).toFixed(4);
     
     
    var tokentotal = amount / price; 
    tokentotal = Number(tokentotal).toFixed(last_tokenprecision);
      
    var ts2 = timeConverter(ts);      
    var col = "";                                
          
    buffer += "<div class='green' style='background:"+col+";' title='this is it "+user+" ("+ts2+")'>&nbsp;";                              
    buffer += "<div class='f10' onclick='take_price_buy_and_sell("+price + ")'>"+price + "</div> <div class='f10'>"+tokentotal + "</div>  <div class='f10'>"+sovtotal + "</div>    <div class='f10'>"+amount + "</div><div class='f10'>"+samount + "</div>      <div class='f10'>"+user + "</div>  " +  "<div class='f25'>"+ts2 + "</div> " ;
    buffer += "</div>";                                     
    buffer += "<div style='clear:both'></div>";
    }

   
 
document.getElementById('bidscrolldiv2').innerHTML = buffer ;

// Set scroll pos
var element = document.getElementById("bidscrolldiv2");
element.scrollTop = "0px";
    

} // callback_render_traidingdesk_bids2

 

function callback_render_balance1( value )
{

if (value.rows.length == 0) return;                   
balance = value.rows[0].balance;
 
buffer = "" + balance;
last_balance1 = balance;
document.getElementById('balance1').innerHTML = buffer;
                               
} // callback_render_balance1



function callback_render_balance2( value )
{

var balance = "";                                


// jungle-specials HACK
if (last_tokenid == 10 || last_tokenid == 15)
   {

   try
      {
      balance = value.rows[1].balance; 
      } 
      catch (err) 
            {
            console.log("ERROR!");
            balance =0; 
            }


                                                                   
   } else
     {
                                                                     
     try
        {
        balance = value.rows[0].balance; 
        } 
        catch (err) 
              {
              console.log("Balance not found!");
              balance = 0; 
              }
                                
     } // else

 
buffer = "" + balance;
last_balance2 = balance;
document.getElementById('balance2').innerHTML = buffer + "";
                               
} // callback_render_balance1




function callback_render_traidingdesk_last( value )
{

tokenid = value.rows[0].id;
 
price = value.rows[0].last;
symbol = value.rows[0].symbol;
price = Number(price).toFixed(6);

last_tokenprecision = symbol.split(",")[0];
                             
tokenname = symbol.split(",")[1];
last_tokenname = tokenname;
contract = value.rows[0].contract;
                             
last_tokencontract = contract;
                         
document.getElementById('token1').innerHTML = last_tokenname;
document.getElementById('token2').innerHTML = last_tokenname;
document.getElementById('token3').innerHTML = last_tokenname;
document.getElementById('token4').innerHTML = last_tokenname;
                             
                             
 
buffer = ""+price;
document.getElementById('lastorder').innerHTML = buffer;
                               
getdata(callback_render_traidingdesk_asks, "sovorderbook", "sovorderbook", "asks", tokenid, 2, "i64", 1100 );
getdata(callback_render_traidingdesk_bids, "sovorderbook", "sovorderbook", "bids", tokenid, 2, "i64", 1100 );

getdata(callback_render_traidingdesk_asks2, "sovorderbook", "sovorderbook", "asks", tokenid, 2, "i64", 1100 );
getdata(callback_render_traidingdesk_bids2, "sovorderbook", "sovorderbook", "bids", tokenid, 2, "i64", 1100 );

                         
getdata(callback_render_balance1, "sovmintofeos", global_account, "accounts", "", "", "", 112 );
getdata(callback_render_balance2, last_tokencontract, global_account, "accounts", "", "", "", 112 );

} // callback_render_traidingdesk_last


 



function callback_render_traidingdesk_last2( value )
{

tokenid = value.rows[0].id;
price = value.rows[0].last;
symbol = value.rows[0].symbol;
price = Number(price).toFixed(6);

last_tokenprecision = symbol.split(",")[0];
tokenname = symbol.split(",")[1];
                                  
last_tokenname = tokenname;
contract = value.rows[0].contract;
                             
last_tokencontract = contract;
                   
document.getElementById('token1').innerHTML = last_tokenname;
document.getElementById('token2').innerHTML = last_tokenname;
document.getElementById('token3').innerHTML = last_tokenname;
document.getElementById('token4').innerHTML = last_tokenname;
                             
    
buffer = ""+price;
document.getElementById('lastorder2').innerHTML = buffer + "";
  
getdata(callback_render_traidingdesk_asks2, "sovorderbook", "sovorderbook", "asks", tokenid, 2, "i64", 1100 );
getdata(callback_render_traidingdesk_bids2, "sovorderbook", "sovorderbook", "bids", tokenid, 2, "i64", 1100 );
 
                         
getdata(callback_render_balance1, "sovmintofeos", global_account, "accounts", "", "", "", 112 );
getdata(callback_render_balance2, last_tokencontract, global_account, "accounts", "", "", "", 112 );

} // callback_render_traidingdesk_last2


  
 


var last_tokenid         = -1;
var last_tokenid2        = -1;
var last_tokenname       = "";
var last_tokenprecision  = "";
var last_tokencontract   = "";
var last_orders_ask = [];
var last_orders_bid = [];
var loaded_bids = 0;
var loaded_asks = 0;
var tokenlist = [];
var loaded_tokenlist = 0;
var last_balance1 = 0;
var last_balance2 = 0;
var update_counter = 0;


function load_tradingdesk( tokenid )
{
last_tokenid = tokenid;

loaded_bids = 0;
loaded_asks = 0;

getdata(callback_render_traidingdesk_last, "sovorderbook", "sovorderbook", "token", tokenid, "", "", 1100 );

} // load_tradingdesk


function load_tradingdesk2( tokenid )
{
last_tokenid2 = tokenid;

getdata(callback_render_traidingdesk_last2, "sovorderbook", "sovorderbook", "token", tokenid, "", "", 1100 );

} // load_tradingdesk2



// called on buy- and sell-success
function func_success( message )
{

update_counter = 0;

}

function func_error( message )
{

update_counter = 0;

}

 

function action_buy()
{
// 1-get fields

balance1         = document.getElementById('balance1').innerHTML;
buy_price        = parseFloat ( document.getElementById('buy_price').value );
buy_amount_token = document.getElementById('buy_amount_token').value;
buy_amount_sov   = document.getElementById('buy_amount_sov').value;

console.log("balance1: " + balance1);
console.log("buy_price: " + buy_price);
console.log("buy_amount_token: " + buy_amount_token);
console.log("buy_amount_sov: " + buy_amount_sov);
 
 


// 2.create action-array
console.log("1_#_)");
console.log(last_orders_ask);
 
last_orders_ask_tmp = [];
Array.prototype.push.apply(last_orders_ask_tmp, last_orders_ask);

bsort_orders( last_orders_ask_tmp );

 

/*
BUY TOKEN
in bid-order is deposited SOV "amount"
In ask-amount are TOKEN deposited, not token
I want to sell my SOV for TOKEN, so SOV is the base for the for-i-loop
Will try to spend all my SOV, rest will create a new bid oder
*/

var rest = buy_amount_token;
console.log("start rest: "  + rest);


action_array = [];  

size = last_orders_ask_tmp.length;


for (var i=size-1; i>=0; i--)
    {
    console.log("_i:" + i );
    price  = parseFloat ( last_orders_ask_tmp[i].price );
    amount = last_orders_ask_tmp[i].amount;
    orderid = last_orders_ask_tmp[i].id;
    console.log(i +  "("+buy_price+") price: " + price);
    if (price <= buy_price)
       {
       
       if (rest > 0)
          {
          // Order can filled complete
          if (amount <= rest)
            {
            row = new Array();
            row['action'] = "a2";
            row['orderid'] = orderid;
            row['comment'] = "take ask -1-";
            row['price']   = price;
            amount2 = Number(amount).toFixed(last_tokenprecision);
            row['amount_token'] = amount2;
            
            action_array.push( row );
            
            rest = rest - amount;
            } else
              if (amount > rest)
              // order.amount (e.g. 50) > rest (e.g. 20)
              // order only can filled partly
              {  
              row = new Array();
              row['action'] = "a2";
              row['orderid'] = orderid;
              row['comment'] = "take ask -2-";
              row['price']   = price;
              amount2 = Number(rest).toFixed(last_tokenprecision);
              row['amount_token'] = amount2;
         
              action_array.push( row );

              rest = 0;
              }
             
              
         } // if (rest > 0)              
           
       } // if price <= buy_price
       
       
    } // for (var i=0; i<size; i++)
  
   

if (rest > 0)
   {
   row = new Array();
   row['action'] = "b1";
   row['comment'] = "create bid -1-";
   row['price']   = buy_price;
   amount2 = Number(rest).toFixed(last_tokenprecision);
   row['amount_token'] = amount2;
          
   action_array.push( row );          
   } // if (rest > 0)
  



 

//
// 3.creat transaction-actions
// ...
var theactions = [];

size = action_array.length;

totalsovdebug = 0;

for (var i=0; i<size; i++)
    {
    action       = action_array[i].action;
    orderid      = action_array[i].orderid;
    price        = action_array[i].price;
    amount_token = action_array[i].amount_token;
    
    from = global_account;
    to   = "sovorderbook";
    
    sovamount = amount_token * price;
    sovamount = Number(sovamount).toFixed(4);
    
    totalsovdebug += sovamount*1;
   
    memo = "";
    
    if ( action == "a2" )
       {
       memo = "takeord;ask;"+orderid+";"+amount_token+";JUNGLE";
       quantity = sovamount + " SOV";
       }

    if ( action == "b1" )
       {
       memo = "createord;bid;"+price+";"+last_tokenid+";"+last_tokenname;
       quantity = sovamount + " SOV";
       }
    
    console.log("from: " + from);
    console.log("to: " + to);
    console.log("quantity: " + quantity);
    console.log("memo: " + memo);
    
   
    var action = {
                 account: "sovmintofeos",
                 name: 'transfer',
                 authorization: [{
                                actor: from,
                                permission: "active"
                                }],
                 data: {
                       "from": from,
                       "to": "sovorderbook",
                       "quantity": quantity,
                       "memo": memo
                       }
                 };

 
    theactions.push(action);
    } // for i...

 
 
 
if (1)
   {
   transact( func_success, func_error, theactions );
   }

 

} // action_buy()


 

//
//
//
function action_sell()
{
sell_price = document.getElementById('sell_price').value;
sell_amount_token = document.getElementById('sell_amount_token').value;

 

// 1-get fields
balance2          = document.getElementById('balance2').innerHTML;
sell_price        = parseFloat ( document.getElementById('sell_price').value );  
sell_amount_token = document.getElementById('sell_amount_token').value;
sell_amount_sov   = document.getElementById('sell_amount_sov').value;



// 2.create action-array
last_orders_bid_tmp = [];
Array.prototype.push.apply(last_orders_bid_tmp, last_orders_bid);

bsort_orders( last_orders_bid_tmp );
 

// set start (rest) token ammount
var rest = sell_amount_token;

// set start (rest) token ammount
/*
SELL TOKEN
in ask-order is deposited TOKEN "amount"
In bid-amount are SOV deposited, not token
I want to sell my TOKEN for SOV, so TOKEN is the base for the for-i-loop
Will try to spend all my TOKEN, rest will create a new ask oder
*/
var rest       = sell_amount_sov;
var rest_token = sell_amount_token; 

// set empty action_array;
action_array = [];  

size = last_orders_bid_tmp.length;


for (var i=0; i<size; i++)
    {    
    price       = parseFloat ( last_orders_bid_tmp[i].price );
    amount_sov  = last_orders_bid_tmp[i].amount; // in SOV
    orderid     = last_orders_bid_tmp[i].id;
    
    amount_token = amount_sov / price;
    
    if (price >= sell_price)
       {
       console.log("here! amount:"+amount_sov+" SOV  rest("+rest_token+")" );
       if (rest_token > 0)
          {
          // Order can filled complete
          if (amount_token <= rest_token)
             {         
             row = new Array();
             row['action']  = "b2"; // buy a2, sell b2
             row['orderid'] = orderid;
             row['comment'] = "take bid -1-";
             row['price']   = price;
            
             amount2 = Number(amount_token).toFixed(last_tokenprecision);  
             row['amount_token'] = amount2;

             action_array.push( row );
                                   
             rest_token = rest_token - amount2;
            
             } else
               if (amount_token > rest_token)
               // order.amount (e.g. 50) > rest (e.g. 20)
               // order only can filled partly
               {                  
               row = new Array();
               row['action'] = "b2"; // buy a2, sell b2
               row['orderid'] = orderid;
               row['comment'] = "take bid -2-";
               row['price']   = price;
               amount2 = Number(rest_token).toFixed(last_tokenprecision);

               row['amount_token'] = amount2;

               action_array.push( row );
               rest_token = 0;
               }
                            
          } // if (rest > 0)                         
       } // if price <= sell_price
       
       
    } // for (var i=0; i<size; i++)
  
   
console.log("final rest: ("+rest_token+") TOKEN, " );    
 
if (rest_token > 0)
   {
   row = new Array();
   row['action'] = "a1"; // buy b1, sell a1
   row['comment'] = "create ask -1-";
   row['price']   = sell_price;
   amount2 = Number(rest_token).toFixed(last_tokenprecision);
   row['amount_token'] = amount2;
           
   action_array.push( row );          
   } // if (rest > 0)
  

 

//
// 3.creat transaction-actions
// 
var theactions = [];

size = action_array.length;
totalsovdebug = 0;

for (var i=0; i<size; i++)
    {
    action       = action_array[i].action;
    orderid      = action_array[i].orderid;
    price        = action_array[i].price;
    amount_token = action_array[i].amount_token;    
   
    from = global_account;
    to   = "sovorderbook";
    
    sovamount = amount_token * price;
    sovamount  = toFixed2(sovamount,4)    
    totalsovdebug += sovamount*1;
   
    memo = "";
     
    if ( action == "b2" )
       {
       memo = "takeord;bid;"+orderid+";"+sovamount+";SOV";
       quantity = amount_token  + " " + last_tokenname;
       }

    if ( action == "a1" )
       {
       memo = "createord;ask;"+price+";-1;SOV";
       quantity = amount_token + " " + last_tokenname;
       }
    
    var action = {
                 account: last_tokencontract,
                 name: 'transfer',
                 authorization: [{
                                actor: from,
                                permission: "active"
                                }],
                 data: {
                       "from": from,
                       "to": "sovorderbook",
                       "quantity": quantity,
                       "memo": memo
                       }
                 };

 
    theactions.push(action);
    } // for i...

 
if (1)
{
transact( func_success, func_error, theactions );
}
 

 
} //  action_sell()



function take_price_buy_and_sell( price )
{
document.getElementById('buy_price').value = price;

update_form_buy( "price", price, 0, 0, 0 );

document.getElementById('sell_price').value = price;

update_form_sell( "price", price, 0, 0, 0 );

} // function take_price( price )




//
// update_form_buy()
//
function update_form_buy( base, price, amount, slider, total )
{

if (base == "price")
   {
   buy_price =  document.getElementById('buy_price').value;
   buy_amount_token =  document.getElementById('buy_amount_token').value;
   
   balance = last_balance1.replace("SOV", "");
   balance = parseFloat (balance);

   
   buy_amount_sov = buy_amount_token * buy_price;   
   buy_amount_sov = Number(buy_amount_sov).toFixed(4);
   document.getElementById('buy_amount_sov').value = buy_amount_sov;
   } // if (base == "price")



if (base == "amount")
   {
   buy_price =  document.getElementById('buy_price').value;
    
   buy_amount_token =    amount;
 
   balance = last_balance1.replace("SOV", "");
   balance = parseFloat (balance);
   
   buy_amount_sov = buy_amount_token * buy_price;
   
   
   buy_amount_sov = Number(buy_amount_sov).toFixed(4);
   document.getElementById('buy_amount_sov').value = buy_amount_sov;
   } // amount
   
   
   
if (base == "slider")
   {
   buy_price =  document.getElementById('buy_price').value;
      
   balance = last_balance1.replace("SOV", "");
   
   balance = parseFloat (balance)
   total_sov = (slider / 100) * balance;                                                                        
   total_sov = Number(total_sov).toFixed(4);
   
   document.getElementById('buy_amount_sov').value = total_sov;
 
   buy_amount_token = total_sov / buy_price; 
   
   buy_amount_token = Number(buy_amount_token).toFixed(last_tokenprecision);
   document.getElementById('buy_amount_token').value = buy_amount_token;
   } // slider
   
   
   
if (base == "total")
   {
   buy_price =  document.getElementById('buy_price').value;
      
   balance = last_balance1.replace("SOV", "");
   
   balance = parseFloat (balance)
      
   total_sov = total;
 
   buy_amount_token = (1.0*total_sov) / (1.0*buy_price); 
   buy_amount_token = Number(buy_amount_token).toFixed(last_tokenprecision);
       
   document.getElementById('buy_amount_token').value = buy_amount_token;   
   } // total
   
   
} // update_form_buy( base )

 
 
function toFixed2(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}


//
// update_form_sell()
//
function update_form_sell( base, price, amount, slider, total )
{

if (base == "price")
   {   
   sell_price =  document.getElementById('sell_price').value;

   sell_amount_token =  document.getElementById('sell_amount_token').value;
   
 
   balance = last_balance2.replace(last_tokenname, "");
   
   balance = parseFloat (balance);

    
   sell_amount_sov  = sell_amount_token * sell_price;      
   sell_amount_sov  = toFixed2(sell_amount_sov,4);    
     
   document.getElementById('sell_amount_sov').value = sell_amount_sov;
   } // if (base == "price")



if (base == "amount")
   {
   sell_price =  document.getElementById('sell_price').value;
    
   sell_amount_token =    amount;
   
 
   balance = last_balance2.replace(last_tokenname, "");
      
   balance = parseFloat (balance);
   
   sell_amount_sov = sell_amount_token * sell_price;
   sell_amount_sov  = toFixed2(sell_amount_sov,4)

   document.getElementById('sell_amount_sov').value = sell_amount_sov; 
   } // amount
   
   
if (base == "slider")
   {
   sell_price =  document.getElementById('sell_price').value;
 
   balance = last_balance2.replace(last_tokenname, "");
     
   balance = parseFloat (balance)
   total_sov = (slider / 100) * balance;
   
   total_sov  = toFixed2(total_sov,4)
                               
   document.getElementById('sell_amount_sov').value = total_sov;
 
   sell_amount_token = total_sov / sell_price; 
   
   sell_amount_token = Number(sell_amount_token).toFixed(last_tokenprecision);
   document.getElementById('sell_amount_token').value = sell_amount_token;
   } // slider
   
 
   
if (base == "total")
   {
   sell_price =  document.getElementById('sell_price').value;
   
   balance = last_balance2.replace(last_tokenname, "");
   
   balance = parseFloat (balance);

   total_sov = total;
 
   sell_amount_token = (1.0*total_sov) / (1.0*sell_price); 
   sell_amount_token = Number(sell_amount_token).toFixed(last_tokenprecision);
       
   document.getElementById('sell_amount_token').value = sell_amount_token;   
   } // total
   
   
   
} // update_form_sell( base )
 
 


//
// Buy-form
//
function action_keyup_buy_price_sov(e)
{
key = e.keyCode;
ch = String.fromCharCode(key);
buy_price =  document.getElementById('buy_amount_sov').value; 
 
update_form_buy( "price", buy_price, 0, 0, 0 )
}



function action_keyup_buy_amount_token(e)
{
key = e.keyCode;
ch = String.fromCharCode(key);
buy_amount_token =  document.getElementById('buy_amount_token').value; 

update_form_buy( "amount", 0, buy_amount_token, 0, 0 )
}


 
function action_keyup_sell_amount_token(e)
{
key = e.keyCode;
ch = String.fromCharCode(key);
sell_amount_token =  document.getElementById('sell_amount_token').value; 

update_form_sell( "amount", 0, sell_amount_token, 0, 0 )
}


 
function update_price_sov_buy( slideamount )
{
update_form_buy( "slider",0,0,slideamount,0 );
}

 
 
function update_price_sov_sell( slideamount )
{
update_form_sell( "slider",0,0,slideamount,0 );
}

 


function action_keyup_buy_amount_sov(e)
{
key = e.keyCode;
ch = String.fromCharCode(key);
buy_amount_sov =  document.getElementById('buy_amount_sov').value; 

update_form_buy( "total", 0, 0, 0, buy_amount_sov )
}


function action_keyup_sell_amount_sov(e)
{
key = e.code;

sell_amount_sov =  document.getElementById('sell_amount_sov').value; 

update_form_sell( "total", 0, 0, 0, sell_amount_sov )
}




//
// Sell-form
//
function action_keyup_sell_price_sov(e)
{
key = e.keyCode;
ch = String.fromCharCode(key);
buy_price =  document.getElementById('sell_amount_sov').value; 

update_form_sell( "price", buy_price, 0, 0, 0 )
}


 


function load_userorders( tokenid )
{

if ( loaded_asks == 1 && loaded_bids == 1 )
   {
   size_ask = last_orders_ask.length;
   size_bid = last_orders_bid.length;

   buffer = "";   
   buffer += "<div class='' style=''>";                              
   buffer += "<div class='f15'>Pair</div> <div class='f15'>Type</div> <div class='f15 alignright'>Price</div>  <div class='f15'>&nbsp;</div> <div class='f15'>Order Amt</div>  <div class='f15'>Order Total</div> ";
   buffer += "</div>";                                     
   buffer += "<div style='clear:both'></div>";
   document.getElementById('userorders_header').innerHTML = buffer;
   
   buffer = "";          
          
   
   for (var i=0; i<size_ask; i++)
       {            
       id         = last_orders_ask[i]['id'];
       amount     = last_orders_ask[i]['amount'];
       samount    = last_orders_ask[i]['samount'];
       tokenid    = last_orders_ask[i]['tokenid'];   
       price      = last_orders_ask[i]['price'];   
       user       = last_orders_ask[i]['user'];          
       tokenname  = tokenlist[tokenid]['name'];        
       cancellink = "<span onclick='cancelorder(\"ask\"," +id+ ")' class='cancelorderbutton'>CANCEL</span>";    
           
       amount = Number(amount).toFixed(last_tokenprecision);    
       samount  = toFixed2(samount,4)
           
   
       if (user == global_account)
          {        
          buffer += "";
          buffer += "<div class='' style=''>";                              
          buffer += "<div class='f15'>"+tokenname + "/SOV </div> <div class='f15'>ASK</div> <div class='f15 alignright'>" +price+ "</div> <div class='f15'>&nbsp;</div>   <div class='f15'>" +amount+ "</div>  <div class='f15'>" +samount+ "</div>  "+cancellink+"";
          buffer += "</div>";                                     
          buffer += "<div style='clear:both'></div>";                                                       
          }
                 
       } // for i...
  
 
  
   for (var i=0; i<size_bid; i++)
       {             
       id         = last_orders_bid[i]['id'];
       amount     = last_orders_bid[i]['amount'];
       samount    = last_orders_bid[i]['samount'];       
       tokenid    = last_orders_bid[i]['tokenid'];   
       price      = last_orders_bid[i]['price'];   
       user       = last_orders_bid[i]['user'];          
       tokenname  = tokenlist[tokenid]['name'];
       cancellink = "<span onclick='cancelorder(\"bid\"," +id+ ")' class='cancelorderbutton'>CANCEL</span>";           

           
       if (user == global_account)
          {    
          buffer += "";
          buffer += "<div class='' style=''>";                              
          buffer += "<div class='f15'>" +tokenname+ "/SOV </div> <div class='f15'>BID</div> <div class='f15 alignright'>" +price+ "</div>  <div class='f15'>&nbsp;</div> <div class='f15'>" +amount+ "</div>  <div class='f15'>" +samount+ "</div>  "+cancellink+"";
          buffer += "</div>";                                     
          buffer += "<div style='clear:both'></div>";
          }
                     
       } // for i...
  
  
  
   document.getElementById('userorders').innerHTML = buffer;
   } // if ( loaded_asks == 1 && loaded_bids == 1 )
 

} // render_user_orders()




function cancelorder_success( value )
{
load_userorders( last_tokenid );

update_counter = 0;
}


 
function cancelorder( askbid, orderid )
{

var myactions = 
   [
    {            
    account: 'sovorderbook',
    name: 'cancelorder',
    authorization: [{
                   actor: global_account,
                   permission: global_account_permission
                   }]
                   ,
    data: {
          "user": global_account,
          "askbid": askbid,
          "orderid": orderid
          }
    }                                
   ];
   
 
transact(cancelorder_success,cancelorder_success, myactions );


} // cancelorder





function update_thread()
{
var time = setTimeout("update_thread()", 1000);

if (update_counter == 1) 
   {
   load_tradingdesk( last_tokenid );
   load_userorders( last_tokenid );
   }
  
if (update_counter == 2) 
   {
   load_userorders( last_tokenid );
   }   

if (update_counter == 6) 
   {
   load_userorders( last_tokenid );
   }   


update_counter++;

// autoupdate
//if (update_counter % 90 == 0) 
if (update_counter % 30 == 0) 
   {
   load_tradingdesk( last_tokenid );
   console.log("autoupdate "  + update_counter);
   load_userorders( last_tokenid );
   }   
  
} //// update_thread



 

function dodebug()
{
load_userorders( last_tokenid );

document.getElementById('debugresult').innerHTML = "result";
}






function cancelall()
{
var theactions = [];


if ( loaded_asks == 1 && loaded_bids == 1 )
   {
   size_ask = last_orders_ask.length;
   size_bid = last_orders_bid.length;
 
   for (var i=0; i<size_ask; i++)
       {             
       id = last_orders_ask[i]['id'];
        
       var action = {
                    account: "sovorderbook",
                    name: 'cancelorder',
                    authorization: [{
                                    actor: global_account,
                                    permission: "active"
                                   }],
                    data: {
                          "user": global_account,
                          "askbid": "ask",
                          "orderid": id
                          }
                    };

 
       theactions.push(action);
       } // for i..


    for (var i=0; i<size_bid; i++)
        {
        id = last_orders_bid[i]['id'];
    
        var action = {
                     account: "sovorderbook",
                     name: 'cancelorder',
                     authorization: [{
                                    actor: global_account,
                                    permission: "active"
                                    }],
                     data: {
                           "user": global_account,
                           "askbid": "bid",
                           "orderid": id
                           }
                     };

 
   theactions.push(action);
   } // for i..


   transact( func_success, func_error, theactions );
   
   } // if ( loaded_asks == 1 && loaded_bids == 1 )

 
} // cancelall()





function init_nodes()
{
/*
let nodearray = [
    "eos.api.eosnation.io",
    "eos.greymass.com",    
    "alf.test.io",
    "alf2.test.io"  ,
    "jungle3.cryptolions.io",
    "jungle3.greymass.com"
];
*/

let nodearray = [
    "eos.api.eosnation.io",
    "eos.greymass.com",
    "api.eossweden.org",
    "bp.cryptolions.io"
];

select = document.getElementById('nodeselect');   

for (var i=0; i< nodearray.length; i++)
    {        
    var opt = document.createElement('option');
    opt.value = nodearray[i];
        
    if (nodearray[i] == thenode)
       {   
       opt.selected = "selected";
       }
        
    opt.innerHTML = "&nbsp"+nodearray[i]+"&nbsp;";
    select.appendChild(opt)
    } // for i... 
    
} // init_nodes()

/* EOF */
