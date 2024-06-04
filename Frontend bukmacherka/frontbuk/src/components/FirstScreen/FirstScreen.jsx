import reactLogo from '../../assets/logo.jpg';
import './FirstScreen.css'

export default function FirstScreen() {
    return(
        <header>
            <img src={reactLogo} alt="Betting webapp logo"/>
            <h1>Fortuitous Bet</h1>
            <main>
                <div>
                    <div id='Login'>
                        <a href='/login.html'><button>Login</button></a>
                    </div>
                </div>
            </main>
        </header>
    );
}