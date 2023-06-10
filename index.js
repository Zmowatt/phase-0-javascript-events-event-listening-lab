function addingEventListener() {
    const input = document.getElementById('button');
    
    function clickAlert(){
      alert('He-He! That Tickles!')
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener();
