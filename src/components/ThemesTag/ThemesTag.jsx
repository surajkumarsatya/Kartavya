const ThemesTag = (color, icon, label) => {
    return(
        <div className={`${color}`}>{icon}{label}</div>
    )
}

export default ThemesTag