setTimeout(function (){
    var akkcount = document.getElementsByClassName("ne_cont")[0].innerText;
    var i = akkcount - 1;

    var status_uppers = false;
    var injects = document.createElement('div');
    var spans = document.createElement('span');
    var spans2 = document.createElement('span');
    var UpperVersion = document.createElement('span');
    var AllTovarsStatus = document.createElement('span');
    var AllTovarsSum = document.createElement('span');

    var buttons1 = document.createElement('button');
    var buttons2 = document.createElement('button');
    var buttons = document.createElement('button');
    var buttonsSS = document.createElement('button');
    var OpenElementsShop = document.createElement('button');
    var ShadowTheme = document.createElement('button');

    injects.setAttribute('style','font-family: Arial;position: fixed; top: 1.5%; left: 1%; z-index: 999999;background: rgba(0,0,0,0.9);width: 400px; height: 260px;border: 2px solid #00adff;outline: none;border-radius: 1px');
    spans.setAttribute('style','font-family: Arial;position: absolute; top: 11px; left: 24%;font-weight: bold;color: #00c4ff;font-size: 25px;outline: none;');
    spans2.setAttribute('style','font-family: Arial;position: absolute; top: 192px; left: 1%;font-weight: bold;color: white;font-size: 15px;outline: none;');
    buttons.setAttribute('style','font-family: Arial;position: absolute; top: 50px; right: 23%; background-color: black; border-radius: 7px; border: 1px solid #00c4ff;font-size: 20px;color: white;outline: none;padding: 2px 16px');
    buttonsSS.setAttribute('style','font-family: Arial;position: absolute; top: 50px; left: 23%; background-color: black; border-radius: 7px; border: 1px solid #00c4ff;font-size: 20px;color: white;outline: none;padding: 2px 16px');

    AllTovarsSum.setAttribute('style','font-family: Arial;position: absolute; top: 212px; left: 1%;font-weight: bold;color: white;font-size: 15px;outline: none;');
    AllTovarsStatus.setAttribute('style','font-family: Arial;position: absolute; top: 232px; left: 1%;font-weight: bold;color: white;font-size: 15px;outline: none;');
    UpperVersion.setAttribute('style','font-family: Arial;position: absolute; top: 172px; left: 1%;font-weight: bold;color: white;font-size: 15px;outline: none;');

    OpenElementsShop.setAttribute('style','font-family: Arial;position: absolute; top: 90px; left: 17%; background-color: black; border-radius: 7px; border: 1px solid #00c4ff;font-size: 20px;color: white;outline: none;padding: 2px 16px');
    ShadowTheme.setAttribute('style','font-family: Arial;position: absolute; top: 130px; left: 13%; background-color: black; border-radius: 7px; border: 1px solid #00c4ff;font-size: 20px;color: white;outline: none;padding: 2px 16px');

    buttons.id = "Starts";
    buttonsSS.id = "Stops";
    spans2.id = "StatusUpper";
    UpperVersion.id = "UpperVersionId";
    OpenElementsShop.id = "OpenElementsShopMore";
    AllTovarsStatus.id = "AllTovarsStatusId";
    AllTovarsSum.id = "AllTovarsSumId";
    ShadowTheme.id = "ShadowThemeId";

    spans.innerHTML = "CMJumper <span style='font-size: 8px; padding-top: -12%'>(heallytop upper)</span>";
    buttons.innerHTML = "СТАРТ";
    buttonsSS.innerHTML = "СТОП";
    spans2.innerHTML = "Статус: <font color=red>Остановлен</font>";
    UpperVersion.innerHTML = "Версия аппера: <font color=#00c4ff>0.0.2a</font>";
    OpenElementsShop.innerHTML = "ОТКРЫТЬ ВСЕ ТОВАРЫ";
    AllTovarsStatus.innerHTML = "<font color=red>Внимание! Откройте все товары!</font>";
    AllTovarsSum.innerHTML = "Товаров на сумму: <font color=red>Откройте все товары!</font>";
    ShadowTheme.innerHTML = "ВКЛЮЧИТЬ ТЁМНУЮ ТЕМУ";

    document.documentElement.appendChild(spans);
    document.documentElement.appendChild(spans2);
    document.documentElement.appendChild(UpperVersion);
    document.documentElement.appendChild(OpenElementsShop);
    document.documentElement.appendChild(buttons);
    document.documentElement.appendChild(buttonsSS);
    document.documentElement.appendChild(AllTovarsStatus);
    document.documentElement.appendChild(AllTovarsSum);
    document.documentElement.appendChild(ShadowTheme);
    injects.appendChild(spans);
    injects.appendChild(spans2);
    injects.appendChild(UpperVersion);
    injects.appendChild(OpenElementsShop);
    injects.appendChild(buttons);
    injects.appendChild(buttonsSS);
    injects.appendChild(AllTovarsStatus);
    injects.appendChild(AllTovarsSum);
    injects.appendChild(ShadowTheme);
    document.documentElement.appendChild(injects);

    function ShadowThemeOn(){
        //DESIGN
        //Body
        document.getElementsByClassName("shop-module")[0].style.background="linear-gradient(to top, rgb(0, 0, 0), rgb(60, 60, 60)) black";
        document.getElementsByClassName("header")[0].style.background="url(https://i.imgur.com/XHjiagp.png) no-repeat center bottom";
        //
        document.getElementsByClassName("solidblockmenu")[0].style.borderBottom="2px solid #757575";
        document.getElementsByClassName("solidblockmenu")[0].style.borderTop="2px solid #757575";
        document.getElementsByClassName("solidblockmenu")[0].style.background="linear-gradient(to top, #000000, #3c3c3c) black";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[0].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[1].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[2].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[3].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[4].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[5].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[6].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[7].children[0].style.color="#00c4ff";
        document.getElementsByClassName("solidblockmenu")[0].children[1].children[8].children[0].style.color="#00c4ff";

        //path
        document.getElementsByClassName("path")[0].children[0].children[0].children[0].children[0].style.color="#00adff";
        document.getElementsByClassName("path")[0].children[0].children[0].children[0].children[0].style.textShadow="0 0 0 black";
        document.getElementsByClassName("path")[0].children[0].children[1].children[0].children[0].style.color="#00adff";
        document.getElementsByClassName("path")[0].children[0].children[1].children[0].children[0].style.textShadow="0 0 0 black";
        document.getElementsByClassName("path")[0].children[0].children[2].children[0].children[0].style.color="#00adff";
        document.getElementsByClassName("path")[0].children[0].children[2].children[0].children[0].style.textShadow="0 0 0 black";
        document.getElementsByClassName("path")[0].children[0].children[3].children[0].children[0].style.color="#00adff";
        document.getElementsByClassName("path")[0].children[0].children[3].children[0].children[0].style.textShadow="0 0 0 black";

        //add-link
        document.getElementsByClassName("add-link")[0].style.color="#00adff";
        document.getElementsByClassName("add-link")[0].style.textShadow="0 0 0 black";

        //profile-design
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].style.textAlign="left";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[1].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[1].children[0].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[3].children[0].children[0].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[3].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[3].children[0].children[0].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[5].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[5].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[5].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[7].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[7].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[7].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[8].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[8].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[8].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[10].children[0].children[0].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[10].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[10].children[0].children[0].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[11].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[11].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[11].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[14].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[14].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[14].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[16].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[16].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[16].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[18].children[0].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[18].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[18].children[0].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[20].children[0].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[20].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[20].children[0].style.textShadow="0 0 0 black";

        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[21].children[0].style.color="#00adff";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[21].children[0].style.fontSize="11px";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[21].children[0].style.textAlign="left";
        document.getElementsByClassName("profil")[0].children[0].children[0].children[1].children[0].children[0].children[1].children[21].children[0].style.textShadow="0 0 0 black";

        //blockmenu design
        document.getElementsByClassName("blockmenu")[0].children[0].children[0].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[0].children[0].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[0].children[0].style.fontSize="11px";
        document.getElementsByClassName("blockmenu")[0].children[1].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[1].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[1].style.fontSize="11px";
        document.getElementsByClassName("blockmenu")[0].children[2].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[2].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[2].style.fontSize="11px";
        document.getElementsByClassName("blockmenu")[0].children[3].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[3].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[3].style.fontSize="11px";
        document.getElementsByClassName("blockmenu")[0].children[4].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[4].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[4].style.fontSize="11px";
        document.getElementsByClassName("blockmenu")[0].children[5].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[5].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[5].style.fontSize="11px";
        document.getElementsByClassName("blockmenu")[0].children[6].style.color="#3387af";
        document.getElementsByClassName("blockmenu")[0].children[6].style.fontWeight="bold";
        document.getElementsByClassName("blockmenu")[0].children[6].style.fontSize="11px";

        //cont
        document.getElementsByClassName("cont")[0].children[0].style.color="#00adff";

        //profile_img
        document.getElementsByClassName("cat-descr")[0].children[0].style.boxShadow="0 0 12px black";
        //DESIGN
    }

    var StartBut = document.getElementById('Starts');
    var StopBut = document.getElementById('Stops');
    var StatusUpper = document.getElementById('StatusUpper');
    var ButtonMoreShop = document.getElementById('OpenElementsShopMore');
    var SpanTovarStatus = document.getElementById('AllTovarsStatusId');
    var SpanTovarsSum = document.getElementById('AllTovarsSumId');
    var ButtonShadowTheme = document.getElementById('ShadowThemeId');

    function LoadSumsTovar(){
        var els = document.getElementsByTagName('span');
        var result = 0;
        for (var i = 0; i < els.length; i++) {
            var text = els[i].className;
            if (text.startsWith("id-good-")) {
                result = result + Number(Number(document.getElementsByClassName(text)[0].innerHTML.replace(/\D+/g,"")).toString().slice(0,-2));
            }
        }
        SpanTovarsSum.innerHTML = "Товаров на сумму: <font color=#00adff>"+result+"</font> руб."
    }
    ButtonShadowTheme.onclick = function (){
        ShadowThemeOn();
    }
    ButtonMoreShop.onclick = function (){
        var ShowMoreElement = document.getElementById("shop-page-more").children[0];
        function OpenElements(){
            if(document.getElementById("shop-page-more").style.cssText == "display: none;"){
                clearInterval(intervalOpen);
                SpanTovarStatus.innerHTML = "<font color=#00adff>Все товары открыты!</font>"
                LoadSumsTovar();
            }
            else{
                ShowMoreElement.click();
                SpanTovarStatus.innerHTML = "<font color=yellow>Товары открываются...</font>";
                SpanTovarsSum.innerHTML = "Товаров на сумму: <font color=yellow>Считаю...</font>";
            }
        }
        var intervalOpen=setInterval(OpenElements,250);
    }

    StartBut.onclick = function (){
        status_uppers = true;
        StatusUpper.innerHTML = "Статус: <font color=lime>Запущен</font>";
        setInterval(function (){
            if(i < 0) return false;
            if(status_uppers == false) return false;
            var divs = document.getElementsByClassName("u-mpanel-quickup")[i].getElementsByTagName("a").item(0);
            divs.onclick();
            console.log(divs);
            i = i - 1;
        }, 1500);
    }

    StopBut.onclick = function (){
        StatusUpper.innerHTML = "Статус: <font color=red>Остановлен</font>";
        status_uppers = false;
    }
},1500);
