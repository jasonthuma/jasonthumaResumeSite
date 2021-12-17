//Add an event listener to give the user the option to cancel navigating away from this page
var linkedInLink = document.querySelector('.linkedin');
linkedInLink.addEventListener('click', function(event){
    event.preventDefault();
    if (confirm('Are you sure you want to navigate to a different site?')) {
        window.open(this.href, '_blank');
    }
});

//Make the left and right side divs equal in height no matter what the content inside is
function setLeftEqualtoRight() {
    $("#leftSection").height($("#rightAside").height());
}
setLeftEqualtoRight();

//If window size changes, call function to keep right and left divs the same size
window.onresize = setLeftEqualtoRight;

//Function to take all list items in the technical skills list and bring them into an array for styling
function createSkillList() {
    let skillArray = ["HTML","CSS","JavaScript","Python","C++","Java","Solidworks", "OnShape", "MATLAB", "Microsoft Office Suite"];
    let skillsCollection = document.getElementsByClassName("skillsList");
    //console.log(skillsCollection);
    let skills = skillsCollection[0];
    //console.log(skills);

    for (let i = 0; i < skillArray.length; i++) {
        let li = document.createElement('li');
        li.innerText = skillArray[i];
        skills.appendChild(li);
    }
}

createSkillList();



  
   