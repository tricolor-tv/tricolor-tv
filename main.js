var equipmentFeatures = document.querySelectorAll('.equipment_features');

equipmentFeatures.forEach(function(item) {
    var equipmentPopUp = item.parentNode.querySelector('.equipment_pop-up');
    var equipmentName = item.parentNode.querySelector('.equipment_name').cloneNode(true);
    var equipmentPrice = item.parentNode.querySelector('.equipment_price').cloneNode(true);
    var equipmentPic = item.parentNode.querySelector('.equipment_pic').cloneNode(true);

    equipmentName.style.display = 'inline-block';
    equipmentName.innerHTML += '&emsp;';
    
    equipmentPrice.style.display = 'inline-block';
    equipmentPrice.style.whiteSpace = 'pre-wrap';
    equipmentPrice.innerHTML = equipmentPrice.innerHTML.replace('+ ', '');

    var equipmentImg = equipmentPic.querySelector('img');
    equipmentImg.style.width = '100%';

    var closeCross = document.createElement('div');
    closeCross.innerHTML = '❌';
    closeCross.style.position = 'fixed';
    closeCross.style.right = '15px';
    closeCross.style.top = '15px';
    closeCross.style.cursor = 'pointer';
    
    equipmentPopUp.firstElementChild.insertAdjacentElement('afterbegin', equipmentPic);
    equipmentPopUp.firstElementChild.insertAdjacentElement('afterbegin', closeCross);
    equipmentPopUp.firstElementChild.insertAdjacentElement('afterbegin', equipmentPrice);
    equipmentPopUp.firstElementChild.insertAdjacentElement('afterbegin', equipmentName);

    equipmentPopUp.firstElementChild.style.width = '100%';

    equipmentPopUp.addEventListener('click', function(event) {
        if (event.target.classList.value === 'equipment_pop-up') {
            equipmentPopUp.style.display = 'none';
        }
    });
    
    item.addEventListener('click', function() {
        equipmentPopUp.style.display = 'block';
    });

    closeCross.addEventListener('click', function() {
        closeCross.parentNode.parentNode.style.display = 'none';
    });

});




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





var exchangeButton = document.querySelectorAll('.exchange_button');

exchangeButton.forEach(function(item) {
    var exchangePopUp = item.parentNode.querySelector('.exchange_pop-up');
    var exchangeName = item.parentNode.querySelector('.exchange_name').cloneNode(true);
    var exchangePrice = item.parentNode.querySelector('.exchange_price').cloneNode(true);
    var exchangePic = item.parentNode.querySelector('.exchange_pic').cloneNode(true);

    exchangeName.style.display = 'inline-block';
    exchangeName.innerHTML += '&emsp;';
    
    exchangePrice.style.display = 'inline-block';
    exchangePrice.style.whiteSpace = 'pre-wrap';

    exchangePic.style.width = '300px';
    exchangePic.style.margin = '50px 0';

    var closeCross = document.createElement('div');
    closeCross.innerHTML = '❌';
    closeCross.style.position = 'fixed';
    closeCross.style.right = '15px';
    closeCross.style.top = '15px';
    closeCross.style.cursor = 'pointer';
    
    exchangePopUp.firstElementChild.insertAdjacentElement('afterbegin', exchangePic);
    exchangePopUp.firstElementChild.insertAdjacentElement('afterbegin', closeCross);
    exchangePopUp.firstElementChild.insertAdjacentElement('afterbegin', exchangePrice);
    exchangePopUp.firstElementChild.insertAdjacentElement('afterbegin', exchangeName);

    exchangePopUp.firstElementChild.style.width = '100%';

    exchangePopUp.addEventListener('click', function(event) {
        if (event.target.classList.value === 'exchange_pop-up') {
            exchangePopUp.style.display = 'none';
        }
    });
    
    item.addEventListener('click', function() {
        exchangePopUp.style.display = 'block';
    });

    closeCross.addEventListener('click', function() {
        closeCross.parentNode.parentNode.style.display = 'none';
    });

});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




var tricolorInternetTarifButton = document.querySelectorAll('.tricolor_internet_tarif_button');

tricolorInternetTarifButton.forEach(function(item) {
    var tricolorInternetTarifPopUp = item.parentNode.querySelector('.tricolor_internet_tarif_pop-up');
    var tricolorInternetTarifName = item.parentNode.querySelector('.tricolor_internet_tarif_name').cloneNode(true);
    var tricolorInternetTarifPrice = item.parentNode.querySelector('.tricolor_internet_tarif_price').cloneNode(true);
    var tricolorInternetSpeed = item.parentNode.querySelector('.tricolor_internet_speed').cloneNode(true);
    var tricolorInternetTraffic = item.parentNode.querySelector('.tricolor_internet_traffic').cloneNode(true);

    tricolorInternetTarifName.style.display = 'inline-block';
    tricolorInternetTarifName.innerHTML += '&emsp;';
    
    tricolorInternetTarifPrice.style.display = 'inline-block';
    tricolorInternetTarifPrice.style.whiteSpace = 'pre-wrap';


    var closeCross = document.createElement('div');
    closeCross.innerHTML = '❌';
    closeCross.style.position = 'fixed';
    closeCross.style.right = '15px';
    closeCross.style.top = '15px';
    closeCross.style.cursor = 'pointer';

    tricolorInternetSpeed.style.fontSize = '20px';

    tricolorInternetTraffic.style.fontWeight = '400';
    tricolorInternetTraffic.style.marginTop = '15px';

    tricolorInternetTarifPopUp.firstElementChild.insertAdjacentElement('afterbegin', tricolorInternetTraffic);
    tricolorInternetTarifPopUp.firstElementChild.insertAdjacentElement('afterbegin', tricolorInternetSpeed);
    tricolorInternetTarifPopUp.firstElementChild.insertAdjacentElement('afterbegin', closeCross);
    tricolorInternetTarifPopUp.firstElementChild.insertAdjacentElement('afterbegin', tricolorInternetTarifPrice);
    tricolorInternetTarifPopUp.firstElementChild.insertAdjacentElement('afterbegin', tricolorInternetTarifName);

    tricolorInternetTarifPopUp.firstElementChild.style.width = '100%';

    tricolorInternetTarifPopUp.addEventListener('click', function(event) {
        if (event.target.classList.value === 'tricolor_internet_tarif_pop-up') {
            tricolorInternetTarifPopUp.style.display = 'none';
        }
    });
    
    item.addEventListener('click', function() {
        tricolorInternetTarifPopUp.style.display = 'block';
    });

    closeCross.addEventListener('click', function() {
        closeCross.parentNode.parentNode.style.display = 'none';
    });

});
