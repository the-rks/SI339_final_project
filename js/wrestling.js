const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard));

            function allShow(){
                var x = document.querySelectorAll("div.card");
                for (var i = 0; i < x.length; i++) {
                x[i].style.display = "flex";
                }
            }
            function only2022() {
                console.log("2022");
                var x = document.querySelectorAll("div.card:not(.y2022)");
                for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
                var y = document.querySelectorAll("div.card.y2022");
                for (var i = 0; i < y.length; i++) {
                y[i].style.display = "flex";
                }
            }

            function only2023() {
                console.log("2023");
                var x = document.querySelectorAll("div.card:not(.y2023)");
                for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
                var y = document.querySelectorAll("div.card.y2023");
                for (var i = 0; i < y.length; i++) {
                y[i].style.display = "flex";
                }
            }

            function onlyWM() {
                console.log("wm");
                var x = document.querySelectorAll("div.card:not(.wrestlemania)");
                for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
                var y = document.querySelectorAll("div.card.wrestlemania");
                for (var i = 0; i < y.length; i++) {
                y[i].style.display = "flex";
                }
            }

            function onlySumSlam() {
                console.log("sum");
                var x = document.querySelectorAll("div.card:not(.summerslam)");
                for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
                var y = document.querySelectorAll("div.card.summerslam");
                for (var i = 0; i < y.length; i++) {
                y[i].style.display = "flex";
                }
            }
            function onlySurSer() {
                console.log("ss");
                var x = document.querySelectorAll("div.card:not(.survivor_series)");
                for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }

                var y = document.querySelectorAll("div.card.survivor_series");
                for (var i = 0; i < y.length; i++) {
                y[i].style.display = "flex";
                }
            }
        