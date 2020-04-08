var datas = [];

$(function () {
    $.ajax({
        async: false,
        cache: false,
        type: 'GET',
        url: 'data.json',
        success: function (res) {
            datas = res.result
            console.log(datas)
            insertData()
        },
        error: function () {
            alert('读取数据失败！')
        }
    })
})

function insertData() {
    $.each(datas, function (index, item) {
        var textTitle = $("<p></p>").addClass("index-list-title").append(item.title);
        var date = $("<p></p>").addClass("index-list-date").append(item.time);
        var status = $("<p></p>").addClass("index-list-status").append(item.status_DISPLAY);
        var imgP = $("<img>").attr("src", item.img).addClass("index-list-img");
        var temp = $("<div></div>").addClass("tempDiv");
        var titleDiv = $("<div></div>").addClass("titleDiv").append(textTitle);
        var statusDiv = $("<div></div>").addClass("bottomDiv").append(date).append(status);
        var imgDiv = $("<div></div>").addClass("imgDiv").append(imgP);
        var contentDiv = $("<div></div>").addClass("contentDiv").append(titleDiv).append(statusDiv);
        temp.append("<hr>").append(contentDiv).append(imgDiv).appendTo(".index-list");
    })
    $(".index-main").append("<hr>")
}
