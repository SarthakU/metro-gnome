COUNT = 0;
REFRESH = NaN;
AUDIO = new Audio('sound/click.ogg');
function foo()
{
    if (COUNT % 4 !== 0 || COUNT == 0)
    {
        document.getElementsByClassName('elem' + COUNT % 4)[0].style.visibility = 'visible';
    }
    else
    {
        var list = document.getElementsByClassName('elem');
        for (var i = 1; i < list.length; i++) {
            list[i].style.visibility = 'hidden';
        }
    }
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
    var list = document.getElementsByClassName('elem');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = 'hidden';
    }
    COUNT = 0;
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



