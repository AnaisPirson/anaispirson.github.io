var foundCharcs = [];

$(document).ready(function () {
  //   $("#test").hide();
  $("#startbtn").click(function () {
    $("#btnBox").toggle();
    if ($("#startbtn")[0].innerText === "Start") {
      $("#startbtn")[0].innerText = "Close";
    } else {
      $("#startbtn")[0].innerText = "Start";
    }
  });

  $("#closeBtn").click(function () {
    $("#btnBox").toggle();
    if ($("#startbtn")[0].innerText === "Start") {
      $("#startbtn")[0].innerText = "Close";
    } else {
      $("#startbtn")[0].innerText = "Start";
    }
  });

  $("#closeBtnWin").click(function () {
    $("#winBox").toggle();
  });

  $("#imgMap").click(function (e) {
    var offset = $(this).offset();
    $("#test").show();
    $("#test").offset({ left: e.pageX, top: e.pageY });
    imgX = e.pageX - offset.left;
    imgY = e.pageY - offset.top;
    console.log(imgX + " " + imgY);
    checkClick();
  });

  $("#restart").click(function (e) {
    $("#winBox").hide();
    for (let el of charcs) {
      let twin = `#${el.selName}`;
      $(twin).hide();
    }
    foundCharcs = [];
    alert("You have restarted the game!");
  });

  function checkClick() {
    for (let el of charcs) {
      if (imgX >= el.x1 && imgX <= el.x2 && imgY >= el.y1 && imgY <= el.y2) {
        console.log(el.name + " was found");
        let twin = `#${el.selName}`;
        $(twin).show();

        if (foundCharcs.includes(el.name)) {
          console.log(el.name + " already found");
        } else {
          foundCharcs.push(el.name);
        }
      }
    }
    console.log(foundCharcs);
    if (foundCharcs.length === 4) {
      console.log("You win... download data");
      $("#winBox").show();
    }
  }
});

// function download(file) {
//   var link = document.getElementById("downlink");
//   link.setAttribute("download", file);
//   link.click();
// }
