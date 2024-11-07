var is24Hour = false;
        var isFahrenheit = true;
        var temperature = 34;
        function startClock() {
            doClocky();
            setInterval(doClocky,1000);
        }//startclock
        function doClocky() {
            var currentDate = new Date();
            var hours = currentDate.getHours();
            var mins = String(currentDate.getMinutes()).padStart(2,'0');
            var secs = String(currentDate.getSeconds()).padStart(2,'0');
            var amOrPm = "AM";

            if (hours >= 12) {
                amOrPm = "PM";
            }

            if (!is24Hour) {
                hours = hours % 12 || 12;
            }
            hours = String(hours).padStart(2,'0');

            var currTime;
            if (is24Hour) {
                currTime = hours + ":" + mins + ":" + secs;
            } else {
                currTime = hours + ":" + mins + ":" + secs + " " + amOrPm;
            }

            var timeOutput = document.getElementById("clocky");
            timeOutput.textContent= currTime;
        }//doClocky

        function toggleTimeFormat () {
            is24Hour = !is24Hour;
        }

        function launchBrowser() {
            var weatherImage = document.getElementById("weatherImage");
            weatherImage.style.display = "none";
            document.getElementById("temperature").style.display = "none";

             var imgGoogle = document.getElementById("weatherImage");
            imgGoogle.src = "static/google.PNG";
            imgGoogle.style.display = "block";
        }//launchBrowser

        function launchNetflix() {
            var weatherImage = document.getElementById("weatherImage");
            weatherImage.style.display = "none";
            document.getElementById("temperature").style.display = "none";

             var imgNetflix = document.getElementById("weatherImage");
             imgNetflix.src = "static/netflix.PNG";
             imgNetflix.style.display = "block";

             var tvOnSound = document.getElementById("tvOnSound");
             tvOnSound.play();
        }//launchNetflix

        var isFahrenheit = true;
        var temperature = 34;
        function launchTemp() {
            document.getElementById("weatherImage").style.display = "none";
            document.getElementById("temperature").style.display = "block";

            updateTemperatureDisplay();
        }//launchTemp

        function updateTemperatureDisplay() {
            var tempDisplay;
            if (isFahrenheit) {
                tempDisplay = temperature + " °F";
            } else {
                tempDisplay = temperature + " °C";
            }
            document.getElementById("temperature").textContent = tempDisplay;
        }

        function toggleTemp() {
            if (isFahrenheit) {
                temperature = Math.round((temperature - 32) * (5/9));
                isFahrenheit = false;
            } else {
                temperature = Math.round(temperature * (9/5) + 32);
                isFahrenheit = true;
            }
            updateTemperatureDisplay();
        }

        function increaseTemp() {
            temperature++;
            updateTemperatureDisplay();
        }

        function decreaseTemp() {
            temperature--;
            updateTemperatureDisplay();
        }

        function openFridge() {
            var weatherImage = document.getElementById("weatherImage");
            weatherImage.style.display = "block";
            weatherImage.src = "static/fridgeopen.jpg";
            document.getElementById("temperature").style.display = "none";
        }//openFridge

        var screenOn = true;
        function turnOnOff() {
            var hideableStuff = document.getElementsByClassName("hide");
            //this hides the inner display that shows weather, netflix, browser

            for (var i= 0; i < hideableStuff.length; i++) {
                if (screenOn) {
                hideableStuff[i].style.visibility = "visible";
                }//if
                    else {
                        hideableStuff[i].style.visibility = "hidden"
                }//else
            }//for loop iterates through hideableStuff which is all the elements in the class "hide"
            screenOn = !screenOn; //toggle between being on and off by changing boolean value
        } //turnOnOff

        var timerLength= 60;
        var timerSet;

        function startTimer() {
            clearInterval(timerSet);
            var remainingTime = timerLength;
            updateTimerDisplay(remainingTime);

            timerSet = setInterval(function() {
                remainingTime--;
                updateTimerDisplay(remainingTime);

                if (remainingTime <= 0) {
                    clearInterval(timerSet);
                    playAlarm();
                }
            },1000)
        }

        function updateTimerDisplay(seconds) {
            var minutes = Math.floor(seconds / 60);
            var secs = String(seconds % 60).padStart(2, '0');
            document.getElementById("timer").textContent = minutes + ":" + secs;
        }

        function playAlarm() {
            var alarmSound = document.getElementById("timerSound");
            alarmSound.play();
        }

        function addItem() {
            var newListItem = document.getElementById("newListItem").value.trim();
            if (newListItem !== "") {
                var list = document.getElementById("listItems");
                var listItem = document.createElement("li");
                listItem.textContent = newListItem;
                list.appendChild(listItem);
                document.getElementById("newListItem").value = "";
            }
        }

        function launchAppleMusic() {
            var weatherImage = document.getElementById("weatherImage");
            weatherImage.style.display = "block";
            weatherImage.src = "static/georgeThorogood.jpeg";

        }