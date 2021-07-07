import React, { useEffect, useState } from "react";
import { auth } from "./firebase.js";

// contextの作成
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // ユーザーをログインさせる関数
    const login = async (email, password, history) => {
        try {
            await auth.auth().signInWithEmailAndPassword(email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    // 新しいユーザーを作成しログインさせる関数
    const signup = async (email, password, history) => {
        try {
            await auth.auth().createUserWithEmailAndPassword(email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        console.log(auth)
        auth.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
        <AuthContext.Provider
            value={{
                login: login,
                signup: signup,
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider