const MUSIC_FILE = "musik.mp3";

let music = new Audio(MUSIC_FILE);

music.loop = true;

let savedTime =
    parseFloat(localStorage.getItem("musicTime")) || 0;

let musicStarted =
    localStorage.getItem("musicStarted") === "true";


// ===============================
// SIMPAN POSISI MUSIK
// ===============================

setInterval(() => {

    if (!music.paused) {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }

}, 300);


// ===============================
// SIMPAN SEBELUM PINDAH HALAMAN
// ===============================

window.addEventListener("beforeunload", () => {

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

});


// ===============================
// KLIK PERTAMA DI WEBSITE
// ===============================

document.addEventListener(
    "click",
    function startMusic() {

        if (!musicStarted) {

            music.currentTime = savedTime;

            music.play()
                .then(() => {

                    localStorage.setItem(
                        "musicStarted",
                        "true"
                    );

                })
                .catch(() => {

                    console.log(
                        "Klik lagi untuk memulai musik."
                    );

                });

        }

    },
    { once: true }
);


// ===============================
// LANJUTKAN MUSIK DI HALAMAN BARU
// ===============================

if (musicStarted) {

    music.currentTime = savedTime;

    music.play()
        .catch(() => {

            console.log(
                "Browser menunggu interaksi pengguna."
            );

        });

}
