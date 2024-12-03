import { useState } from "react"
import { IoSearchSharp } from "react-icons/io5"
import useConversation from "../../zustand/useConversation"
import useGetConversation from "../../hooks/useGetConversation"
import toast from "react-hot-toast"

const SearchInput = () => {
    const [search, setSearch] = useState()
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversation()
    // console.log(conversations);


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) {
            return
        }
        const conversation = conversations.find((conversation) => conversation.userName.toLowerCase().includes(search.toLowerCase()))

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else {
            toast.error("No user founded with this username")
        }
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input type="tex" placeholder="Search" className="input input-bordered rounded-full" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="btn btn-circle btn-sky-500 text-white">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput