import { useState } from "react"
import TodoItem from "./todoitem";

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export default function TodoList() {
    const [text, setText] = useState("");

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            text: "Nauczyć się Reacta",
            done: true,
        },
        {
            id: 2,
            text: "Nauczyć się TypeScript",
            done: false,
        },
        {
            id: 3,
            text: "Zrobić stronę na Vercel",
            done: false,
        },
    ]);

    function toggleTodo(id: number) {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id
            ? { ...todo, done: !todo.done }
            : todo
        )
        );
    }

    function todoDelete(id: number) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    function addTodo(event: React.FormEvent) {
        event.preventDefault();

        if (text.trim() === "") {
            return;
        }

        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            done: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);

        setText("");
    }

    return (
        <ul>
        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={todoDelete}
            />
        ))}

            <form onSubmit={addTodo}>
                <input
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                <button type="submit">
                    Dodaj
                </button>
            </form>
        </ul>
    );
}