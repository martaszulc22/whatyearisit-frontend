fetch('https://whatyearisit-backend-jet-phi.vercel.app')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    })
