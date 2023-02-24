function Show(){
  divInfo = document.getElementById('popupdiv');
  if (divInfo.style.display == 'none'){
      divInfo.style.display = 'block';
  }else{
      divInfo.style.display = 'none';
  }
  
}

function Hide(){
  divInfo = document.getElementById('popupdiv');
  if (divInfo.style.display == 'block'){
      divInfo.style.display = 'none';
  } else {
      divInfo.style.display = 'block';
  }
}