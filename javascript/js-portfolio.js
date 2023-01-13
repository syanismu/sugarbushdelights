let filter = document.querySelectorAll('.filter');
let item = document.querySelectorAll('.item');

for (let i = 0; i < filter.length; i++)
{
    filter[i].addEventListener('click', function(){
        for (let j = 0; j < filter.length; j++){
            filter[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < item.length; k++){
            item[k].classList.remove('active');
            item[k].classList.add('hide');

            if (item[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                item[k].classList.remove('hide');
                item[k].classList.add('active');
            }
        }
    })
}
