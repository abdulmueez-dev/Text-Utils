import React from 'react'

export default function About(props) {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-3" style={{width:"80vw", margin:"auto", backgroundColor:props.mode === 'light'?'white':'rgb(31 31 32)'}}>
            <div className="col">
                <div className="card" style={{ backgroundColor:props.mode === 'light'?'white':'rgb(31 31 32)',color:props.mode === 'light'?'black':'white',borderColor:props.mode === 'light'?'black':'white'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS66RULh3HltRX6wFBC9Iktelyb04ccdyklt9XOgLCcAKOozzNi2C7dFzznorcrMHTu-0&usqp=CAU" style={{height:"200px",width:"80%",margin:"auto",borderRadius:"5px"}} className="card-img-top my-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">TEXT EDITING</h5>
                        <p className="card-text">You can quickly remove extra spaces,capitalise or de-capitalize and copy your text to clipboard.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{ backgroundColor:props.mode === 'light'?'white':'rgb(31 31 32)',color:props.mode === 'light'?'black':'white',borderColor:props.mode === 'light'?'black':'white'}}>
                    <img src="https://us.123rf.com/450wm/bsd555/bsd5552009/bsd555200903384/156214245-reading-examination-rgb-color-icon-comprehension-practice-tests-school-and-university-education-text.jpg?ver=6" style={{height:"200px",width:"80%",margin:"auto",borderRadius:"5px"}} className="card-img-top my-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">TEXT SUMMARY</h5>
                        <p className="card-text">TextUtils automatically analyzes your text and tells your how many characters and words your text contains and how much time will it take to read it.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{ backgroundColor:props.mode === 'light'?'white':'rgb(31 31 32)',color:props.mode === 'light'?'black':'white',borderColor:props.mode === 'light'?'black':'white'}}>
                    <img src="https://tldrthis.com/static/images/landing/auto_summary.png" style={{height:"200px",width:"80%",margin:"auto",borderRadius:"5px"}} className="card-img-top my-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">TEXT PREVIEW</h5>
                        <p className="card-text">You can preview and read your text without extra spaces that will make it much easier to read.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{ backgroundColor:props.mode === 'light'?'white':'rgb(31 31 32)',color:props.mode === 'light'?'black':'white',borderColor:props.mode === 'light'?'black':'white'}}>
                    <img src="https://ventsmagazine.com/wp-content/uploads/2021/02/Is-dark-mode-better-for-you-980x551-1.png" style={{height:"200px",width:"80%",margin:"auto",borderRadius:"5px"}} className="card-img-top my-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">MODE SWITCHING</h5>
                        <p className="card-text">You can switch between light and dark modes that will reduce eye-strain and will provide better reading experience.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
