import React from 'react';
import Card from '../Card';
import { CARDS } from '../../fakeData/cards';
import Circle from '../Circle';

const Main = () => {
    return (
        <div id="cards" className='main'>
            <Circle size="lg" />
            <Circle size="sm" />
            <Circle size="sm" />
            <Circle size="lg" isBlur={true} />
            <div className="card-wrapper">
                <div className="auto-container">
                    <h1 className="section-title">Автомобил йўллари соҳасидаги очиқ статистикалар рўйхати</h1>
                    {/* <p className="section-desc">Suscipit dictum tempus laoreet quam. Viverra donec molestie pellentesque suspendisse.</p> */}
                    {
                        CARDS && !!CARDS.length && CARDS.map((item) => {
                            return (
                                <Card key={item.id} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
