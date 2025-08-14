let form = document.querySelector('form');

function handleSubmit(e){
    e.preventDefault();
    console.log('Event Firing')
}

form.addEventListener('change', handleSubmit)