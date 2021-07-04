class Github{
    constructor(){
        this.client_id = 'a10a7aac2ae471aa1f05';
        this.client_secret = 'ab8a1312222eb088d5b865fab1a2e3bf526d75cb';
    }
    async getUser(user){
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }


    }
}