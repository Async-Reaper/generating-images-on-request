const div = document.querySelector('.image');
const btn = document.querySelector('.post');
const search = document.querySelector('.search');
const errEnter = document.querySelector('.error__enter');

btn.addEventListener('click', () => {
    const url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=9&client_id=m64PdNpAotADzQCwvWuo6ILfk6DLCI6L54E3FiRpw_0`;

    const getImage = async (url) => {
        try {
            const response = await fetch(url);
            const res = await response.json();

            localStorage.setItem('img', JSON.stringify(res));

            if (res.total == 0) {
                errEnter.style.display = 'block';
            } else {
                errEnter.style.display = 'none';
                const {results} = JSON.parse(localStorage.getItem('img'));

                results.forEach( item => {
                    const img = document.createElement('img');
                    img.src = item.urls.full;
                    div.append(img)
                })
                

            }
            
        } catch (err) {
            console.log(err.message)
        }
    }

    const slider = (arr) => {

    }

    getImage(url)
})