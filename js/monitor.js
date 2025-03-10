
function getGithub() {
    let username = document.getElementById("username-box").value;
    if(username == ""){
        alert("Invalid Username");
    } else {
    let urlbuilder = 'https://api.github.com/search/issues?q=created:2019-10-10T00:00:00-12:00..2019-10-14T23:59:59-12:00+type:pr+is:public+author:' + username;

    $.ajax({
        method: "GET",
        url: urlbuilder,
        dataType: "json",
        cache: false,
        success: function (response) {
            console.log(response.total_count);
            //Welcome Text
            document.getElementById("welcome-title").innerHTML = "Welcome " + response.items[0].user.login;

            //Profile Picture
            document.getElementById("profile-pic").src = response.items[0].user.avatar_url;

            // Contributions Count
            document.getElementById("contributions").innerHTML = "Contributions: " + response.total_count;

            //CleanUP Div
            document.getElementById("progress-list").innerHTML = "";

            //PRs
            for (let i = 0; i <= response.items.length; i++) {
                let element = document.getElementById("progress-list")
                element.innerHTML = element.innerHTML +
                    " <li>" +
                    "<div>" +
                    "<h4>" + response.items[i].repository_url.substr(29) + "</h4>" +
                    "<h6>" + response.items[i].title + "</h6>" +
                    "</div>" +
                    "</li>"
                    ;
            }
        }
    });

    //Show the Div and scroll
    document.getElementById("cont-div").style.display = "block";
    window.scrollTo(0,500);


    // Http Request
    // const Http = new XMLHttpRequest();
    // const url = urlbuilder;
    // Http.open("GET", url);
    // Http.send();
    // Http.onreadystatechange = (e) => {
    //     let response = JSON.parse(Http.responseText);
    //     //console.log(response.total_count)

    //     //Welcome Text
    //     document.getElementById("welcome-title").innerHTML = "Welcome " + response.items[0].user.login;

    //     //Profile Picture
    //     document.getElementById("profile-pic").src = response.items[0].user.avatar_url;

    //     // Contributions Count
    //     document.getElementById("contributions").innerHTML = "Contributions: " + response.total_count;

    //     //PRs
    //     for (let i = 0; i <= response.items.length; i++) {
    //         let element = document.getElementById("progress-list")
    //         element.innerHTML = element.innerHTML +
    //             " <li>" +
    //             "<div>" +
    //             "<h4>" + response.items[i].repository_url.substr(29) + "</h4>" +
    //             "<h6>" + response.items[i].title + "</h6>" +
    //             "</div>" +
    //             "</li>"
    //             ;
    //     }
    // }
    }
}