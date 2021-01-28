
// Open-Close Principle 

class AccountPageRenderer {

    render() {
        return 
        `
        <div id = 'home'>
            // some other html elements based on userData
        </div>
        `
    }
}

// .. new business requirement coming and we have to use feature flag
// to render different account page

class ModernAccountPageRender extends AccountPageRenderer {

    render() {
        const userData = this.interactor.fetchOwnerDataFromBankDatabase();
        console.log(userData);
        return 
        `
        <div id = 'home'>
            <div id = 'sidebarMenu'> </div>
            // some other html elements based on userData
        </div>
        `
    }
}

class AccountPageComponent {
    render;

    constructor(renderer) {

        this.render = renderer;
    }

    render() {

        const page = document.querySelector('account-page');
        page.innerHTML = renderer.render();
    }
}

const moderAccountPageEnabled = true;
const renderer = moderAccountPageEnabled 
    ? new AccountPageRenderer() 
    : new ModernAccountPageRender()

const component = AccountPageComponent(render);