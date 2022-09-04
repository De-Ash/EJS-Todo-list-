//jshint esversion:6
exports.getMyDate=function () {
    const date= new Date();
    const Options={
        weekday:"long",
        day:"numeric",
        month:"short",
    };
    return date.toLocaleDateString("en-US",Options);
};

exports.getMyDay=function (){
    const date= new Date();
    const Options={
        weekday:"long"
    };
    return date.toLocaleDateString("en-US",Options);
};
exports.getMyTime=function () {
    const date= new Date();
    let hours= date.getHours();
    let minutes=date.getMinutes();
    let milliseconds=date.getMilliseconds();
    return hours+":"+minutes+":"+milliseconds;
};