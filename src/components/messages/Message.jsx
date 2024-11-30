

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="User Avatar" />
                </div>
            </div>

            <div className="chat-bubble text-white bg-blue-500">Hello!</div>

            <div className="chat-footer opacity-50 text-xs flex gap-1 item-center text-slate-950">9:    45</div>
        </div>
    )
}

export default Message