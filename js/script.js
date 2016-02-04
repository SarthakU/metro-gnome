COUNT = 0;
REFRESH = NaN;
AUDIO = new Audio('sound/click.ogg');
function foo()
{
    document.getElementById('display').innerHTML = COUNT % 4;
    COUNT += 1;
    AUDIO.play();
}
function sanityCheckVal(val)
{
    if (val < 0)
    {
        alert("please enter a valid number");
        return false;
    }
    else if (val == 0)
    {
        alert("You shall die and burn !!");
        return true;
    }
    return true;
}
function hideElem(elem_class)
{
    document.getElementsByClassName(elem_class)[0].style.display = 'none';
}
function showElem(elem_class)
{
    document.getElementsByClassName(elem_class)[0].style.display = 'inline-block';
}

function startCount(){
    stopCount();
    var bpm_value = document.getElementById('bpm').value;
    if (!sanityCheckVal(bpm_value))
    {
        return;
    }
    REFRESH = setInterval(foo, (60000 / bpm_value));
    switchButton('start');
}

function stopCount(){
    clearInterval(REFRESH);
    switchButton('stop');
}

function switchButton(btn){
    if (btn == 'start')
    {
        hideElem(btn);
        showElem('stop');
    }
    else
    {
        hideElem(btn);
        showElem('start');
    }
}



