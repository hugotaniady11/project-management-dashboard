import React from 'react'

const SearchBar = ({...rest}) => {
    return (
        <form className="my-4 rounded-md shadow-sm">
            <input
                type="text"
                placeholder="Search for users"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                {...rest}
            />
        </form>
    )
}

export default SearchBar
