import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAlltodosAction } from "../redux/slice/todoSlice";


const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "XGrid", col2: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing" },
    { id: 4, col1: "Hello", col2: "World" },
    { id: 5, col1: "XGrid", col2: "is Awesome" },
    { id: 6, col1: "Material-UI", col2: "is Amazing" }
];

const columns = [
    { field: "id", headerName: "ID" },
    { field: "userId", headerName:"User ID"},
    { field: "title", headerName: "Title" },
    { field: "completed", headerName: "Completed" }
];

export default function App() {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos)
    console.log(todos, "todos")
    React.useEffect(() => {
        if (!todos) dispatch(retrieveAlltodosAction())
    }, [dispatch, todos])

    return (
        <div style={{ height: 400, width: "100%" }}>
            {todos && todos.length > 0 && <DataGrid rows={todos} columns={columns} />}
        </div>
    );
}
