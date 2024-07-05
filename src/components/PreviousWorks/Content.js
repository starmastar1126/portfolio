import ImageSlider from './ImageSlider';
import StarRating from '../StarRating';

const Content = ({ data }) => {
    return (
        <div className='content'>
            {data.map(item =>
            (
                <div className='item'>
                    <div className='company'>
                        <div className='name'>{item.company}</div>
                        {item.logo && <img alt='logo' src={`${process.env.PUBLIC_URL}/assets/icons/company/${item.logo}`} />}
                        <div className='period'>{item.date}</div>
                        <div className='status'>{item.status}</div>
                    </div>

                    <div className='work'>
                        <span className='line'></span>
                        <div className='data'>
                            <div className='mark'><div className='in-mark' /></div>

                            <div className='company mobile'>
                                <div className='name'>{item.company}</div>
                                <div className='wrapper'>
                                    {item.logo && <img alt='logo' src={`${process.env.PUBLIC_URL}/assets/icons/company/${item.logo}`} />}
                                    <div className='detail'>
                                        <div className='period'>{item.date}</div>
                                        <div className='status'>{item.status}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='title' dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div className='type' dangerouslySetInnerHTML={{ __html: item.type }} />
                            <div className='skills'>
                                {item.skills?.map((skill, index) => (
                                    <div key={`skill${index}`} className='skill'>{skill}</div>
                                ))}
                            </div>

                            <div className='category'>- Client</div>
                            <div className='client'>
                                {item.avatar && <img alt='avatar' className='avatar' src={`${process.env.PUBLIC_URL}/assets/icons/avatar/${item.avatar}`} />}
                                <div className='information' dangerouslySetInnerHTML={{ __html: item.client }} />
                            </div>

                            <div className='review'>
                                <StarRating rating={item.review?.rating} />
                                <p dangerouslySetInnerHTML={{ __html: item.review?.recommendation }} />
                            </div>

                            <div className='category'>- Role</div>
                            <div className='detail' dangerouslySetInnerHTML={{ __html: item.role }} />
                            <div className='category'>- Technology & Features</div>
                            <div className='icons'>
                                {item.icons?.map((src, index) => (
                                    <img key={index} alt='skill-icon' src={`${process.env.PUBLIC_URL}/assets/icons/software/${src}`} />
                                ))}
                            </div>
                            <div className='detail' dangerouslySetInnerHTML={{ __html: item.technology }} />
                            <div className='other' dangerouslySetInnerHTML={{ __html: item.other }} />
                            <img className='banner' src={`${process.env.PUBLIC_URL}/assets/images/banner.png`} alt='banner' />
                            <ImageSlider images={item.images} />
                            <div className='buttons'>
                                {item.appstore !== '' && <button className='button' onClick={() => window.open(item.appstore, '_blank')}><img className='icon' src={`${process.env.PUBLIC_URL}/assets/icons/software/appstore.png`} alt='appstore' /></button>}
                                {item.playstore !== '' && <button className='button' onClick={() => window.open(item.playstore, '_blank')}><img className='icon' src={`${process.env.PUBLIC_URL}/assets/icons/software/playstore.png`} alt='playstore' /></button>}
                                {item.youtube !== '' && <button className='button' onClick={() => window.open(item.youtube, '_blank')}><img className='icon' src={`${process.env.PUBLIC_URL}/assets/icons/software/youtube.png`} alt='youtube' /></button>}
                                {item.website !== '' && <button className='button' onClick={() => window.open(item.website, '_blank')}><img className='icon' src={`${process.env.PUBLIC_URL}/assets/icons/software/website.png`} alt='website' /></button>}
                                {item.github !== '' && <button className='button' onClick={() => { item.private ? alert("This repository is private.\nPlease contact to starmastar1126@gmail.com") : window.open(item.github, '_blank') }}><img className='icon' src={`${process.env.PUBLIC_URL}/assets/icons/software/git.png`} alt='git' /></button>}
                            </div>
                        </div >
                    </div >
                </div >
            ))}
        </div >
    )
}

export default Content;