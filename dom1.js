const userStatus = "success"; 

const badge = document.getElementById('dynamic-badge')

if(userStatus==="success"){
  badge.classList.add('sucess-badge')
  badge.style.backgroundColor='#d4edda'
}else if(userStatus==="warning"){
  badge.classList.add('warning-badge')
  badge.style.backgroundColor='#fff3cd'
}else if(userStatus==="danger"){
  badge.classList.add('danger-badge')
  badge.style.backgroundColor='#f8d7da'
}

badge.textContent = userStatus

console.log(badge)