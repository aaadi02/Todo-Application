function TodoItems2() {

    let todoName = "Go TO College";
    let todoDate = "4/10/2023";

    return (
        <div className="container">
            <div className="row margin">
                <div className="col-6">
                    {todoName}
                </div>

                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger urs-btn">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItems2;