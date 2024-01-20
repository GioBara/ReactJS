const SelectorDeColor = ({setColor}) => {

    const handleSelect = (event) => {
        setColor(event.target.value);
    }

    return(
        <select onChange={handleSelect}>
            <option value="negro">Negro</option>
            <option value="azul">Azul</option>
            <option value="morado">Morado</option>
        </select>
    );
}

export default SelectorDeColor;