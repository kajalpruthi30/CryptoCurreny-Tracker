import React, { useState } from 'react';

function CoinInfo({ heading, desc }) {

    const [flag, setFlag] = useState(false);
    const shortDesc = desc.slice(0, 350) + "<p style='color: grey; margin-top: 0.5rem'>Read More...</p>";
    const longDesc = desc + "<p style='color: grey; margin-top: 0.5rem'>Read Less...</p>";

    const styleAnchorTags = {
        p: {
            a: {
                color: 'blue !important',
                textDecoration: 'underline !important'
            }
        }
    };

    // desc has anchor tags within it as <a href = "#">Bitcoin</a>

    return (
        <div className='grey-wrapper'>
            <h2 className='cursor-pointer mb-0.5'>{heading}</h2>
            {desc.length > 350 ? (
                <p className='cursor-pointer'
                    onClick={() => setFlag(!flag)}
                    dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
                    style={styleAnchorTags}></p>)
                : <p dangerouslySetInnerHTML={{ __html: desc }} style={styleAnchorTags}></p>}
        </div>
    );
}

export default CoinInfo;

