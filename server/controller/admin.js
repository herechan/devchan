const fs = require("fs")
const path = require("path");
let getArticle = require("../dao/writting-center/getArticleTags")
let uploadWrittingCover = require("../dao/writting-center/uploadAricleCover");
let resObj = require("../util/resObj");
const formidable = require("formidable");

exports.ARTICLE_TAGS = async (ctx) => {
  await getArticle(ctx);
}
//封面
exports.ARTICLE_COVER = async (ctx, next) => {

  const file = ctx.request.files.file;
  const coverName = file.path.split("\\")[file.path.split("\\").length - 1];
  const time = new Date()
  const newPath = path.resolve(__dirname, "../public/image/article-cover/" + time.getTime() + "_" + file.name)
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(newPath);
  var renderStream = reader.pipe(stream);
  ctx.body = await streamFunc(renderStream, newPath);
}

//封面删除
exports.ARTICLE_COVER_DELETE = async (ctx) => {
  var filePath = path.resolve(__dirname, `../public${ctx.request.body.coverPath}`);
  ctx.body = await deleteCover(filePath)
}

//文章内容图片上传
exports.ARTICLE_IMAGE_UPLOAD = async (ctx, next) => {

  // var fileObj = ctx.request.body.data.get("image")
  // var baseData = fileObj.miniurl.replace(/^data:image\/png;base64,/, "");
  // var filename = new Date().getTime() + "_" + fileObj.filename;
  // var filePath = path.resolve(__dirname, `../public/image/article-image/${filename}`)
  // ctx.body = await writeArticleImage(filePath,baseData);
  // console.log(Object.keys(ctx.request.body))
  // console.log(ctx.request.body[5])
  // for(var i in ctx.request.body){
  //   console.log(ctx.request.body[i])
  // }
  ctx.body = "";

  //  ctx.body = await writeArticleImage(ctx)
  // ctx.body = ""
  // ctx.body = "test"
  // var form = new formidable.IncomingForm();
  // form.parse(ctx.req, (err, files) => {
  //   if (err) throw err;
  //   console.log(files.get("image"));
  //   ctx.body = "9"
  // })


}

function writeArticleImage(ctx) {
  var form = new formidable.IncomingForm();
  return new Promise((reso, reje) => {
    form.parse(ctx.req, async (err, file, files) => {
      if (err) throw err;
      console.log(Object.keys(file))
      console.log(Object.keys(files))
      console.log(file);
    })
    // fs.writeFile(filePath, baseData, "base64", (err) => {
    //   if (err) throw err;
    //   rejc({
    //     status: 1,
    //     msg: "save success",
    //     data: filePath.split("public")[1]
    //   })
    // })
  })
}


function streamFunc(s, newPath) {
  return new Promise((reo, rej) => {
    s.on("finish", () => {
      reo(resObj(
        1,
        "upload success!",
        newPath.split("public")[1]
      ))
    })
  })
}


function deleteCover(path) {
  fs.unlink(path, (err) => {
    return new Promise((reo, rej) => {
      if (err) {
        throw err;
        rej();
      }
      reo(resObj(1, "remove success!", ""));
    })
  })
}