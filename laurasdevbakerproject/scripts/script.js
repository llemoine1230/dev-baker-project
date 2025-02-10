$(document).ready(function () {
  $("#chairOne").draggable({
    containment: "parent",
    stop: function (event, ui) {
      $("#chairOnePosition").text(
        `Chair One Position: (${ui.position.left}, ${ui.position.top})`
      );
      console.log(
        `Chair One Position: (${ui.position.left}, ${ui.position.top})`
      );
    }
  });

  $("#chairTwo").draggable({
    containment: "parent",
    stop: function (event, ui) {
      $("#chairTwoPosition").text(
        `Chair Two Position: (${ui.position.left}, ${ui.position.top})`
      );
      console.log(
        `Chair Two Position: (${ui.position.left}, ${ui.position.top})`
      );
    }
  });
});