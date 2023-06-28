const { TestScheduler } = require("jest");
const buttonClick = require("../button");
const changePContent = require("../button");

beforeEach(()=> {
    document.body.innerHTML = <p id="par"></p>
})

describe("DOM Test", ()=> {
    test("expect p content to change", ()=> {
        changePContent();
        expect(document.getElementById("par").innerHTML.toEqual("You clicked."));
    })
})