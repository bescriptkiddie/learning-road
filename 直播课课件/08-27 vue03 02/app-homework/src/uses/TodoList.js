import { ref, reactive, computed } from "vue";

function useTodoList() {

    let id = 4;

    let newTodo = ref('');

    let todos = reactive([
       {id: 1, title: '任务一', completed: false},
       {id: 2, title: '任务二', completed: true},
       {id: 3, title: '任务三', completed: false}
    ]);

    let allDone = computed( {
        get() {
            return todos.every( todo => todo.completed )
        },
        set(newVal) {
            todos.forEach(todo => todo.completed = newVal)
        }
    } )

    const addNewTodo = function() {
        todos.unshift({
            id: id++,
            title: newTodo.value,
            completed: false
        });

        newTodo.value = '';
    }

    let visibility = ref('all');
    // 你们实现
    const changeVisibility = function(val) {
        visibility.value = val;
    }

    // 你们实现
    let filteredTodos = computed(() => {
        // return todos;
        switch(visibility.value) {
            default:
            case 'all':
                return todos;
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
        }
    });

    const removeTodo = todo => {
        // console.log(todos);
        // todos.filter(td => td != todo)
        // console.log('todos', todos);
        let index = todos.findIndex(t => t == todo);
        console.log('todo', index);
        todos.splice( index, 1 );

        // console.log('todos', todos);
    }

    return {
        todos,
        allDone,

        filteredTodos,

        newTodo,
        addNewTodo,

        visibility,
        changeVisibility,
        removeTodo
    }

}

export default useTodoList;