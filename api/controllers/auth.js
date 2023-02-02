import db from "../db.js";
import bcrypt from "bcryptjs";

export const register = async (req, res)=> {

    const {email, username, password} = req.body

    // check existing user with sample query
    const [[result]] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    // if user exist
    if(result) return res.status(409).json({message: "User Already exists!"})

    //Hash pw
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // insert in DB
    const [data] = await db.execute("INSERT INTO users(`username`,`email`,`password`) VALUES (?, ?, ?)", [username, email, hash]);

    // If user insert in db done
    if(data.affectedRows === 1) {
        return res.status(201).json({message: "User created!"})
    } else {
        return res.status(500).json({error: "Error server"})
    }

};


//After
export const login = (req, res)=> {

};
export const logout = (req, res)=> {
    
};