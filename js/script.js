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
   REFRESH = setInterval(foo, (60000 / this.value));
}

function stopCount(){
   clearInterval(REFRESH);
}
