import Header from './PreviousWorks/Header';
import Description from './PreviousWorks/Description';
import Content from './PreviousWorks/Content';

const PreviousWorks = ({ title, description, data }) => {
    return (
        <div className='previous-works'>
            <div className='track-container'>
                <Header title={title} />
                <Description description={description} />
                <Content data={data} />
            </div>
        </div>
    );
}

export default PreviousWorks;