import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const handleInputErrors = ({ userName, email, password, confirmPassword, gender }) => {
    if (!userName || !email || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the fields")
        return true
    }

    if (password !== confirmPassword) {
        toast.error("Password don't matched")
        return true
    }

    return false
}

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({ userName, email, password, confirmPassword, gender }) => {
        const checkError = handleInputErrors({
            userName, email, password, confirmPassword, gender
        })

        if (checkError) {
            return
        }

        try {
            setLoading(true)

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName,
                    email,
                    password,
                    confirmPassword,
                    gender
                })
            })

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem('user', JSON.stringify(data))
            setAuthUser(data)


        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, signup}

}

export default useSignup