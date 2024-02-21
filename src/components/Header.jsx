import Logo from "./Logo";
import Button from "./Button";

import "./Header.css";

function Header() {
    return (
            <div className="headerDiv">
                <Logo />
                <div className="rightDiv">
                    <h3>Dave</h3>
                    <Button 
                        buttonText="Logout"
                        buttonClick={() => {console.log("Click button")}}
                    />
                </div>
            </div>
    );
}

export default Header;