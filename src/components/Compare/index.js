import React from 'react'
import { compareData } from '../../fakeData/compare'
import CompareCard from './CompareCard'
const Compare = () => {
    return (
        <div className='compare'>

            <div className="auto-container">
                <h1 className="section-title">Қиёслаш</h1>
                <div className="compare__wrapper">
                    {
                        compareData && !!compareData.length && (
                            compareData.map(item => (
                                <CompareCard key={item.id} {...item} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Compare
