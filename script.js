const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MAN2 = document.getElementById('man2');
const MET = document.getElementById('met');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    
    if (document.getElementById('peso').value>30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        FLU.innerHTML = flujo+ ' cc';
        flujo= res1;
        let flujo2= res2;
        let mantenimiento = flujo/24
        let mantenimiento2 = (flujo/24)*1.5;
        let mantenimiento3 = flujo2/24
        let mantenimiento4 = (flujo2/24)*1.5;
        MAN.innerHTML = parseInt(mantenimiento)+ ' o '+parseInt(mantenimiento2)+ ' cc/hr';
        MAN2.innerHTML = 'm+m/2 ' + parseInt(mantenimiento3) + ' o '+parseInt(mantenimiento4)+ ' cc/hr';
        MET.innerHTML= 'Método SC';
        FLU.style.display = 'block';
        MET.style.display = 'block';
        MAN.style.display = 'block';
        MAN2.style.display = 'block';
        
    }else if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo/24
        let mantenimiento2 = (flujo/24)*1.5;
        FLU.innerHTML = flujo + ' cc';
        MAN.innerHTML = parseInt(mantenimiento)+ ' cc/hr';
        MAN2.innerHTML = 'm+m/2 ' + parseInt(mantenimiento2) + ' cc/hr';
        MET.innerHTML= 'Método Holliday-Segar'
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MAN2.style.display = 'block';
        MET.style.display = 'block';
    } 
    else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MAN2.style.display = 'none';
        MET.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;

    if (resto>0 && resto<=10){
        flujo=resto*100;
    }
    else if (resto>10 && resto<=20){
        flujo=((resto - 10) * 50) + 1000;
    }
    else if (resto>20 && resto<=30){
        flujo=((resto - 20) * 20) + 1500;
    }
    else{
        supCorp = (resto * 4)+ 7 
        supCorp = supCorp / (parseInt(resto) + 90);
        globalThis.res1 = supCorp * 1500;
        globalThis.res2 = supCorp * 2000; 
        flujo= parseInt(res1)+ ' o ' +parseInt(res2)
    }
    return flujo
}










