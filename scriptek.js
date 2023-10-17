//figyelmeztetes, ha az FMU idopont 15 napon beluli
$("#FMU").datepicker({
    onSelect: function () {
        date_diff_alert();
        fmu_modositas_hatarido();
    }
});

function date_diff_alert() {
    //date parametert atalakitani szamma  
    var current_date = $("#ALAPADATOK_IDOPECSET").datepicker("getDate");
    var goal_date = $("#FMU").datepicker("getDate");
    var days_diff = Math.round((goal_date - current_date) / (1000 * 60 * 60 * 24));
    // ellenorzes hogy a jellenlegi datum es a valasztott datum kozotti kulombseg kevesebb  mint 15
    if (days_diff <= 15 && 0 < days_diff) {
        alert ("A megadott FMU dátum jellenlegi naptári dátumhoz képest 15 napon belül van.");
    } 
}

function fmu_modositas_hatarido() {
    var base_date = $("#FMU").datepicker("getDate"); // Get the selected date from the datepicker
    var increased_date = new Date(base_date.getTime() + (24 * 60 * 60 * 1000)); // Add one day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    $("#FMU_PLUS_ONE_DAY").datepicker("setDate", increased_date);
}

//hiba uzenet dobasa, ha a terulet felelos nem adott meg tar linket illetve nem is pipalta a beruhazasra kuldest
$(function () {
    $("#DECISION").click(function () {
        if ($("#C_ALAP_TERV_LINK").val() === '' && !$("#HIANY_TERV").prop("checked")) {
            alert ("Nincs sharpoint tár link megadva! Ha nincs tár, akkor ki kell pipálni a Terv hiánypótlást!");
        }
    });
});



//Hianypotlasi panel elrejtese ha nincs ra szukseg
if (!$("#HIANY_TERV").attr("checked")) $("#TERV_HIANYPOTLAS").hide();

