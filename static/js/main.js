
$("[name='copyLink']").click(function(sender){
    copyToClipBoard(sender.target.innerHTML);
});
// copy text to clipboard
function copyToClipBoard(str) {
    document.copyToClipBoard = str;
    $('#emailModal').modal('hide');
}