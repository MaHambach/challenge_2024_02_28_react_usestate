import {ChangeEvent, useState} from "react";

type SearchComponentProps = {
    handleSearchText: (searchText: string) => void,
}

export default function SearchComponent(props: Readonly<SearchComponentProps>):JSX.Element {
    const [searchText, setSearchText] = useState<string>("")

    console.log("Searchtext: " + searchText)

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value);
        props.handleSearchText(searchText);
    }

    return (
        <input value={searchText} onChange={handleInputChange}/>
    );
}