var workspaceList = [];

$(document).ready(() => {

})

$(document).on("click", "#btnNewWorkspace",() => {
    console.log("clicked");
    const name = prompt("Enter new Workspace Name","Workspace");
    const workspace = {
        name
    }
    workspaceList.push(workspace);
    updateWorkspaceList();
})


const updateWorkspaceList = () => {
    console.log(workspaceList)
    $("#workspaceList").html("")
    workspaceList.forEach((item, index) => {

        $("#workspaceList").append(`<div class="workspace-chip" key="${index}"><span>${item.name}</span></div>`);
    })
}

