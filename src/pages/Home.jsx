import MessageContainer from "../components/messages/MessageContainer"
import Sidebar from "../components/sidebar/Sidebar"

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:[550px] rounded-lg overflow-hidden bg-gray-200">
            <Sidebar />

            <MessageContainer />
        </div>
    )
}

export default Home