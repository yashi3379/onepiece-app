import data from '../../../json/character_info.json'
import luffy from '../../../images/onepiece01_luffy.png'
import zoro from '../../../images/onepiece02_zoro_bandana.png'
import nami from '../../../images/onepiece03_nami.png'
import usopp from '../../../images/onepiece04_usopp_sogeking.png'
import sanji from '../../../images/onepiece05_sanji.png'
import chopper from '../../../images/onepiece06_chopper.png'
import robin from '../../../images/onepiece07_robin.png'
import franky from '../../../images/onepiece08_franky.png'
import brook from '../../../images/onepiece09_brook.png'
import jinbe from '../../../images/onepiece10_jinbe.png'
import arlong from '../../../images/onepiece11_arlong.png'
import buggy from '../../../images/onepiece12_buggy.png'
import crocodile from '../../../images/onepiece13_crocodile.png'
import enel from '../../../images/onepiece14_enel.png'
import lucci from '../../../images/onepiece15_lucci.png'
import moria from '../../../images/onepiece16_moria.png'
import doflamingo from '../../../images/onepiece17_doflamingo.png'
import linlin_kaido from '../../../images/onepiece18_linlin_kaido.png'
import kurohige from '../../../images/onepiece19_kurohige_teach2.png'
import star1 from '../../../images/star1.png'
import star2 from '../../../images/star2.png'
import star3 from '../../../images/star3.png'
import star4 from '../../../images/star4.png'
import star5 from '../../../images/star5.png'

//data.charactersのurlを画像に変換
data.characters[0].img = luffy;
data.characters[1].img = zoro;
data.characters[2].img = nami;
data.characters[3].img = usopp;
data.characters[4].img = sanji;
data.characters[5].img = chopper;
data.characters[6].img = robin;
data.characters[7].img = franky;
data.characters[8].img = brook;
data.characters[9].img = jinbe;
data.characters[10].img = arlong;
data.characters[11].img = buggy;
data.characters[12].img = crocodile;
data.characters[13].img = enel;
data.characters[14].img = lucci;
data.characters[15].img = moria;
data.characters[16].img = doflamingo;
data.characters[17].img = linlin_kaido;
data.characters[18].img = kurohige;

//data.charactersの強さをstarを画像に変換
//map関数でdata.characters.strongを取得し、switch文で強さに応じて画像を変換
data.characters.map((character) => {
    switch (character.strong) {
        case '1':
            character.strong = star1;
            break;
        case '2':
            character.strong = star2;
            break;
        case '3':
            character.strong = star3;
            break;
        case '4':
            character.strong = star4;
            break;
        case '5':
            character.strong = star5;
            break;
        default:
            break;
    }
}
)
//luckも同様に変更
data.characters.map((character) => {
    //returnはしない
    switch (character.luck) {
        case '1':
            character.luck = star1;
            break;
        case '2':
            character.luck = star2;
            break;
        case '3':
            character.luck = star3;
            break;
        case '4':
            character.luck = star4;
            break;
        case '5':
            character.luck = star5;
            break;
        default:
            character.luck = star1;
            break;
    }

}
)
//toughtも同様に変更
data.characters.map((character) => {
    switch (character.tought) {
        case "1":
            return character.tought = star1;
        case "2":
            return character.tought = star2;
        case "3":
            return character.tought = star3;
        case "4":
            return character.tought = star4;
        case "5":
            return character.tought = star5;
        default:
            return character.tought = star1;
    }
}
)
//smartも同様に変更
data.characters.map((character) => {
    switch (character.smart) {
        case "1":
            return character.smart = star1;
        case "2":
            return character.smart = star2;
        case "3":
            return character.smart = star3;
        case "4":
            return character.smart = star4;
        case "5":
            return character.smart = star5;
        default:
            return character.smart = star1;
    }
}
)

export const CharaData = data.characters;
