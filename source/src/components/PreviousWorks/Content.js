import ImageSlider from './ImageSlider';

const Content = ({ data }) => {
    return (
        <div className='content'>
            {data.map(item =>
            // item?.category === 'mobile' &&
            (
                <div className='item'>
                    <div className='company-info'>
                        <div className='company-name'>{item.company}</div>
                        {item.logo && <img alt='logo' src={`${process.env.PUBLIC_URL}/assets/images/${item.logo}`} />}
                        <div className='company-date'>{item.date}</div>
                        <div className='company-status'>{item.status}</div>
                    </div>
                    <div className='work-container'>
                        <span className='line'></span>
                        <div className='work-info'>
                            <div className='mark'><div className='in-mark' /></div>
                            <div className='work-title' dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div className='work-type' dangerouslySetInnerHTML={{ __html: item.type }} />
                            <div className='work-client'>{`- Client`}</div>
                            <div className='work-avatar-container'>
                                {item.avatar && <img alt='avatar' className='work-avatar' src={`${process.env.PUBLIC_URL}/assets/images/${item.avatar}`} />}
                                <div className='client-content' dangerouslySetInnerHTML={{ __html: item.client }} />
                            </div>

                            <div className='work-client'>{`- Role`}</div>
                            <div className='work-content' dangerouslySetInnerHTML={{ __html: item.role }} />
                            <div className='work-technology'>{`- Technology & Features`}</div>

                            <div className='work-icons'>
                                {
                                    item.icons?.map((src, index) => (
                                        <img key={index} alt='skill-icon' src={`${process.env.PUBLIC_URL}/assets/icons/${src}`} />
                                    ))
                                }
                            </div>
                            <div className='work-content' dangerouslySetInnerHTML={{ __html: item.technology }} />
                            <ImageSlider images={item.images} />
                            <div className='button-group'>
                                {item.appstore !== '' && <button className='button' onClick={() => window.open(item.appstore, '_blank')}><img className='button-icon' src={`${process.env.PUBLIC_URL}/assets/images/appstore.png`} /></button>}
                                {item.playstore !== '' && <button className='button' onClick={() => window.open(item.playstore, '_blank')}><img className='button-icon' src={`${process.env.PUBLIC_URL}/assets/images/playstore.png`} /></button>}
                                {item.youtube !== '' && <button className='button' onClick={() => window.open(item.youtube, '_blank')}><img className='button-icon' src={`${process.env.PUBLIC_URL}/assets/images/youtube.png`} /></button>}
                                {item.website !== '' && <button className='button' onClick={() => window.open(item.website, '_blank')}><img className='button-icon' src={`${process.env.PUBLIC_URL}/assets/images/website.png`} /></button>}
                            </div>
                            <div className='work-other' dangerouslySetInnerHTML={{ __html: item.other }} />
                        </div >
                    </div >
                </div >
            ))}
        </div >
    )
}

export default Content;