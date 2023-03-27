import { useState } from 'react'

function TodoComponent() {
    const [name, setName] = useState('Michael')
    const [userInput, setUserInput] = useState('')

    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleChangeName = () => {
        setName(userInput)
        setUserInput('')
    }

    return (
        <div>
            <div>
                <input value={userInput} onChange={(e) => handleInput(e)} />
                <button onClick={handleChangeName}>Change Name</button>
            </div>
            <p>This is the name: {name}</p>
            გაქვთ შემდეგი სახის კოდი. დაწერეთ იმუშავებს თუ არა ეს. ჩაასწორეთ თუ
            არის რამე შეცდომით.დაწერეთ ამ კოდის ექვივალენტი ფუნქციური
            კომპონენტით. შედეგი უნდა იყოს ერთნაირი.
        </div>
    )
}

export default TodoComponent
