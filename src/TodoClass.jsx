import { Component } from 'react'

class TodoClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Micheal',
            userInput: '',
        }
    }
    // ფუნქციები გადავიყვანე => ფუნქციებში
    handleInput = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            userInput: e.target.value,
        }))
    }
    // ფუნქციები გადავიყვანე => ფუნქციებში
    handleChangeName = () => {
        this.setState((prevState) => ({
            ...prevState,
            name: prevState.userInput,
            userInput: '',
        }))
    }
    render() {
        const { userInput, name } = this.state
        return (
            <div>
                <div>
                    <input
                        value={userInput}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <button onClick={this.handleChangeName}>Change Name</button>
                </div>
                <p>This is the name: {name}</p>
                გაქვთ შემდეგი სახის კოდი. დაწერეთ იმუშავებს თუ არა ეს. ჩაასწორეთ
                თუ არის რამე შეცდომით.დაწერეთ ამ კოდის ექვივალენტი ფუნქციური
                კომპონენტით. შედეგი უნდა იყოს ერთნაირი.
            </div>
        )
    }
}

export default TodoClass
