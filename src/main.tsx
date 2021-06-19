import React from 'react';
import ReactDOM from 'react-dom';

import(/* webpackChunkName: "carousel-component" */ './components/Carousel').then(({ default: Carousel }) => {
    const DemoCarousel = () => (
        <Carousel
            showArrows
            // infiniteLoop
            autoPlay
            centerMode
            centerSlidePercentage={80}
            emulateTouch
            dynamicHeight
            axis="vertical"
            onClickItem={(...args) => console.log('onClickItem', ...args)}
            onChange={(...args) => console.log('onChange', ...args)}
            onClickThumb={(...args) => console.log('onClickThumb', ...args)}
        >
            <div style={{ height: 800, background: 'blue' }}>
                <p className="legend">Legend 1</p>
            </div>
            <div style={{ height: 300, background: 'hotpink' }}>
                <p className="legend">Legend 2</p>
            </div>
            <div style={{ height: 500, background: 'violet' }}>
                <p className="legend">Legend 3</p>
            </div>
            <div style={{ height: 700, background: 'salmon' }}>
                <p className="legend">Legend 4</p>
            </div>
            <div style={{ height: 400, background: 'orange' }}>
                <p className="legend">Legend 5</p>
            </div>
            <div style={{ height: 300, background: 'teal' }}>
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
    ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
});
