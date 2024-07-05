import Header from '../components/PreviousWorks/Header';
import Description from '../components/PreviousWorks/Description';
import Content from '../components/PreviousWorks/Content';

import '../styles/Works.css';

const PreviousWorks = ({ title, description, data }) => {
    return (
        <div className='previous-works'>
            <div className='container'>
                <Header title={title} />
                <Description description={description} />
                <Content data={data} />
            </div>
        </div>
    );
}

export default PreviousWorks;