$(function () {
    $("#REGIO").change(function () {

        var selectedValue=$("#REGIO").val();
        
        switch(selectedValue) {
            case "1" :
                $("#REGIO_NEV").val("Szeged");
                $("#TELEPULES_LISTA").empty();
                var selectedTelepulesek = {
                    0: "-Válasszon Települést-",
                    1: "Algyő",
                    2: "Apátfalva",
                    3: "Ásotthalom",
                    4: "Baks",
                    5: "Balástya",
                    6: "Bordány",
                    7: "Csanádpalota",
                    8: "Csanytelek",
                    9: "Csengele",
                    10: "Csólyospálos",
                    11: "Csongrád",
                    12: "Derekegyház",
                    13: "Deszk",
                    14: "Dóc",
                    15: "Domaszék",
                    16: "Eperjes",
                    17: "Fábiánsebestyén",
                    18: "Felgyő",
                    19: "Ferencszállás",
                    20: "Forráskút",
                    21: "Földeák",
                    22: "Hódmezővásárhely",
                    23: "Királyhegyes",
                    24: "Kistelek",
                    25: "Kiszombor",
                    26: "Klárafalva",
                    27: "Kömpöc",
                    28: "Kövegy",
                    29: "Kübekháza",
                    30: "Magyarcsanád",
                    31: "Makó",
                    32: "Maroslele",
                    33: "Mártély",
                    34: "Mindszent",
                    35: "Mórahalom",
                    36: "Nagylak",
                    37: "Nagymágocs",
                    38: "Nagytőke",
                    39: "Óföldeák",
                    40: "Ópusztaszer",
                    41: "Öttömös",
                    42: "Pusztamérges",
                    43: "Pusztaszer",
                    44: "Röszke",
                    45: "Ruzsa",
                    46: "Sándorfalva",
                    47: "Szatymaz",
                    48: "Szeged",
                    49: "Szegvár",
                    50: "Székkutas",
                    51: "Szentes",
                    52: "Tiszasziget",
                    53: "Tömörkény",
                    54: "Újszentiván",
                    55: "Üllés",
                    56: "Zákányszék",
                    57: "Zsombó",
                    58: "Egyéb, megjegyzésben megadva"
                    };
                var selectOption =  $("#TELEPULES_LISTA");
                $.each(selectedTelepulesek, function (val, text) {
                    selectOption.append(
                        $('<option></option>').val(val).html(text)
                    );
                    $(function () { 
                        $("#TELEPULES_LISTA").change(function () {
                            var selectedText = $(this).find(":selected").text();
                            $("#TELEPULES").val(selectedText);
                        });
                    });
                });
                break;
            case "2" :
                $("#REGIO_NEV").val("Baja");
                $("#TELEPULES_LISTA").empty();
                var selectedTelepulesek = {
                    0: "-Válasszon Települést-",
                    1: "Akasztó",
                    2: "Bácsalmási",
                    3: "Bácsbokod",
                    4: "Bácsborsód",
                    5: "Bácsszentgyörgy",
                    6: "Bácsszőlős",
                    7: "Baja",
                    8: "Balotaszállás",
                    9: "Bátmonostor",
                    10: "Bátya",
                    11: "Bócsa",
                    12: "Borota",
                    13: "Császártöltés",
                    14: "Csátalja",
                    15: "Csávoly",
                    16: "Csengőd",
                    17: "Csikéria",
                    18: "Dávod",
                    19: "Drágszél",
                    20: "Dunafalva",
                    21: "Dunapataj",
                    22: "Dunaszentbenedek",
                    23: "Dusnok",
                    24: "Érsekcsanád",
                    25: "Érsekhalma",
                    26: "Fajsz",
                    27: "Felsőszentiván",
                    28: "Foktő",
                    29: "Gara",
                    30: "Géderlak",
                    31: "Hajós",
                    32: "Harkakötöny",
                    33: "Harta",
                    34: "Hercegszántó",
                    35: "Homokmégy",
                    36: "Homorúd",
                    37: "Imrehegy",
                    38: "Jánoshalma",
                    39: "Kalocsa",
                    40: "Kaskantyú",
                    41: "Katymár",
                    42: "Kecel",
                    43: "Kelebia",
                    44: "Kéleshalom",
                    45: "Kiskőrös",
                    46: "Kiskunhalas",
                    47: "Kiskunmajsa",
                    48: "Kisszállás",
                    49: "Kunbaja",
                    50: "Kunfehértó",
                    51: "Madaras",
                    52: "Mátételke",
                    53: "Mélykút",
                    54: "Miske",
                    55: "Mohács",
                    56: "Móricgát",
                    57: "Nagybaracska",
                    58: "Nemesnádudvar",
                    59: "Ordas",
                    60: "Öregcsertő",
                    61: "Páhi",
                    62: "Pirtó",
                    63: "Rém",
                    64: "Soltvadkert",
                    65: "Sükösd",
                    66: "Szakmár",
                    67: "Szank",
                    68: "Szeremle",
                    69: "Tabdi",
                    70: "Tataháza",
                    71: "Tázlár",
                    72: "Tompa",
                    73: "Újtelek",
                    74: "Uszód",
                    75: "Vaskút",
                    76: "Zsana",
                    77: "Egyéb, megjegyzésben megadva"
                    };
                var selectOption =  $("#TELEPULES_LISTA");
                $.each(selectedTelepulesek, function (val, text) {
                    selectOption.append(
                        $('<option></option>').val(val).html(text)                        
                    );
                    $(function () { 
                        $("#TELEPULES_LISTA").change(function () {
                            var selectedText = $(this).find(":selected").text();
                            $("#TELEPULES").val(selectedText);
                        });
                    });
                });
                break;
            case "3" :
                $("#REGIO_NEV").val("Békéscsaba");
                $("#TELEPULES_LISTA").empty();
                var selectedTelepulesek = {
                    0: "-Válasszon Települést-",
                    1: "Almáskamarás",
                    2: "Ambrózfalva",
                    3: "Árpádhalom",
                    4: "Battonya",
                    5: "Békés",
                    6: "Békéscsaba",
                    7: "Békéssámson",
                    8: "Bélmegyer",
                    9: "Csabaszabadi",
                    10: "Csanádalberti",
                    11: "Csanádapáca",
                    12: "Csárdaszállás",
                    13: "Csorvás",
                    14: "Doboz",
                    15: "Dombegyház",
                    16: "Dombiratos",
                    17: "Elek",
                    18: "Gádoros",
                    19: "Gerendás",
                    20: "Geszt",
                    21: "Gyomaendrőd",
                    22: "Gyömrő",
                    23: "Gyula",
                    24: "Hunya",
                    25: "Kamut",
                    26: "Kardos",
                    27: "Kardoskút",
                    28: "Kaszaper",
                    29: "Kétegyháza",
                    30: "Kétsoprony",
                    31: "Kevermes",
                    32: "Kisdombegyház",
                    33: "Kondoros",
                    34: "Körösladány",
                    35: "Köröstarcsa",
                    36: "Kötegyán",
                    37: "Kunágota",
                    38: "Lökösháza",
                    39: "Magyarbánhegyes",
                    40: "Magyardombegyház",
                    41: "Medgyesbodzás",
                    42: "Medgyesegyháza",
                    43: "Méhkerék",
                    44: "Mezőberény",
                    45: "Mezőgyán",
                    46: "Mezőhegyes",
                    47: "Mezőkovácsháza",
                    48: "Murony",
                    49: "Nagybánhegyes",
                    50: "Nagyér",
                    51: "Nagykamarás",
                    52: "Nagyszénás",
                    53: "Okány",
                    54: "Orosháza",
                    55: "Örménykút",
                    56: "Pitvaros",
                    57: "Pusztaföldvár",
                    58: "Pusztaottlaka",
                    59: "Sarkad",
                    60: "Sarkadkeresztúr",
                    61: "Szabadkígyós",
                    62: "Szeghalom",
                    63: "Tarhos",
                    64: "Telekgerendás",
                    65: "Tótkomlós",
                    66: "Újkígyós",
                    67: "Újszalonta",
                    68: "Végegyháza",
                    69: "Zsadány",
                    70: "Egyéb, megjegyzésben megadva"
                    };
                var selectOption =  $("#TELEPULES_LISTA");
                $.each(selectedTelepulesek, function (val, text) {
                    selectOption.append(
                        $('<option></option>').val(val).html(text)
                    );
                    $(function () { 
                        $("#TELEPULES_LISTA").change(function () {
                            var selectedText = $(this).find(":selected").text();
                            $("#TELEPULES").val(selectedText);
                        });
                    });
                });
                break;
            case "4" :
                $("#REGIO_NEV").val("Kecskemét");
                $("#TELEPULES_LISTA").empty();
                var selectedTelepulesek = {
                    0: "-Válasszon Települést-",
                    1: "Ágasegyháza",
                    2: "Albertirsa",
                    3: "Apostag",
                    4: "Ballószög",
                    5: "Bugac",
                    6: "Bugacpusztaháza",
                    7: "Cegléd",
                    8: "Ceglédbercel",
                    9: "Csemő",
                    10: "Csévharaszt",
                    11: "Dánszentmiklós",
                    12: "Dunaegyháza",
                    13: "Dunatetétlen",
                    14: "Dunavecse",
                    15: "Felsőlajos",
                    16: "Fülöpháza",
                    17: "Fülöpjakab",
                    18: "Fülöpszállás",
                    19: "Gátér",
                    20: "Helvécia",
                    21: "Hernád",
                    22: "Izsák",
                    23: "Jakabszállás",
                    24: "Jászszentlászló",
                    25: "Kecskemét",
                    26: "Kerekegyháza",
                    27: "Kiskunfélegyháza",
                    28: "Kocsér",
                    29: "Kunadacs",
                    30: "Kunbaracs",
                    31: "Kunpeszér",
                    32: "Kunszállás",
                    33: "Kunszentmiklós",
                    34: "Ladánybene",
                    35: "Lajosmizse",
                    36: "Lakitelek",
                    37: "Mikebuda",
                    38: "Monor",
                    39: "Nagykőrös",
                    40: "Nyáregyháza",
                    41: "Nyárlőrinc",
                    42: "Nyársapát",
                    43: "Orgovány",
                    44: "Örkény",
                    45: "Pálmonostora",
                    46: "Péteri",
                    47: "Petőfiszállás",
                    48: "Pilis",
                    49: "Pusztavacs",
                    50: "Solt",
                    51: "Soltszentimre",
                    52: "Szabadszállás",
                    53: "Szalkszentmárton",
                    54: "Szentkirály",
                    55: "Táborfalva",
                    56: "Tápiószőlős",
                    57: "Tass",
                    58: "Tatárszentgyörgy",
                    59: "Tiszaalpár",
                    60: "Tiszasas",
                    61: "Tiszaug",
                    62: "Törtel",
                    63: "Újlengyel",
                    64: "Újsolt",
                    65: "Újszilvás",
                    66: "Városföld",
                    67: "Vasad",
                    68: "Egyéb, megjegyzésben megadva"
                    };

                var selectOption =  $("#TELEPULES_LISTA");
                $.each(selectedTelepulesek, function (val, text) {    
                    selectOption.append(
                        $('<option></option>').val(val).html(text)
                    );
                    $(function () { 
                        $("#TELEPULES_LISTA").change(function () {
                            var selectedText = $(this).find(":selected").text();
                            $("#TELEPULES").val(selectedText);
                        });
                    });
                });    
                break;
            default:
                $("#REGIO_NEV").val("Üres");
                $("#TELEPULES_LISTA").empty();
                var selectedTelepulesek = {1: "-Válasszon Régiót-"}
                var selectOption =  $("#TELEPULES_LISTA");
                $.each(selectedTelepulesek, function (val, text) {
                    selectOption.append(
                        $('<option></option>').val(val).html(text)
                    );
                });
                break;
        }       
    });
});

