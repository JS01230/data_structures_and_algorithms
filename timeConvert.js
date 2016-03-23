function main() {
    var time = "06:40:03AM";
    // 17:05:45
    half = time.slice(8,10)

    hh = time.slice(0,2);
    mm = time.slice(3,5);
    ss = time.slice(6,8);


    if(hh === "12" && half==="AM"){
        console.log("00" + ":" + mm + ":" + ss)
    }
    else if(hh < 12 && half === "PM"){
        hh = parseInt(hh);
        hh+=12
        console.log(hh + ":" + mm + ":" + ss)
    }
    else if(hh === "12" && half ==="PM"){
        console.log(hh + ":" + mm + ":" + ss)
    }
    else{
        console.log(hh + ":" + mm + ":" + ss)
    }

}

main()