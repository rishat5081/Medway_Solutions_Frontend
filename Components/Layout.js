import Footer from "./Footer";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Head from 'next/head';
import React, { Component } from 'react';
import jsonFile from '../assests/navbar.json'

class Layout extends Component {
    state = {
        header: [],
        titleImage: ''
    }
    componentDidMount() {
        const { header, titleImage } = jsonFile
        this.setState({
            header, titleImage
        })
    }
    render() {
        const { children } = this.props
        return (
            <>
                <Head>
                    <meta charSet="UTF-8"></meta>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div>
                    <Navbar header={this.state.header} titleImage={this.state.titleImage} />
                    {children}
                    <Footer />
                </div>
            </>
        );
    }
}

export default Layout;


// const Laayout = ({ children }) => {
//     return (
//         <>
//             <Head>
//                 <meta charSet="UTF-8"></meta>
//                 <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//             </Head>
//             <div>
//                 <Navbar />
//                 {children}
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default Laayout;