$("#REGIO_NEV").hide();
$("#TELEPULES").hide();
$("#FMU_PLUS_ONE_DAY").slideUp();
$("#FMU_PLUS_ONE_DAY_DelDate").slideUp();



//----------------------------------------------------------------------------------------


var href_value; // váltózó meg adása, link érték mentésére
//Ha Terület felelős adott meg linket, akkor a szövegdobozos link és a kattintható link értéke is legyen azonos 
//a terület felelős által megadott linkkel
if (!$("#C_ALAP_TERV_LINK").val()=="") {
    href_value=$("#C_ALAP_TERV_LINK").val();
    $("#C_TERV_TAR_LINK_PONTOS_KATTINTHATO").attr("href", href_value);
}
//Ha nincs át adott link akkor a Beruházás által megadott link legyen érvényben
else {
    href_value=$("#C_TERV_TAR_LINK_PONTOS").val();
    $("#C_TERV_TAR_LINK_PONTOS_KATTINTHATO").attr("href", href_value);
}


//----------------------------------------------------------------------------------------


//Logika azonos a beruházás tárlink scripttel
var href_value;
if (!$("#C_ALAP_TERV_LINK").val()=="") {
    href_value=$("#C_ALAP_TERV_LINK").val();
    $("#C_TERV_ATVET_LINK_ATVET").attr("href", href_value);
}
else {
    href_value=$("#C_TERV_TAR_LINK_PONTOS").val();
    $("#C_TERV_ATVET_LINK_ATVET").attr("href", href_value);
}


