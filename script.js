const tabLinks=document.getElementsByClassName("tab-links");
const tabContents=document.getElementsByClassName("tab-contents");

const opentab=(tabName)=> {
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add('active-tab');
}

const sideMenu=document.getElementById("sidemenu");

const openMenu=()=>{
    sideMenu.style.right="0";
}
const closeMenu=()=>{
    sideMenu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzKqVnkNAPSTq-BSsO_Gx72uIV6968M4P7S7JD56NOVDgwZ5dMMyXWvoWxYsmUnyKgkgA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    form.reset();
  })
