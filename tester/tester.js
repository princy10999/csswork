const counters = document.querySelectorAll('.num')
const speed =  200; 

counters.forEach( num => {
    const updateCount =()=> {
        const target = +num.getAttribute('data-val');
        const count = +num.innerText;

        const inc =target / speed;

        if (count< target ){
            num.innerText= count+ inc;
            setTimeout(updateCount,1);

        }else{
            count.innerText=target;
        }
    }
    updateCount();
});
