
const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 it   em-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className=" items-center w-12 rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-slate-700">Codenuovus</p>

                        <span className="text-m"> just now</span>
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation