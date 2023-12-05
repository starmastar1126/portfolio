import PreviousWorks from './components/PreviousWorks';
import { data } from './configs/dummy';
// import { data } from './configs/soumya';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ReactGA from 'react-ga';
// ReactGA.initialize('G-47X7RDBMNK');
// ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    return (
        <PreviousWorks
            title={'My Previous Works'}
            description={'&emsp;I possess extensive expertise as a seasoned full-stack developer with over 10 years of experience. I have built and published numerous projects, including websites and mobile applications, across various domains such as entertainment, social media, finance, e-commerce, real estate, healthcare, and more. I have successfully completed 17 projects, both large and small in scale.'}
            data={data}
        />
    );
}

export default App;