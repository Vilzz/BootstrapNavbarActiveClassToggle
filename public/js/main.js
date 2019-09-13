//Get the path of current page 
let path = window.location.pathname;
//Get  NavBar <li>'s id of current page
let liid = getCurrentLiId(path);
//Toggle 'active' class to current page <li> 
toggleActiveClass(liid);
//Return id of current page <li>
function getCurrentLiId(currentpagepath){
    const links =[{link:'/',id:'#one'},{link:'/first',id:'#two'},{link:'/second',id:'#three'},{link:'/third',id:'#four'}];
    let res = links.findIndex(item => item.link === currentpagepath);
    return links[res].id;
}
//Toggle 'active' class from previos page <li> to curent...
function toggleActiveClass(currentliid){
    let defaultliid = '#one';
    if (defaultliid !== currentliid){
        $(defaultliid).removeClass('active');
        $(currentliid).addClass('active');
        defaultliid = currentliid;
    }else {
        $(currentliid).addClass('active');
    }
}