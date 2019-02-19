import React from "react";

const Signup = () => {
    return (
        <div>
            <b>Signup for Stempower</b><br/>
            <form>
                Name:<br/>
                <input type="text" name="name"/><br/>
                Email:<br/>
                <input type="text" name="email"/><br/>
                Password:<br/>
                <input type="text" name="password"/><br/>
                Confirm Password:<br/>
                <input type="text" name="confirmPassword"/><br/>
                Troop Number:<br/>
                <intput type="text" name="troopNumber"/><br/>
            </form>
        </div>
    );
};

export default Signup;