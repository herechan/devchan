const expect = require("chai").expect;
const admin = require("../controller/admin")
describe("文件删除的测试",()=>{
    it("应该返回正确状态的对象",()=>{
        expect(admin.deleteCover("C:\code\devchan\server\public\image\article-cover\1529996869734_space-RGB-01.png")).to.be.a("Object")
    })
})