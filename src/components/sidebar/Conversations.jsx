import useGetConversation from "../../hooks/useGetConversation"
import Conversation from "./Conversation"


const Conversations = () => {
    const { loading, conversations } = useGetConversation()

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation, index) => (
                <Conversation key={conversation._id} conversation={conversation} lastIndex={index === conversation.length - 1} />
            ))}

            {loading ? (
                <span className="loading loading-spinner"></span>
            ) : null}
        </div>
    )
}

export default Conversations