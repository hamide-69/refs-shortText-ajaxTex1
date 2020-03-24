
import React from 'react'
import Nav from './Nav';
import Footer from './Footer';



function Template({children}){
    return(
        <div>
<Nav />
[children]
<Footer />
        </div>

        )


}

export default Template