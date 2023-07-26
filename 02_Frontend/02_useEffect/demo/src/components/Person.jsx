export default function Person(props) {
    const { id, name, age } = props;

    return (
        <li key={id}>
            {name} is {age} years old.
        </li>
    )
    
}