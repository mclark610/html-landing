$(document).ready(() => {

  // if input goes back to correct it after login button selected
  $("#input-name").change((e)=> {
    if ($("#input-name").val()) {
      $("#input-name").css("border", "1px solid #2c2c2c");
    }
  })

  $("#input-password").change((e)=> {
    if ($("#input-password").val()) {
      $("#input-password").css("border", "1px solid #2c2c2c");
    }
  })

  $("#button-submit").click((e) => {

    e.preventDefault();

    let inputName = $("#input-name").val();
    let passWord = $("#input-password").val();

    if (!inputName) {
      $("#input-name").css("border", "2px solid red");
    } else {
      $("#input-name").css("border", "1px solid #2c2c2cda");
    }

    if (!passWord) {
      $("#input-password").css("border", "2px solid red");
    } else {
      $("#input-password").css("border", "1px solid #2c2c2cda");
    }

    console.log("inputname: " + inputName);
    console.log("password: " + passWord);
  });
});

const validate = () => {

}