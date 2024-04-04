// Challenge 1 Part 1 //
document.querySelector("#subscribe").addEventListener("click", function() {
    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }
    });

// Challenge 1 Part 2 //
document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current Time: " + currentTime);
    });

// Challenge 2 //
document.querySelector("#sameAddress").addEventListener("click", function() {
    console.log ("this works")
    if(this.checked) {
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").disabled=true;
    }
    else {
        document.getElementById("home").disabled=false;
       document.getElementById("home").value = "";
    }
} );
