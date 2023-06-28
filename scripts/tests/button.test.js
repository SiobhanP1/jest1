const { TestScheduler } = require("jest");
const buttonClick = require("../button");
const changePContent = require("../button");

beforeEach(()=> {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM Test", ()=> {
    test("expect p content to change", ()=> {
        changePContent();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked.");
    });
    test("h1 should exist", ()=> {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
})