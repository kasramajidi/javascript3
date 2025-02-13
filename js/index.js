const findMusice = async (signer, title) => {
    try{
        const url = `https://api.lyrics.ovh/v1/${signer}/${title}`

        const respone = await fetch(url, {
            method: "GET"
        })

        const data = await respone.json()

        if (data.lyrics){
            const diviseMusic = data.lyrics.split("\n")
            const showMusic = diviseMusic.slice(0, 5).join("\n")
            console.log(showMusic);
        }else{
            console.log(" آهنگ یافت نشد")
        }
    }catch (err) {
        console.log(err);
    }
}

findMusice("Adele", "Hello")