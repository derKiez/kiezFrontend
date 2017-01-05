$(function(){
    
    var validate = function (email, username, zipcode, password, confirm_password){
        var status = true;
        if (password !== confirm_password){
            $(".password_validation").show();
            status = false
        }
        if(zipcode.length !== 5){
            $(".zipcode_validation").show();
            status = false
        }
        return status
    };
    
    $(".submit-button").on("click", function(){
        var email = $("#e-mail").val();
        var password = $("#password").val();
        var confirm_password = $("#confirm_password").val();
        var zipcode = $("#postcode").val();
        var username = $("#username").val();
        var data = {email: email,
                    password: password,
                    username: username,
                    zipcode: zipcode};
        
        result = validate(email, username, zipcode, password, confirm_password);
        if (!result){
            return
        }
        
        var url = "http://localhost:5000/register";
        $.ajax({
            url: url,
            type: 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType : 'application/json',
            success: function (response) {
                Cookies.set('kiez-token', response.token);
                window.location.replace("index.html");
            },
            error: function (error) {
                alert("Something Bad happened")
            }
        })
 
        $()
        
    })
});