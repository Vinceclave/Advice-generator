// getting the element and set it as a variable 
const btn = document.querySelector('#button')
const adviceId = document.querySelector('#advice-id')
const adviceGen = document.querySelector('#advice-quote-gen')
    
// button add event listener we assign it to click

// fetching API we use Async await method
const fetchData = async() => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
        const data = await res.json()
        return data.slip
    } catch (err) {
        console.error(err);
    }
}

const setAdvice = async() => {
    let advice = await fetchData()
    let q = `<q>${advice.advice}</q>`
    adviceId.textContent = `#${advice.id}`
    adviceGen.innerHTML = q 
}


btn.addEventListener('click', setAdvice)