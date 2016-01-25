COUNT = 0;
REFRESH = NaN;
function foo()
{
    document.getElementById('display').innerHTML = COUNT % 4;
    COUNT += 1;
}

document.getElementById('bpm').addEventListener('change', startCount);

function startCount(){
    stopCount();
    var bpm_value = document.getElementById('bpm').value;
    // console.log(value);
    REFRESH = setInterval(foo, (60000 / bpm_value));
}

function stopCount(){
   clearInterval(REFRESH);
}
