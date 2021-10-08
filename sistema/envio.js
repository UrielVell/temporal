var btnGet = document.getElementById("btnGet");
btnGet.addEventListener("click", function () {
    var params = new URLSearchParams();
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;
    params.append("nombre", email);
    params.append("contra", pass);
    console.log(params.get("nombre"))
    axios.get("http://127.0.0.1:5501/form.html?" + params)
        .then(function (rs) {
            console.log(rs.data);
            alert(rs.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});