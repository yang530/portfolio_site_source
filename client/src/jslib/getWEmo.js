//generate a emoji based on weather code given
function getWEmo(wCode){
    //               0      1      2     3     4      5      6    7      8     9
    const emojis = ["☀️", "🌤️", "🌫️", "❄️", "☁️", "🌩️", "🌨️", "🌧️", "⛈️", "❓"];

    if(wCode >= 0 && wCode <= 2){
        return emojis[0];
    }else if(wCode == 3){
        return emojis[1];
    }else if(wCode >= 4 && wCode <= 10){
        return emojis[2];
    }else if(wCode == 11 || wCode == 12){
        return emojis[3];
    }else if(wCode == 13 || wCode == 17){
        return emojis[5];
    }else if(wCode >= 14 && wCode <= 16 ){
        return emojis[4];
    }else if(wCode == 18 && wCode == 19){
        return emojis[4];
    }else if(wCode >= 20 && wCode <= 22){
        return emojis[7];
    }else if(wCode == 23 || wCode == 24 || wCode == 26 || wCode == 27){
        return (emojis[6]+emojis[7]);
    }else if(wCode == 25){
        return emojis[7];
    }else if(wCode == 28){
        return emojis[2];
    }else if(wCode == 29){
        return emojis[5];
    }else if(wCode >= 30 && wCode <= 35){
        return emojis[2];
    }else if(wCode >= 36 && wCode <= 39){
        return emojis[6];
    }else if(wCode >= 40 && wCode <= 47){
        return emojis[2]+emojis[3];
    }else if(wCode == 48 || wCode == 49){
        return emojis[2];
    }else if(wCode >= 50 && wCode <= 55){
        return emojis[7];
    }else if(wCode == 56 || wCode == 57){
        return emojis[7]+emojis[3];
    }else if(wCode >= 58 && wCode <= 65){
        return emojis[7];
    }else if(wCode >= 66 && wCode <= 68){
        return emojis[7]+emojis[3];
    }else if(wCode == 69){
        return emojis[7]+emojis[6];
    }else if(wCode >= 70 && wCode <= 79){
        return emojis[3];
    }else if(wCode >= 80 && wCode <= 94){
        return emojis[7];
    }else if(wCode >= 95 && wCode <= 99){
        return emojis[8];
    }else{
        return emojis[9];
    }

}

export default getWEmo;