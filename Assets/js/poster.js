async function loader(){
    let req = new Request("poster.json");
    let res = await fetch(req);
    let data = await res.json();
    navtop_text(data);
    hover_text_nav(data);
    hover_text_nav1(data);
    hover_text_nav2(data);
    hover_text_nav3(data);
    main_head(data);
    product_name1(data);
    product_name2(data);
    product_name3(data);
    product_name4(data);
    product_name5(data);
    product_name6(data);
    product_name7(data);
    product_name8(data);
    product_price1a(data);
    product_price2a(data);
    product_price3a(data);
    product_price4a(data);
    product_price5a(data);
    product_price6a(data);
    product_price7a(data);
    product_price8a(data);
    announcement_head(data);
    announcement_cap(data);
    sub_head(data);
    sub_cap(data);
    tabs_list(data);
}

function main_head(data){
    document.querySelector("#main_head").innerHTML = data.main_head;
} 
function main_head(data){
    document.querySelector("#main_head").innerHTML = data.main_head;
} function product_name1(data){
    document.querySelector(".product_name1").innerHTML = data.product_name1;
}
function product_name2(data){
    document.querySelector(".product_name2").innerHTML = data.product_name2;
} 
function product_name3(data){
    document.querySelector(".product_name3").innerHTML = data.product_name3;
} 
function product_name4(data){
    document.querySelector(".product_name4").innerHTML = data.product_name4;
} 
function product_name5(data){
    document.querySelector(".product_name5").innerHTML = data.product_name5;
} 
function product_name6(data){
    document.querySelector(".product_name6").innerHTML = data.product_name6;
} 
function product_name7(data){
    document.querySelector(".product_name7").innerHTML = data.product_name7;
} 
function product_name8(data){
    document.querySelector(".product_name8").innerHTML = data.product_name8;
} 
function product_price1a(data){
    document.querySelector(".product_price1a").innerHTML = data.product_price1a;
}
function product_price2a(data){
    document.querySelector(".product_price2a").innerHTML = data.product_price2a;
}
function product_price3a(data){
    document.querySelector(".product_price3a").innerHTML = data.product_price3a;
}
function product_price4a(data){
    document.querySelector(".product_price4a").innerHTML = data.product_price4a;
}
function product_price5a(data){
    document.querySelector(".product_price5a").innerHTML = data.product_price5a;
}
function product_price6a(data){
    document.querySelector(".product_price6a").innerHTML = data.product_price6a;
}
function product_price7a(data){
    document.querySelector(".product_price7a").innerHTML = data.product_price7a;
} 
function product_price8a(data){
    document.querySelector(".product_price8a").innerHTML = data.product_price8a;
}
function announcement_head(data){
    document.querySelector("#announcement_head").innerHTML = data.announcement_head;
}
function announcement_cap(data){
    document.querySelector("#announcement_cap").innerHTML = data.announcement_cap;
}

loader(); 