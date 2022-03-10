import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const initialValues = () => {
        let total = 0;
        for (let i = 0; i < 1000000; i++) {
            total += i;
        }
        console.log("inissdsds");
        return total;
    }

    // const [count, setCount] = useState(() => initialValues());
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('sdsdsdsdsd');

        return () => {
            // clean-up functions
            setCount(0);
        }
    }, [count]);

    useEffect(() => {
        fetch(`https://reqres.in/api/${action}`)
            .then((res) => console.log({ res }))
            .catch((err) => console.log(err));
    }, [action]);

    useEffect(() => {
        //componentDidmount
        console.log("Second: add action scroll");
        document.addEventListener('scroll', handleScroll);

        return () => {
            //clean-up function
            console.log('First. remove');
            document.removeEventListener('scroll', handleScroll)
        }
    })

    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep'
        },
        {
            id: 3,
            title: 'code'
        }
    ];

    const handleClick = () => {
        setCount((prevState) => {
            return prevState + 1;
        });
        setCount((prevState) => {
            return prevState + 1;
        });
    };

    return (
        <div style={{height: '3000px'}}>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => setAction('users')}>Get users</button>
            <button onClick={() => setAction('comments')}>Get comments</button>
            <h3>Todo List:</h3>
            <TodoList todoList={todoList} />
            <p style={{position: 'fixed', bottom: '20px', left: '20px'}}>{ scrollPosition }</p>
        </div>
    );
}

export default TodoFeature;