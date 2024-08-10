//Listener variables 
let button_Listener = document.getElementById('listener'); 
let project_Listener_One = document.querySelector('.project_one'); 
let project_Listener_Two = document.querySelector('.project_two');
let project_Listener_Tree = document.querySelector('.project_tree');

//variables 
let projects_Cont = document.querySelector('.projects_cont');
let projectOne = document.querySelector('.project_one_cont');
let projectTwo = document.querySelector('.project_two_cont');
let projectTree = document.querySelector('.project_three_cont');

//event functions 

function revealProjects() {
    projects_Cont.style.display = 'flex'; 
}

function revealProjectOne() {
    projectOne.style.display = 'flex'; 
}

function revealProjectTwo() {
    projectTwo.style.display = 'flex'; 
}

function revealProjectTree() {
    projectTree.style.display = 'flex'; 
}



button_Listener.onclick = revealProjects;

project_Listener_One.onclick = revealProjectOne;
project_Listener_Two.onclick = revealProjectTwo;
project_Listener_Tree.onclick = revealProjectTree;