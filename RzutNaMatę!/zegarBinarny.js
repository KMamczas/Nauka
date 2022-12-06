let zegar = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    getTimes() {
        const now = new Date()
        this.hours = now.getHours()
        this.minutes = now.getMinutes()
        this.seconds = now.getSeconds()

        console.log(`Godziny: ${this.hours} Minuty: ${this.minutes} Sekundy: ${this.seconds}`)
    },
    binnaryTime() {
        this.getTimes()
        return [
            ((this.hours - this.hours % 10) / 10).toString(2),
            (this.hours % 10).toString(2),
            ((this.minutes - this.minutes % 10) / 10).toString(2),
            (this.minutes % 10).toString(2),
            ((this.seconds - this.seconds % 10) / 10).toString(2),
            (this.seconds % 10).toString(2),
        ]
    },
    clock(times = this.binnaryTime()) {
        for (i = 0; i < 6; i++) {
            let ind = times[i]
            for (j = 0; j < 4; j++) {
                if (ind[ind.length - 1 - j] == 1) {
                    let doc = document.getElementById(i.toString(10) + j.toString(10))
                    doc.setAttribute("src", "true.png")
                } else {
                    let doc = document.getElementById(i.toString(10) + j.toString(10))
                    doc.setAttribute("src", "false.png")
                }

            }

        }

    }

}
setInterval(() => {
    zegar.clock()
}, 1000);