//----------------------------------------------------------------------------------------


$(function () {
    $("#DECISION").click(function () {
        if ($.isEmptyObject($("#FMU_VALT_DATUM").val()) && $("#DECISION_FMU_LEMO_TOVABB").attr("checked")) {
            alert ("Az FMU módosítás véglegesítésséhez új vég FMU dátum megadása kötelező!");
        }
        if (!$.isEmptyObject($("#FMU_VALT_DATUM").val()) && $("#DECISION_VEGE").attr("checked")) {
            alert ("Új FMU dátom megadásra került!\n Ha FMU módosításra nincs szükség, akkor az Új vég FMU időpont dátum mező maradjon üres!");
        }
        if (!$.isEmptyObject($("#FMU_VALT_DATUM").val()) && $("#DECISION_FMU_LEMO_MENTES").attr("checked")) {
            alert ("Új FMU dátom megadásra került!\n Ha már tudjuk az új vég FMU időpontot, akkor a FMU modosítás véglegesítése, új időponttal lehetőséget válasszuk!");
        }
    });
});



//----------------------------------------------------------------------------------------


//Ha nincs szükség akadályközlésre, akkor ne legyen látható az akadály közlő panel.
if (!$("#AKADALY_SZOKS").attr("checked")) {
    $("#AKADALYKOZLES").hide();
}

