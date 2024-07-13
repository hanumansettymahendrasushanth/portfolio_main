

  function gmail()
  {
    alert("Gmail is hanumansettymahendrasushanth@gmail.com");
  }

  function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Email copied to clipboard: " + text);
  }

  
  var p1 = document.getElementById("project-box1")
  

  var p2 = document.getElementById("project-box2")
 

  var p3 = document.getElementById("project-box3")
  
    
  var p4 = document.getElementById("project-box4")
   





  function redirect(id)
  {

    if(id==='project-box1')
      {
          window.location.href="https://github.com/hanumansettymahendrasushanth/Smart-Traffic-Management-Project";
      }
      else if(id==='project-box2'){
            window.location.href="https://github.com/hanumansettymahendrasushanth/Crud_Application";
      }
      else if(id==='project-box3')
        {
          window.location.href="https://github.com/hanumansettymahendrasushanth/Calculator";
        }
        else
        {
          window.location.href="https://github.com/hanumansettymahendrasushanth/rock_paper_scissors";
        }
    
  }

  
  
  // function redirect(p2)
  // {
  //   window.location.href="https://github.com/hanumansettymahendrasushanth/Crud_Application"
  // }


  
  // function redirect(p3)
  // {
  //   window.location.href="https://github.com/hanumansettymahendrasushanth/Smart-Traffic-Management-Project"
  // }

  
  // function redirect(p4)
  // {
  //   window.location.href="https://github.com/hanumansettymahendrasushanth/Smart-Traffic-Management-Project"
  // }



  let menuicon = document.querySelector('menu-icon');
  let navbar = document.querySelector('.navbar');
  let sections = document.querySelector('section');
  let navlinks = document.querySelector('header nav a');

  window.onscroll =()=>
    {
      sections.forEach( sec =>
        {
          let top = window.scrollY;
          let offset =sec.offsetTop-150;
          let height = sec.offsetHeight;
          let id =  sec.getAttribute('id');

          if(top>=offset && top< offset+height)
            {
              navLinks.forEach(links=> {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
              })
            }

        });
        
    }

    menuicon.onclick= ()=>{
      menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    
    }