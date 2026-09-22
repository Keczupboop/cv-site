type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <li>
            <button onClick={() => onToggle(todo.id)}>
                {todo.done ? "☑" : "☐"}
            </button>

            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
            </span>

            <button onClick={() => onDelete(todo.id)}>
                Usuń
            </button>
        </li>
    )
}