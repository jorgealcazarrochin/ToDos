

function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');

    const hanldeSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue('');
    }

    return (<>
         <form onSubmit = {hanldeSubmit}>
            <input type="text" className="input" value={value} placeholder="Add ToDo..." onChange = {e => setValue(e.target.value)}/>
        </form>
    </>)
}