var fmu_mod_veg_terf = $("#C_TERV_FMU_VALT_NEV").val();

if (fmu_mod_veg_terf === "") {
    $("#FMU_LEMONDASA").hide();
}



//----------------------------------------------------------------------------------------



//funkció, ha a "Fentiek kívüli egyéb ok (Megjegyzésben részletezés)" menüpont van kiválasztva és 
//nince megjegyzés írva -> hibaüzenet legyen popup ablakban figyelmeztetés céllal
$(function () {
    $("#DECISION").click(function () {
        if ($("#C_TERV_AKAD_OK_6").attr("checked") && $("#AKADALY_MEGJ").val()==="") {
            alert ("Egyéb akdálynál kötelező megjegyzést írni!");
        }
    });
});




$(function () {
    $("#C_TERV_AKAD_OK").change(function () {
        var selectedValue=$("#C_TERV_AKAD_OK").val();
        switch(selectedValue) {
            case "1" :
                $("#C_TERV_AKAD_OK_NEV").val("Műszaki ellentmondás");
                break;
            case "2" :
                $("#C_TERV_AKAD_OK_NEV").val("Idegen hálózatot érintő, további egyeztetés szükséges");
                break;
            case "3" :
                $("#C_TERV_AKAD_OK_NEV").val("FMU dátum Területi felelős által jelzett módosulása");
                break;
            case "4" :
                $("#C_TERV_AKAD_OK_NEV").val("Foglalásból adódó");
                break;
            case "5" :
                $("#C_TERV_AKAD_OK_NEV").val("KÁ - állomás belső (egyvonalas kapcsolási rajz) hiánya");
                break;
            case "6" :
                $("#C_TERV_AKAD_OK_NEV").val("Fentiek kívüli egyéb ok (Megjegyzésben részletezés)");
                break;
        }
    });
});
$("#C_TERV_AKAD_OK_NEV").hide();


//----------------------------------------------------------------------------------------


//Ha a postazast varakoztatni akarjuk, akkor alert legyen dobva, hog kell megjegyzes, hogy miert
$(function () {
    $("#DECISION").click(function () {
        if ($("#DECISION_C_TERV_POST_MENTES").attr("checked") && $("#C_TERV_POST_MEGJ").val()==="") {
            alert ("C-terv Postázás várakoztatásánál kötelező megjegyzést adni!");
        }
    });
});


//----------------------------------------------------------------------------------------


