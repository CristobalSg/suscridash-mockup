import React from 'react';
import { Carousel, Image} from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const divStyle: React.CSSProperties = {
    width: '300px',
    height: '300px',
    border: '10px solid #ccc'
}

// Mejorar caucel, es para mostrar algo lindo en el home, pero de momento no se alcanzo a personalizar del todo
const Carusel: React.FC = () => (
    <Carousel autoplay>
        <div style={divStyle}>
            <Image
            preview={false}
            // width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={{height: '160px', objectFit: 'cover' }}
        />
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);

export default Carusel;