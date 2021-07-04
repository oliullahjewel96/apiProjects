//Init Github
const github = new Github;

//Init UI

const ui = new UI;

// Search Input

const searchUser = document.getElementById('searchUser');

//Search input add event listener

searchUser.addEventListener('keyup', (e)=>{
    //Get input text

    const userText = e.target.value;
    
    if(userText !== ''){
        github.getUser(userText)
        .then(data =>{
            if (data.profile.message === 'Not Found') {
                //Show alert
            } else {
                //Show Profile
                ui.showProfile(data.profile);
            }
        })
    }else{
        //clear profile
    }
})