$(function () {
    $("#PROJEKTMEN").change(function () {
        var selectedValue=$("#PROJEKTMEN").val();
        switch(selectedValue) {
            case "1" :
                $("#PROJEKTMEN_ERTEK").val("Benkő László");
                break;
            case "2" :
                $("#PROJEKTMEN_ERTEK").val("Bognár István");
                break;
            case "3" :
                $("#PROJEKTMEN_ERTEK").val("Bognár József");
                break;
            case "4" :
                $("#PROJEKTMEN_ERTEK").val("Galambos Gábor");
                break;
            case "5" :
                $("#PROJEKTMEN_ERTEK").val("Gondos Tibor");
                break;
            case "6" :
                $("#PROJEKTMEN_ERTEK").val("Gyémánt István");
                break;
            case "7" :
                $("#PROJEKTMEN_ERTEK").val("Lovák Zoltán");
                break;
            case "8" :
                $("#PROJEKTMEN_ERTEK").val("Márton Zoltán");
                break;
            case "9" :
                $("#PROJEKTMEN_ERTEK").val("Németh Gyula");
                break;
            case "10" :
                $("#PROJEKTMEN_ERTEK").val("Nincsevics Zoltán");
                break;
            case "11" :
                $("#PROJEKTMEN_ERTEK").val("Oláh Mihály");
                break;
            case "12" :
                $("#PROJEKTMEN_ERTEK").val("Olajos Mihály");
                break;
            case "13" :
                $("#PROJEKTMEN_ERTEK").val("Prjevara Viktor");
                break;
            case "14" :
                $("#PROJEKTMEN_ERTEK").val("Szkalisity József");
                break;
            case "15" :
                $("#PROJEKTMEN_ERTEK").val("Szőke Tibor");
                break;
            case "16" :
                $("#PROJEKTMEN_ERTEK").val("Tánczos Gábor");
                break;
            case "17" :
                $("#PROJEKTMEN_ERTEK").val("Wolf Ferenc");
                break;
            case "18" :
                $("#PROJEKTMEN_ERTEK").val("Zombori Lajos");
                break;
            case "19" :
                $("#PROJEKTMEN_ERTEK").val("Zsiga András");
                break;
            default:
                $("#PROJEKTMEN_ERTEK").val("Üres");
                break;
        }
    });
});
$("#PROJEKTMEN_ERTEK").hide();


//----------------------------------------------------------------------------------------


//Ha nincs szükség akadályközlésre, akkor ne legyen látható a panel
if (!$("#D_AKADALY_SZUKS").attr("checked")) {
    $("#AKADALYKOZLES_DTERV").hide();
}


//----------------------------------------------------------------------------------------


//funkció, ha a "Fentieken kívüli egyéb ok (Megjegyzésben részletezés)" menüpont van kiválasztva és 
//nince megjegyzés írva -> hibaüzenet legyen popup ablakban figyelmeztetés céllal
$(function () {
    $("#DECISION").click(function () {
        if ($("#D_AKAD_OKAI_5").attr("checked") && $("#D_TERV_AKADALY_MEGJ").val()==="") {
            alert ("Egyéb ok akdálynál kötelező megjegyzést írni!");
        }
    });
});





$(function () {
    $("#D_AKAD_OKAI").change(function () {
        var selectedValue=$("#D_AKAD_OKAI").val();
        switch(selectedValue) {
            case "1" :
                $("#D_AKAD_OKAI_NEV").val("Műszaki ellentmondás");
                break;
            case "2" :
                $("#D_AKAD_OKAI_NEV").val("Idegen hálózatot érintő, további egyeztetés szükséges");
                break;           
            case "3" :
                $("#D_AKAD_OKAI_NEV").val("Foglalásból adódó");
                break;
            case "4" :
                $("#D_AKAD_OKAI_NEV").val("KÁ - állomás belső (egyvonalas kapcsolási rajz) hiánya");
                break;
            case "5" :
                $("#D_AKAD_OKAI_NEV").val("Fentiek kívüli egyéb ok (Megjegyzésben részletezés)");
                break;
        }
    });
});
$("#D_AKAD_OKAI_NEV").hide();


//----------------------------------------------------------------------------------------


//funkció, ha a "Fentieken kívüli egyéb ok (Megjegyzésben részletezés)" menüpont van kiválasztva és 
//nince megjegyzés írva -> hibaüzenet legyen popup ablakban figyelmeztetés céllal
$(function () {
    $("#DECISION").click(function () {
        if ($("#NYILV_ELL_HELYSZ_HIBA_0").attr("checked") && $("#NYILV_ELL_HELYSZ_MEGJ").val()==="") {
            alert ("Ha a nyílvántartás pontosítására van szükség, akkor kötelező megjegyzést adni!");
        }
    });
});



//----------------------------------------------------------------------------------------


var nyilv_jav_nev = $("#HELYSZ_ELL_JAV_NEV").val();
var helysz_ell_nev= $("#NYILV_ELL_HELYSZ_NEV").val();

if (helysz_ell_nev === "") {
    $("#NYILV_ELL_HELYSZ").hide();
} 
if (nyilv_jav_nev === "") {
    $("#HELYSZ_ELL_JAV").hide();
} 