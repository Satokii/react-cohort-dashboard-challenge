import homeIcon from '../../../../_assets/home-icon.svg'

function HomeIcon() {
    
    return (
        <div className='nav-icon-container grid'>
            <img className='nav-icon-img' src={homeIcon} alt="home icon" />
            <p className='nav-icon-text'>Home</p>
        </div>
    )
}

export default HomeIcon