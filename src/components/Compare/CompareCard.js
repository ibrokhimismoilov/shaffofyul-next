import React from 'react'

const CompareCard = ({ id, title, right }) => {
    return (
        <div className='compare__wrapper-card'>
            <div className="title">{title}</div>
            <div className="right">
                {
                    right.map(item => {
                        console.log(item);
                        return (
                            <div key={item.id} className="right__row">
                                {
                                    item.type === 1 && (
                                        <>
                                            <p className="right__row-col right__row-left">
                                                {item.text}
                                            </p>
                                            <p className="right__row-col right__row-right">
                                                <span data-aos="linear-chart" data-aos-duration="800" style={{ backgroundColor: item.isLight ? "#5BD0D0" : "#2473EA", maxWidth: item.colorWidth }} />
                                                {item.linearText}
                                            </p>
                                        </>
                                    )
                                }
                                {
                                    item.type === 0 && (
                                        <>
                                            <p className="right__row-col right__row-left"></p>
                                            <p className="right__row-col right__row-right right__row-title">{item.title}</p>
                                        </>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompareCard
