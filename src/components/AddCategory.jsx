import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // console.log("🚀 ~ file: AddCategory.jsx:7 ~ AddCategory ~ setCategories:", setCategories)


    const onInputChange = (event) => {
        // console.log("🚀 ~ file: AddCategory.jsx:8 ~ onInputChange ~ event:", event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        // console.log("🚀 ~ file: AddCategory.jsx:18 ~ onSubmit ~ inputValue:", newInputValue)

        setInputValue('');
        onNewCategory(newInputValue)
    }
    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

