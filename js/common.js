$(document).ready(function() {
    // 表单 上传图片 移除
    $(document).on("click", ".control-pic li  a", function() {
        $(this).parents(".control-pic li").remove();
    });



});
//生成 预览图
//封装成 util
function preview(el, src) {
    $(el).append($("<li>").append($("<i>").attr("style", "background-image:url(" + src + ")").append($("<a>").attr({ "href": "javascript:;" }).addClass("icon-trash"))));
}
//ztree 的设置
var treeSetting = {
    check: {
        enable: true
    },
    data: {
        simpleData: {
            enable: true
        }
    }
};
