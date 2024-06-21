import "./style.css";

import back from "./../../img/back.png";
import user from "./../../img/User.png";

const NavBar =() =>{
    
    return(
        <nav>
        <div class="header">
            <div class="back">
                <img src={back} alt="Назад"/>
            </div>
            <div class="user" id="userIcon">
                <img src={user} alt="Пользователь"/>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;