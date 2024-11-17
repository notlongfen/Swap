const Swap = () => {
    return (
        <div className="text-center">
            <h1 className="text-red-400 text-xl">Swap</h1>
            <div className="border m-10 justify-center rounded-xl">
                <div className="flex justify-center">
                    <div className="m-5">
                        <h1>From</h1>
                        <input type="text" placeholder="0.0" className="border p-2" />
                    </div>
                    <div className="m-5">
                        <h1>To</h1>
                        <input type="text" placeholder="0.0" className="border p-2" />
                    </div>
                </div>
                <button className="bg-red-400 p-2 m-5">Swap</button>


            </div>
        </div>
    )
}

export default Swap;