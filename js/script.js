COUNT = 0;
REFRESH = NaN;
AUDIO = new Audio('sound/click.ogg');
AUDIO_ACCENT = new Audio('sound/click-accent.ogg');
PLAYING = false;
ACCENT = true;
function init()
{
    document.getElementById('bpm').value = 0;
}
init();
function foo()
{
    if (COUNT % 4 !== 0 || COUNT == 0)
    {
        document.getElementsByClassName('elem' + COUNT % 4)[0].style.visibility = 'visible';
        if (COUNT%4 == 3 && ACCENT)
        {
            AUDIO_ACCENT.play();
        }
        else
        {
            AUDIO.play();
        }
    }
    else
    {
        var list = document.getElementsByClassName('elem');
        for (var i = 1; i < list.length; i++) {
            list[i].style.visibility = 'hidden';
        }
        AUDIO.play();
    }
    COUNT += 1;
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
    PLAYING = true;
}

function stopCount(){
    clearInterval(REFRESH);
    switchButton('stop');
    var list = document.getElementsByClassName('elem');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = 'hidden';
    }
    COUNT = 0;
    PLAYING = false;
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

document.onkeydown = function(evt) {
    //start stop on space pressed
    if (evt.keyCode == 32) {
        if (PLAYING)
        {
            stopCount();
        }
        else
        {
            startCount();
        }
    }
};

// increment bpm by val
function increment(val){
    var current_value = parseInt(document.getElementById('bpm').value);
    document.getElementById('bpm').value = parseInt(val) + current_value;
    startCount();
}

// decrement bpm by val
function decrement(val)
{
    increment(-val);
}

function switchToggle(elem)
{
    elem.classList.toggle('on');
}

function switchAccent(elem)
{
    switchToggle(elem);
    if (ACCENT)
    {
        ACCENT = false;
    }
    else
    {
        ACCENT = true;
    }
}
