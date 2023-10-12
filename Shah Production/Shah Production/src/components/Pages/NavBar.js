import React from "react";



function NavBar() {
 


  return (
    <>


  <div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank" >
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank" >
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank" >
      <span class="icon"></span>
   </a>
   <a class="bg_links logo" ></a>

</div>


<nav class="mainNav">
   <div class="mainNav__logo">simple accounts</div>
   <div class="mainNav__links">

     <a href="/" class="mainNav__link"  >home</a>
       <a href="about" class="mainNav__link"  >About</a>
      
      <a href="blog" class="mainNav__link">login</a>
      <a href="contact" class="mainNav__link">Contacts</a> 
   
   </div>
   <div class="mainNav__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <g data-name="Layer 2" fill="#9197AE">
            <g data-name="menu-2">
               <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                  />
               <circle cx="4" cy="12" r="1" />
               <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
               <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
               <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
            </g>
         </g>
      </svg>
   </div>
</nav>
                 

                
    </>
  );
}

export default NavBar;
