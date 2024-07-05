
const Content = ({ data }) => {
    return (
        <div className='content'>
            {data.map(item =>
            (
                <div key={item.id} className='item-container'>
                    <div className='item'>
                        <div className='image-container'>
                            <img key={item.id} alt='skill_icon' src={`${process.env.PUBLIC_URL}/assets/icons/skills/${item.icon}`} />
                        </div>

                        <div className='desc'>
                            <h5>{item.name}</h5>
                            <div className='detail'>
                                <div className={`wrapper ${item.category}`}>{item.category}</div>
                                <div className='experience'>{`${item.experience} years`}</div>
                            </div>
                        </div>
                    </div >
                </div>
            ))}
        </div >
    )
}

export default Content;