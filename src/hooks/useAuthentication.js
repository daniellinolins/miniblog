import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
}
    from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // Clenup
    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {

        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            
            return user

        } catch (error) {

            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMensage;

            if (error.message.includes("password")) {
                systemErrorMensage = "A senha precisa ter ao menos 6 caracteres";
            } else if (error.message.includes("email-already")) {
                systemErrorMensage = "Email já cadastrado";
            }else{
                systemErrorMensage = "Ocorreu um erro, por favor tente mais tarde.";
            }

            setError(systemErrorMensage)
        }



    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
    }

}