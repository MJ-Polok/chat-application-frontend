import { Link } from "react-router-dom"
import GenderCheckbox from "../components/GenderCheckbox"
import { useState } from "react"
import useSignup from "../hooks/useSignup"


const Signup = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setFormData({ ...formData, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(formData)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
                <h1 className="text-3xl font-semibold text-center text-slate-700">Signup to
                    <span className="text-blue-700"> Chat Application</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} type="text" placeholder="Enter Your Username" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="Enter Your Email" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" placeholder="Enter Your Password " className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} type="password" placeholder="Again Enter Your Password" className="w-full input input-bordered h-10" />
                    </div>

                    <GenderCheckbox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={formData.gender}
                    />

                    <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 inline-block">
                        {`Already have an account?`}
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-700 font-bol1d text-white" disabled={loading}>
                            {loading ? (<span className="loading loading-spinner"></span>) : "Sing Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup