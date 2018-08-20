const expect = require("chai").expect;
const pathHandle = require("../../common/pathHandle");
let articleCoverObj = {
    imagePath: "\\article-cover\\23479234.png"
}
describe("pathHandle", () => {
    describe("articleCoverPathHandle#文章封面路径的处理方法", () => {
        it("应该返回一个字符串", () => {
            expect(pathHandle.articleCoverPathHandle(articleCoverObj)).to.be.a("string");
        })
    })
})