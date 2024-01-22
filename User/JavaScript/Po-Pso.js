document.getElementById('add-co-btn').addEventListener('click', openPopup);

    function openPopup() {
    document.getElementById('popupContainer').style.display = 'flex';
    }

    function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
    }

    const colist = [
        
    ];
    rendercolist();
    function rendercolist()
    {
        let colisthtml = '';
        
        colist.forEach((coObject,index) =>
        {
            const {text1} = coObject;
            const html = 
            `
            <button class="pos-btn"> ${text1}</button><br> 
            `;
            colisthtml += html;
        });

        document.querySelector('.co-btn-js')
        .innerHTML = colisthtml;
        
    }

    document.querySelector('.co-submit')
    .addEventListener('click', ()=> {
        addco();
    });

    function addco()
    {
        const inputElement = document.querySelector('.co-input');
        const text1 = inputElement.value;

        colist.push({
            text1
        });
        inputElement.value = '';
        rendercolist();
    }