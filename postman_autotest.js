//test for method https://swapi.dev/api/people/10
pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Проверка_имени_персонажа", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql('Obi-Wan Kenobi');
});
//tes for method https://swapi.dev/api/planets/7
pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});
pm.test("Successful Get request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});


